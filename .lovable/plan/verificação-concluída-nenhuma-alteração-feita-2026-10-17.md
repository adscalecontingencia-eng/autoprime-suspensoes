# Verificação concluída (nenhuma alteração feita)

Checado pela internet em 17/10/2026 19:27 UTC.

| URL | Status | Title | Marca |
|---|---|---|---|
| www.autoprimesuspensoes.com.br/ | 200 (GitHub Pages) | Oficina em Conselheiro Lafaiete \| Auto Prime Centro Automotivo | NOVA |
| autoprime-suspensoes.lovable.app/ | 200 | o mesmo | NOVA |
| www.../alinhamento-3d-conselheiro-lafaiete | **404** | carregado pelo navegador: "Alinhamento 3D em Conselheiro Lafaiete \| Auto Prime Centro Automotivo" | NOVA |

Evidência: os dois sites carregam o mesmo arquivo de código (`index-CkhiCiBr.js`). O domínio oficial é servido pelo GitHub Pages, não pela publicação do Lovable. Por isso o deployment_id do Lovable não comanda esse domínio: quem atualiza o domínio é o envio para o GitHub. O texto "Auto Prime Suspensões" não aparece em nenhuma das páginas.

## Problema encontrado (só seria corrigido se você aprovar)
A página de alinhamento 3D aparece para quem visita, mas o servidor responde "404 não encontrada". O Google pode deixar de indexar essa página e também as de balanceamento, cidades, blog e FAQ.

Correção proposta: no envio para o GitHub, gerar uma cópia da página para cada endereço do sitemap, para que cada um responda 200. Nada seria publicado sem a sua autorização.
