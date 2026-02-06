# About this Project

Loyola University Chicago Operation Smile (LUCOS) is a student-led organization dedicated to supporting Operation Smile’s global mission to provide safe, high-quality surgical care for children and adults born with cleft conditions. This site serves as our fundraising and outreach platform.

## Video

https://github.com/user-attachments/assets/da7dbf63-893b-424d-8649-cff9240fc087

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve that folder with any static host.

## Update the GoFundMe link

Edit `src/App.tsx` and set:

```ts
const GOFUNDME_URL = 'https://your-real-gofundme-url';
```

## Replace event photos

Swap the `src` of the two gallery images in the "Events" section of `src/App.tsx`. Keep the same aspect ratio (4:3) for consistent layout.

## Tech

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Semantic HTML, accessibility (focus, tap targets, contrast), toast on Donate
