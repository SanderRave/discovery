# 📌 Implementatie van Custom Fonts in TailwindCSS (Safiro)

Deze documentatie beschrijft hoe je het **Safiro** lettertype correct implementeert in een **Vite + TailwindCSS** project.

---

## ✅ **1. Voeg de font-bestanden toe**

Plaats de `.woff2` en `.woff` bestanden in de `public/fonts/` map:

```
/your-vite-project/
│── public/
│   ├── fonts/
│   │   ├── safiro-regular-webfont.woff2
│   │   ├── safiro-regular-webfont.woff
│   │   ├── safiro-bold-webfont.woff2
│   │   ├── safiro-bold-webfont.woff
│   │   ├── ...
│── src/
│── index.html
│── tailwind.config.js
│── vite.config.js
│── package.json
```

---

## ✅ **2. Definieer `@font-face` in CSS**

Maak een bestand `src/assets/styles/fonts.css` en voeg toe:

```css
@font-face {
  font-family: "Safiro";
  src: url("/fonts/safiro-regular-webfont.woff2") format("woff2"), url("/fonts/safiro-regular-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Safiro Bold";
  src: url("/fonts/safiro-bold-webfont.woff2") format("woff2"), url("/fonts/safiro-bold-webfont.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

Importeer deze CSS in `src/main.css` of `index.css`:

```css
@import "./assets/styles/fonts.css";
```

---

## ✅ **3. Configureer `tailwind.config.js`**

Open `tailwind.config.js` en voeg de fonts toe:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["font-safiro", "font-safiroBold"],
  theme: {
    extend: {
      fontFamily: {
        safiro: ["'Safiro'", "sans-serif"],
        safiroBold: ["'Safiro Bold'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

🚀 **Belangrijk:** De **`safelist`** dwingt Tailwind om deze classes niet weg te optimaliseren.

---

## ✅ **4. Gebruik de custom fonts in je project**

Gebruik nu Tailwind classes in je HTML of JSX:

```html
<h1 class="font-safiro text-3xl">Dit is Safiro Regular</h1>
<p class="font-safiroBold text-xl">Dit is Safiro Bold</p>
```

---

## ✅ **5. Herstart Tailwind en Vite**

Om de wijzigingen door te voeren:

```bash
npm run dev
```

Als Tailwind de class niet toepast, wis dan de cache en herstart:

```bash
rm -rf .next node_modules/.vite
npm run dev
```

---

## **🚀 Laatste Debug-checks**

1. **Zie je `font-family: Safiro` in de Computed Styles-tab van DevTools?**
2. **Zie je `font-safiro` in de gegenereerde CSS (`output.css`)?**
3. **Werkt het font correct in de browser?**
