/* Entrega o patch de beta/alfa CONTANDO o download.
 *
 *   GET /functions/v1/baixar?p=gaia-saver-en   ->  302 para o arquivo no Storage
 *
 * O Storage entrega e nao conta. Esta funcao registra uma linha em `patch_download`
 * e so entao redireciona. E o link que vai na pagina do Patreon do jogo.
 *
 * Tres decisoes que valem ser ditas:
 *
 *  - ABERTA de proposito (verify_jwt = false, declarado no config.toml). O link e
 *    clicado de dentro do Patreon, que nao manda header nenhum. O que protege o
 *    beta e o Patreon, nao esta funcao — ela sempre entregou o que o link pede.
 *
 *  - CONTAR NUNCA IMPEDE BAIXAR. Se o banco falhar, o redirect sai do mesmo jeito.
 *    Perder um numero e barato; deixar quem apoia sem o arquivo, nao.
 *
 *  - JANELA DE 10 MINUTOS POR IP, igual a do GitHub Releases. Nao e detalhe: e o
 *    que faz o numero do beta significar a mesma coisa que o numero do release,
 *    e derruba a inflacao boba de quem clica duas vezes.
 */
const SB_URL = Deno.env.get("SUPABASE_URL")!;
const CHAVE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const BUCKET = "patches";
const JANELA_MIN = 10;

const cab = {
  apikey: CHAVE,
  Authorization: `Bearer ${CHAVE}`,
  "Content-Type": "application/json",
};

/* O IP nao se guarda: guarda-se o hash dele, e so para saber se o mesmo clique
   voltou dentro da janela. O sal e a chave de servico — ja e segredo, ja esta no
   ambiente da funcao, e nunca sai do servidor. */
async function hash(ip: string): Promise<string> {
  const b = new TextEncoder().encode(ip + CHAVE);
  const d = await crypto.subtle.digest("SHA-256", b);
  return Array.from(new Uint8Array(d)).slice(0, 16)
    .map((x) => x.toString(16).padStart(2, "0")).join("");
}

async function registrar(base: string, req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  const ih = ip ? await hash(ip) : null;
  if (ih) {
    const desde = new Date(Date.now() - JANELA_MIN * 60_000).toISOString();
    const r = await fetch(
      `${SB_URL}/rest/v1/patch_download?select=id&base=eq.${base}` +
        `&ip_hash=eq.${ih}&em=gte.${desde}&limit=1`,
      { headers: cab },
    );
    if (r.ok && (await r.json()).length) return; // ja contado nesta janela
  }
  await fetch(`${SB_URL}/rest/v1/patch_download`, {
    method: "POST",
    headers: { ...cab, Prefer: "return=minimal" },
    body: JSON.stringify({
      base,
      ip_hash: ih,
      ua: (req.headers.get("user-agent") || "").slice(0, 300),
    }),
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204 });

  const base = new URL(req.url).searchParams.get("p") || "";
  if (!/^[a-z0-9][a-z0-9-]{0,80}$/.test(base)) {
    return new Response("patch nao informado\n", { status: 400 });
  }

  const r = await fetch(
    `${SB_URL}/rest/v1/patch_arquivo?select=arquivo&base=eq.${base}&limit=1`,
    { headers: cab },
  );
  const linhas = r.ok ? await r.json() : [];
  if (!linhas.length) return new Response("patch nao encontrado\n", { status: 404 });

  const destino = `${SB_URL}/storage/v1/object/public/${BUCKET}/${linhas[0].arquivo}`;

  /* contar nunca impede baixar */
  try {
    await registrar(base, req);
  } catch (e) {
    console.error("falhou ao contar", base, e);
  }

  return new Response(null, {
    status: 302,
    headers: { Location: destino, "Cache-Control": "no-store" },
  });
});
