# 508.dev Website

The 508.dev primary website. Also a feeder template for further marketing sites in the future.

Primarily an Astro project. Statically built at build time (server side generated), based on data
taken from our CRM (espo). Styling done via Tailwind, with most styling taken
from Tailwind UI (paid component library).

Deployed on our coolify instance, which watches the codeberg repo for changes, and rebuilds on change.
Future work to include triggering redeploy on changes to the CMS, for now, requires manual redeploy
when changes occur on CRM or CMS.

In order to add new members or adjust their skills or descriptions, you'll need an espo account, message Caleb, Sam, or Nestor.

## Development

### Setup

- You must have node vs >= 16. Recommend NVM for node version management.
- Copy the sample env file to a real env file:

```bash
cp .sample.env
```

- Populate the `.env` with real API keys and URLs, which you can acquire from the "all 508 members" collection on our password manager, or, ask another member.
- Install NPM packages

```bash
npm install
```

- Start the dev server

```bash
npm run dev
```

- Before making a commit, run prettier

```bash
npm run prettier
```

- Also, run typescript checks

```bash
npm run astro check
```

### Deployment

Deployment automatically occurs on merge to main. Our coolify instance pulls the latest
changes, then builds the project:

```bash
npm run build
```

It then statically servers the contents of `./dist` .

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
