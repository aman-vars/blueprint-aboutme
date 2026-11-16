# Aman Varshney Portfolio

Built with React + TypeScript + Vite. Project and profile data are local and typed. No backend or Supabase setup is included.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173).

## Check and preview the production build

```sh
npm run lint
npm run build
npm run preview
```

Open the printed preview URL (normally http://localhost:4173).

## Edit content

- `src/data/profile.ts`: name, bio, social URLs, and experience descriptions.
- `src/data/projects.ts`: typed project records, descriptions, contributions, methods, repository URLs, and demo URLs. Set missing URLs to `null`; the page labels them as pending.
- `src/App.tsx`: page structure and shared labels.
- `src/styles.css`: responsive layout, colors, and typography.
- `index.html`: browser title and search description.
