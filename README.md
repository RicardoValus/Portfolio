# Portfólio — Ricardo Medlo Valus

Página única em Angular, com Angular Material, conteúdo em TypeScript e prerender estático da rota `/` para o HTML chegar com as meta tags no LinkedIn e no WhatsApp.

## Como rodar

```bash
npm install
npx ng serve
npx ng build
```

O `ng serve` sobe em `http://localhost:4200/`. O `ng build` gera o site em `dist/portfolio/browser`.

## Como editar o conteúdo

Tudo que aparece na página sai de `src/app/data/`:

| Arquivo | O que controla |
| --- | --- |
| `site.config.ts` | Nome, e-mail, LinkedIn, GitHub, caminho do currículo e URL canônica |
| `profile.ts` | Headline, proposta de valor, textos do Sobre e os três fatos |
| `experience.ts` | Linha do tempo |
| `projects.ts` | Projetos, filtros, destaque e motivo de repositório privado |
| `skills.ts` | Grupos da seção Stack |
| `education.ts` | Formação |
| `tech-icons.ts` | Ícones do simple-icons e chips de texto |

Para incluir um projeto, acrescente um objeto em `projects` com `id`, `name`, `description`, `category` (`Web`, `Mobile`, `Full stack` ou `Infra`), `stack`, `repoUrl`, `status`, `isPrivate`, `featured`, `visible` e `screenshot`. Use `tech('Angular', 'siAngular')` quando existir ícone e `textChip('Nome')` quando não existir. Projeto privado: `isPrivate: true`, `repoUrl: null` e `privateReason` com o texto que deve aparecer no card. O card mostra exatamente: `Repositório privado: {motivo}. Posso apresentar o projeto em uma reunião.` Com `visible: false` o item continua no arquivo e não entra na página.

Para um projeto privado que tenha instaladores públicos, preencha `liveUrl`. O card mostra o link "Releases" e não mostra o repositório.

## Screenshots e currículo

Coloque os arquivos em `public/`:

- `public/assets/projects/<id>.webp` — uma imagem por `id` de `projects.ts`
- `public/assets/curriculo-ricardo-medlo-valus.pdf` — o link "Baixar currículo" já aponta para esse caminho
- `public/assets/profile.webp` — opcional, 160×160. Sem o arquivo, a seção Sobre mostra o monograma RMV
- `public/assets/og-image.png` — 1200×630, usada no Open Graph

Enquanto o screenshot não existe, o card mostra um painel com o nome do projeto. Depois de salvar o `.webp`, inclua o `id` em `availableScreenshots` no mesmo `projects.ts`.

## Deploy na Vercel

1. Envie este repositório para o GitHub e conecte o projeto na Vercel.
2. Framework preset: **Angular**.
3. Build command: `npm run build`.
4. Output directory: `dist/portfolio/browser`.
5. Não é necessário `vercel.json`: o build já prerenderiza `/` em HTML estático.
6. Depois do domínio de produção, atualize a URL nos dois lugares:
   - `siteUrl` em `src/app/data/site.config.ts`
   - `canonical`, `og:url`, `og:image` e `twitter:image` em `src/index.html`
7. Faça um novo deploy. Para atualizar a prévia do LinkedIn, use o [Post Inspector](https://www.linkedin.com/post-inspector/). O WhatsApp também lê essas meta tags do HTML prerenderizado; se a prévia antiga continuar, reenvie o link depois do deploy.
