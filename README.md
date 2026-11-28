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

O HTML estático fica em `dist/portfolio/browser`.

Uso Node 22 ou 24. No 20 o Angular avisa que a versão não é a esperada.

## Onde eu mexo

O que aparece na página está em `src/app/data/`:

- `site.config.ts`: nome, e-mail, WhatsApp, LinkedIn, GitHub, currículo e a URL do site
- `profile.ts`: texto do topo e do Sobre
- `experience.ts`: experiências
- `projects.ts`: projetos
- `skills.ts`: stack
- `education.ts`: formação e certificados
- `tech-icons.ts`: ícone do simple-icons, ou só o nome quando não tem

Projeto novo: copio um que já existe e troco os campos. Selos opcionais: `lifecycle` (`live`, `in-development`, `completed`) e `access` (`open-source`, `private`). Links ficam em `links` e só aparecem quando a URL existe. Sem `links`, o card usa `repoUrl` com o texto "Ver código". Se ainda não quero na página, `visible: false`.

A imagem do card é `public/assets/projects/<id>.webp`. Salvei o arquivo, incluo o `id` em `availableScreenshots`. Sem isso o card mostra só o nome.

Currículo: `public/assets/curriculo-ricardo-medlo-valus.pdf`.
Foto: `public/assets/profile.webp`.
Imagem do link: `public/assets/og-image.png` (1200×630).

## Deploy (Firebase Hosting)

No ar em https://ricardomedlovalus.com.br.

```bash
npm run deploy
```

Projeto Firebase: `ricardo-medlo-valus`. Output: `dist/portfolio/browser`.

Domínio canônico e SEO:

- `siteUrl` / `googleAnalyticsId` em `src/app/data/site.config.ts`
- canonical, Open Graph, Twitter e JSON-LD em `src/index.html`
- `public/robots.txt` e `public/sitemap.xml`

Search Console: verificar a propriedade `https://ricardomedlovalus.com.br`, enviar `https://ricardomedlovalus.com.br/sitemap.xml` e solicitar indexação da home. A prévia do LinkedIn eu atualizo no [Post Inspector](https://www.linkedin.com/post-inspector/). O WhatsApp demora pra soltar a prévia antiga; reenvio o link depois do deploy.
