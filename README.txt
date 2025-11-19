
Primo TV - PWA (Pronto para publicar)

O que tem aqui:
- index.html, manifest.json, sw.js, channels.json (fallback), icons/
- O PWA busca automaticamente a lista online (configurável).

Como publicar no Vercel (2 minutos) — opcional (eu recomendo):
1. Crie uma conta em https://vercel.com/ (ou faça login com GitHub/Google).
2. Clique em "New Project" → "Import from Git" → Escolha um repositório GitHub.
   - Alternativa simples: clique em "Deploy" em https://vercel.com/new and drag & drop the ZIP.
3. Faça upload do conteúdo deste ZIP (pasta raiz com index.html).
4. Aguarde ~30s — o site estará disponível em primotv.vercel.app (se o nome estiver livre).
5. Abra no celular, no Chrome: vá ao menu → "Add to Home screen" para instalar.

Como alterar a lista online:
- Crie um arquivo channels.json hospedado (GitHub raw ou gist) com a mesma estrutura que channels.json.
- No navegador do dispositivo salve localStorage.setItem('channels_url', 'URL_RAW_DO_SEU_JSON');
  (ex: abra o console de devtools e rode o comando) — ou eu te mostro como na prática.
- O PWA tenta buscar a URL configurada e recorre a channels.json do app se falhar.

Observações:
- Gravação (DVR) não está disponível em PWA.
- Para melhor reprodução dentro do player, use URLs diretas .m3u8 (HLS).
- Se quiser, eu posso rodar os passos finais para você (gerar repo no GitHub e instruções exatas).
