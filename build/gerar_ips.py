#!/usr/bin/env python3
"""Gera e VALIDA o patch IPS de uma tradução (original -> traduzida).

Romhack se distribui como patch, nunca como ROM: a ROM tem direito autoral,
o patch só carrega a diferença. O IPS aceita expansão de tamanho naturalmente,
porque escrever além do fim do arquivo o estende.

Formato: "PATCH" + registros [off:3][tam:2][dados] + "EOF".
Registro RLE ([tam:2]=0 + [n:2][byte:1]) para runs longos — bancos novos são quase todos $FF.

ROM de NES (24/10/2026): o 1º registro grava os bytes 4-15 do cabeçalho INTEIROS, mesmo os
que já batem com a nossa base. O jogador aplica noutro dump, quase sempre de cabeçalho iNES 1.0;
gravando só a diferença, o Maniac e o Gorilla saíam com byte 7 = 08 (NES 2.0) e byte 11 = 00
(sem CHR-RAM) = tela de lixo no MiSTer. `conferir_cabecalho` prova o resultado nessas bases.
"""
import sys, os, hashlib

MAX = 0xFFFF
EOF_OFF = 0x454F46          # "EOF": nenhum registro pode começar aqui
INES = b"NES\x1a"


def eh_nes(rom: bytes) -> bool:
    return len(rom) >= 16 and rom[:4] == INES


def bases_alheias(orig: bytes):
    """A nossa base com o cabeçalho que o jogador costuma ter: iNES 1.0 limpo e com lixo."""
    ines1 = bytearray(orig)
    ines1[7:16] = bytes((orig[7] & 0xF0,)) + bytes(8)           # sem os campos do NES 2.0
    sujo = bytearray(orig)
    sujo[7:16] = b"DiskDude!"                                    # lixo de dump antigo
    return {"iNES 1.0": bytes(ines1), "DiskDude!": bytes(sujo)}


def conferir_cabecalho(orig: bytes, ips: bytes, novo: bytes):
    """Patch de NES aplicado numa base de cabeçalho alheio tem de dar a traduzida inteira.
    Devolve a lista das bases que falham (vazia = ok)."""
    if not eh_nes(orig):
        return []
    return [nome for nome, base in bases_alheias(orig).items() if aplicar(base, ips) != novo]


def gerar(orig: bytes, novo: bytes) -> bytes:
    assert len(novo) >= len(orig), "a traduzida não pode ser menor que a original"
    out = bytearray(b"PATCH")
    nes = eh_nes(orig) and eh_nes(novo)

    def emitir(off, dados):
        i = 0
        while i < len(dados):
            j = i
            while j < len(dados) and dados[j] == dados[i]:
                j += 1
            run = j - i
            if run >= 16:                                   # RLE compensa a partir de ~9 B
                n = min(run, MAX)
                if off + i == EOF_OFF:                      # armadilha do offset "EOF"
                    out.extend((off + i).to_bytes(3, "big").replace(b"", b"") if False else b"")
                    out.extend((off + i - 1).to_bytes(3, "big") + (2).to_bytes(2, "big")
                               + bytes((novo[off + i - 1], dados[i])))
                    i += 1
                    continue
                out.extend((off + i).to_bytes(3, "big") + b"\x00\x00"
                           + n.to_bytes(2, "big") + bytes((dados[i],)))
                i += n
                continue
            k = i
            while k < len(dados) and (k - i) < MAX:
                j2 = k
                while j2 < len(dados) and dados[j2] == dados[k]:
                    j2 += 1
                if j2 - k >= 16:
                    break
                k = j2
            if k == i:
                k = min(i + MAX, len(dados))
            bloco = dados[i:k]
            o = off + i
            if o == EOF_OFF:                                # desloca 1 byte para trás
                o -= 1
                bloco = bytes((novo[o],)) + bloco
            out.extend(o.to_bytes(3, "big") + len(bloco).to_bytes(2, "big") + bloco)
            i = k

    n = len(orig)
    i = 0
    if nes:                                                 # cabeçalho inteiro, sempre
        out.extend((4).to_bytes(3, "big") + (12).to_bytes(2, "big") + novo[4:16])
        if novo[:4] != orig[:4]:
            emitir(0, novo[:4])
        i = 16
    while i < n:                                            # trechos alterados dentro do original
        if novo[i] == orig[i]:
            i += 1
            continue
        j = i
        iguais = 0
        while j < n and iguais < 8:                         # tolera até 8 bytes iguais no meio
            iguais = iguais + 1 if novo[j] == orig[j] else 0
            j += 1
        fim = j - iguais
        emitir(i, novo[i:fim])
        i = j
    if len(novo) > n:                                       # a expansão inteira
        emitir(n, novo[n:])
    out.extend(b"EOF")
    return bytes(out)


def aplicar(orig: bytes, ips: bytes) -> bytes:
    assert ips[:5] == b"PATCH"
    rom = bytearray(orig)
    p = 5
    while True:
        if ips[p:p+3] == b"EOF":
            break
        off = int.from_bytes(ips[p:p+3], "big"); p += 3
        tam = int.from_bytes(ips[p:p+2], "big"); p += 2
        if tam == 0:                                        # RLE
            n = int.from_bytes(ips[p:p+2], "big"); p += 2
            b = ips[p]; p += 1
            dados = bytes([b]) * n
        else:
            dados = ips[p:p+tam]; p += tam
        if off + len(dados) > len(rom):
            rom.extend(b"\x00" * (off + len(dados) - len(rom)))
        rom[off:off+len(dados)] = dados
    return bytes(rom)


if __name__ == "__main__":
    orig_p, novo_p, saida = sys.argv[1], sys.argv[2], sys.argv[3]
    orig = open(orig_p, "rb").read()
    novo = open(novo_p, "rb").read()
    ips = gerar(orig, novo)
    # VALIDAÇÃO: aplicar de volta tem de reproduzir a traduzida byte a byte
    volta = aplicar(orig, ips)
    ok = volta == novo
    if not ok:
        dif = sum(1 for a, b in zip(volta, novo) if a != b) + abs(len(volta) - len(novo))
        print(f"FALHOU: {dif} bytes divergem", file=sys.stderr)
        sys.exit(1)
    falhas = conferir_cabecalho(orig, ips, novo)
    if falhas:
        print(f"FALHOU: numa base de cabeçalho {', '.join(falhas)} o patch não dá a traduzida",
              file=sys.stderr)
        sys.exit(1)
    open(saida, "wb").write(ips)
    print(f"{os.path.basename(saida)}: {len(ips)//1024} KB  "
          f"(original {len(orig)//1024} KB -> traduzida {len(novo)//1024} KB)  "
          f"aplicação conferida ✓  md5 alvo {hashlib.md5(novo).hexdigest()[:12]}"
          + (f"  cabeçalho {novo[4:16].hex(' ')} também na base iNES 1.0 ✓" if eh_nes(orig) else ""))
