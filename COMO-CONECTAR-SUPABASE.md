# Conectar o site ao Supabase

## 1. Gerar o token (30 segundos, no navegador onde você já está logado)

https://supabase.com/dashboard/account/tokens → **Generate new token**
Nome: `patchclan-cli`. Copie o valor — ele **começa com `sbp_`** e só aparece uma vez.

## 2. Guardar o token aqui, não no chat

```bash
echo 'SUPABASE_ACCESS_TOKEN=sbp_cole_aqui' > ~/patchclan-site/.env.local
```

O arquivo já está no `.gitignore`. Um token no chat vira histórico; num arquivo local, não.

## 3. Me avisar

Eu faço o resto: crio o projeto na sua organização, aplico a migration, semeio o
conteúdo, crio o seu usuário do painel e preencho o `config.js`.

## Por que não estraga o login do Tomei Gosto

O CLI aceita **perfis**. Vou usar `--profile patchclan`, então o login atual
(`tomeigostolegal@gmail.com`) continua intacto e os dois convivem.

## Se preferir não passar token nenhum

Crie o projeto você mesmo no dashboard — **New project**, org sua (não a do Tomei
Gosto, que já tem os dois do plano grátis), região South America (São Paulo) — e
guarde as três linhas em `~/patchclan-site/.env.local`:

```
SB_URL=https://SEUREF.supabase.co
SB_ANON=eyJ...
SB_SERVICE=eyJ...
```

Project Settings → API tem as três. Eu sigo daí.
