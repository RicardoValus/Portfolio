# Portfólio

Meu site. Uma página só, em Angular e Angular Material. Texto e dados ficam em TypeScript, então eu não fico caçando frase no HTML.

O build já entrega a home em HTML. LinkedIn e WhatsApp leem título, descrição e imagem desse arquivo.

## Rodar

```bash
npm install
npm start
```

Abre em http://localhost:4200.

```bash
npm run build
```

O que vai pra Vercel está em `dist/portfolio/browser`.

Uso Node 22 ou 24. No 20 o Angular avisa que a versão não é a esperada.

## Onde eu mexo

O que aparece na página está em `src/app/data/`:

- `site.config.ts` — nome, e-mail, WhatsApp, LinkedIn, GitHub, currículo e a URL do site
- `profile.ts` — texto do topo e do Sobre
- `experience.ts` — experiências
- `projects.ts` — projetos
- `skills.ts` — stack
- `education.ts` — formação e certificados
- `tech-icons.ts` — ícone do simple-icons, ou só o nome quando não tem

Projeto novo: copio um que já existe e troco os campos. Privado fica com `isPrivate: true`, `repoUrl: null` e o motivo em `privateReason`. Se ainda não quero na página, `visible: false`.

A imagem do card é `public/assets/projects/<id>.webp`. Salvei o arquivo, incluo o `id` em `availableScreenshots`. Sem isso o card mostra só o nome.

Currículo: `public/assets/curriculo-ricardo-medlo-valus.pdf`.
Foto: `public/assets/profile.webp`.
Imagem do link: `public/assets/og-image.png` (1200×630).

## Vercel

No ar em https://ricardo-medlo-valus-3yut.vercel.app.

Preset Angular, build `npm run build`, output `dist/portfolio/browser`. Sem `vercel.json`.

Se eu trocar o domínio, atualizo a URL nestes lugares:

- `siteUrl` em `src/app/data/site.config.ts`
- canonical, Open Graph e o JSON-LD em `src/index.html`
- `public/robots.txt` e `public/sitemap.xml`

Depois mando o sitemap no Search Console. A prévia do LinkedIn eu atualizo no [Post Inspector](https://www.linkedin.com/post-inspector/). O WhatsApp demora pra soltar a prévia antiga; reenvio o link depois do deploy.
