# Milestone 1 — Hello World

## Goal
Get a React app running in your browser showing a simple Hello World page.
That is the only goal. Do not move to Milestone 2 until this works.

---

## What you will learn in this milestone
- How to create a React project with Vite
- What the files in a React project mean
- How to edit your first component
- How to use Tailwind CSS for basic styling
- How to use Cursor and Claude to help you along the way

---

## Step 1 — Create the project

Open your terminal and run these commands one at a time.

```bash
npm create vite@latest smart-order-ui -- --template react
```
When prompted:
- Framework: React
- Variant: JavaScript (not TypeScript — keep it simple for now)

```bash
cd smart-order-ui
npm install
```

Now install Tailwind:
```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

## Step 2 — Configure Tailwind

Open `vite.config.js` and replace everything with this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // this enables Tailwind in your project
  ],
})
```

Open `src/index.css` and replace everything with just this one line:

```css
@import "tailwindcss";
```

---

## Step 3 — Clean up the default files

Vite gives you a demo app by default. We don't need it.

Open `src/App.jsx` and replace everything with this:

```jsx
// App.jsx — this is the root component of your React app
// Everything you see on screen starts here

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Hello World
        </h1>
        <p className="mt-2 text-gray-500">
          My Smart Order UI — starting from scratch
        </p>
      </div>
    </div>
  )
}
```

Do not touch `src/main.jsx` — it is the entry point that loads App.jsx.

---

## Step 4 — Run the app

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

You should see "Hello World" centered on a light gray page.

---

## Step 5 — Your first Cursor exercise

Now that it works, practice using Cursor to make changes.

Open `src/App.jsx` in Cursor.

**Exercise 1 — Ask Cursor to change the color:**
Press `Cmd+L` (Mac) or `Ctrl+L` (Windows) to open Cursor chat.
Type this prompt:
```
Change the background color to white and make the heading blue
```
Accept the change. See what Cursor modified.

**Exercise 2 — Ask Cursor to explain the code:**
Highlight the entire `return (...)` block.
Press `Cmd+L` and type:
```
Explain each className in this JSX like I am new to Tailwind
```
Read the explanation. This is how you learn — generate, then understand.

**Exercise 3 — Ask Cursor to add something small:**
```
Add a button below the paragraph that says "Get Started"
with a blue background and white text
```
Accept it, look at the code, then ask:
```
What does onClick do and how would I use it?
```

---

## Step 6 — Understand what you built

Before moving to Milestone 2, make sure you can answer these:

- [ ] What is `export default function App()`?
- [ ] What does `className` do — why not `class` like in HTML?
- [ ] What does `min-h-screen` mean in Tailwind?
- [ ] What does `flex items-center justify-center` do?
- [ ] What is the difference between `src/App.jsx` and `src/main.jsx`?

If you can not answer any of these — ask Cursor. Type the question directly
into Cursor chat with your file open. It will explain using your actual code.

---

## Done when
- [ ] `npm run dev` starts without errors
- [ ] You see Hello World centered in the browser
- [ ] You have made at least one change using Cursor chat
- [ ] You can answer the 5 questions above

**Only then move to Milestone 2.**

---

## Troubleshooting

**"command not found: npm"**
You need to install Node.js first. Go to nodejs.org and install the LTS version.

**Tailwind classes not working (no styling shows up)**
Make sure `@import "tailwindcss"` is the only thing in `src/index.css`
and that you added `tailwindcss()` to the plugins array in `vite.config.js`.

**Port 5173 already in use**
Run `npm run dev -- --port 3000` to use a different port.