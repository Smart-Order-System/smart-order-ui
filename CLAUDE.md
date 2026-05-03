# Smart Order UI — Claude Context File

## What this project is
A React learning project. We are starting from zero with a Hello World page
and building up step by step toward an e-commerce order UI.

We are NOT building everything at once. Each milestone adds one small thing.

**Milestone 1 — Hello World**
Goal: Get a React app running and show a Hello World page. Nothing else.

**Milestone 2 — Components and Props**
Goal: Break App.jsx into a Navbar, Hero, and Card component.
Learn how props pass data between components.

## Current milestone
**Milestone 3 — State and Interaction**
Goal: Make the page interactive using useState.
Add a working cart counter, a toggle, and a simple form.
No API calls yet — all state lives in the browser only.
---

## Tech stack
- React 18 with Vite
- Tailwind CSS for styling
- No backend connection yet

---

## Rules
- One small step at a time — do not add features not in the current milestone
- Functional components only — no class components
- Tailwind only — no CSS files, no inline styles
- Keep every component under 50 lines for now

---

## Folder structure (right now)
```
src/
├── App.jsx          ← the only file we care about in Milestone 1
├── main.jsx         ← do not touch this
└── index.css        ← only contains Tailwind import
```

## What NOT to do
- Do not add routing yet
- Do not add API calls yet
- Do not add state management yet
- Do not install extra packages yet
- Do not create extra files yet — keep it in App.jsx only