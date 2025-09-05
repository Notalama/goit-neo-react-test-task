# TravelTrucks – React + Vite

A React single-page application bootstrapped with Vite. It uses TailwindCSS, Redux Toolkit, React Router, and Axios. API calls point to a MockAPI backend by default.

## Prerequisites

- Node.js ≥ 22 (LTS recommended)
- npm ≥ 9

Verify your versions:

```bash
node -v
npm -v
```

## Quick start

```bash
git clone https://github.com/Notalama/goit-neo-react-test-task.git
cd goit-neo-react-test-task
npm install
vite
```

Open the app at `http://localhost:5173` (default Vite port).

## Available scripts

- `npm run dev`: start the Vite dev server with HMR
- `npm run build`: create a production build in `dist/`
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint on the project

## API configuration

The base URL for API requests is defined in `src/services/api.js`:

```js
const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
```

To point the app to a different backend, change `API_BASE_URL` in that file.

## Styling (TailwindCSS)

- Tailwind is enabled via the official Vite plugin and imported in `src/index.css`.
- Content scanning is configured in `tailwind.config.js`.
- Design tokens/theme variables live in `src/index.css` under the `@theme` block.

## Project structure (high level)

- `src/pages`: route-level pages
- `src/components`: reusable UI components
- `src/store`: Redux Toolkit store and slices
- `src/services`: API client and service functions

## Deployment

- Build: `npm run build` → outputs to `dist/`
- Vercel: `vercel.json` includes a SPA rewrite rule so client-side routing works.
  - Framework preset: Vite/Static
  - Build command: `vite build`
  - Output directory: `dist`

## Troubleshooting

- Port already in use: change the port (e.g., `vite --port 5174`) or stop the other process.
- Dependencies issues: remove `node_modules` and `package-lock.json`, then `npm install`.
- Network/API errors: confirm the API endpoint in `src/services/api.js` and your internet connection.
