# Nomiko Website

Brand website for Nomiko — Indonesia's first protein-fortified rice seasoning for toddlers.

**Stack:** React 17 + CRA, deployed on Vercel

---

## Project Structure

```
nomiko-web/
├── public/
│   ├── index.html
│   └── images/              ← all brand images live here
│       ├── garden-nori.png
│       ├── egg-nori.png
│       ├── salmon-nori.png
│       ├── mascot-oren-happy.png
│       ├── mascot-oren-sit.png
│       ├── mascot-oren-fish.png
│       ├── mascot-baby-happy.png
│       ├── lifestyle-toddler-play.png
│       ├── lifestyle-girl-eating.png
│       └── lifestyle-dad-son.png
├── src/
│   ├── data.js              ← single source of truth for all content
│   ├── App.js               ← all components
│   ├── App.css              ← all styles
│   └── index.js             ← entry point
├── vercel.json
└── package.json
```

**To update any text, color, or product info — only edit `src/data.js`.** You should not need to touch `App.js` for content changes.

---

## Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

---

## Deploy to Vercel via GitHub

### First time setup

1. Push this repo to GitHub:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nomiko-web.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Create React App — no extra settings needed
5. Click **Deploy**

Your site will be live at `your-project.vercel.app`

### Custom domain

In Vercel dashboard: **Settings → Domains → Add Domain**

### Subsequent deploys

Every `git push` to `main` triggers an automatic redeploy on Vercel.

```bash
git add .
git commit -m "your message"
git push
```

---

## Updating Content

All text and image references are in `src/data.js`:

- **Brand name, tagline** → `brand` object
- **Hero section** → `hero` object
- **Products** → `products` array (add/remove/edit SKUs here)
- **Why section** → `whySection` object
- **Story section** → `storySection` object
- **Shop links** → `shopLinks` array (update marketplace URLs when live)
- **Social links** → `socialLinks` array

### Adding a new product

In `src/data.js`, add an entry to the `products` array:

```js
{
  id: "new-sku",
  name: "New Flavor Sesame",
  tagline: "Protein + ...",
  description: "...",
  age: "12+ Bulan",
  color: "#hexcode",
  colorDark: "#hexcode",
  accentBg: "#hexcode",
  image: "/images/new-sku.png",   // place image in public/images/
  highlights: ["Protein ...", "Vitamin ...", "100% Alami"],
}
```

### Replacing an image

Drop the new file into `public/images/` with the same filename. No code change needed.

---

## Colors (from Nomiko brandbook)

| Name | Hex |
|---|---|
| Orange (primary) | `#F9A341` |
| Cream (background) | `#FEF6E5` |
| Pink | `#DC7BAD` |
| Green | `#037A3E` |
| Green light | `#C3D7A2` |
| Yellow | `#FFD16E` |
| Teal | `#BAD9D4` |
| Peach | `#F8A58B` |

---

## Font

**Nunito** (Google Fonts) — loaded via `public/index.html`
Weights used: 400, 600, 700, 800, 900
