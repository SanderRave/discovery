# Custom Font Integration with Tailwind & Vite

This documentation provides step-by-step instructions on how to integrate the **Safiro** font into a Tailwind CSS and Vite project, ensuring it works across all browsers including **Chrome and Safari**.

## 📂 Folder Structure

Ensure your project follows this structure:

```
/custom-font
│── public/
│   ├── fonts/
│   │   ├── safiro-regular-webfont.woff2
│   │   ├── safiro-regular-webfont.woff
│   │   ├── safiro-bold-webfont.woff2
│   │   ├── safiro-bold-webfont.woff
│   │   ├── ... (other font variations)
│── src/
│   ├── assets/styles/fonts.css
│   ├── index.css
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│── tailwind.config.js
│── index.html
```

---

## 🔧 1. Install Tailwind CSS

If not installed already, set up Tailwind CSS in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🎨 2. Define Font Faces in `index.css`

Modify **`src/index.css`** to include `@font-face` for Safiro:

```css
@import "./assets/styles/fonts.css";
@import "tailwindcss";

@font-face {
  font-family: "Safiro";
  src: url("/fonts/safiro-regular-webfont.woff2") format("woff2"), url("/fonts/safiro-regular-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Safiro"; /* Use the same name for bold variant */
  src: url("/fonts/safiro-bold-webfont.woff2") format("woff2"), url("/fonts/safiro-bold-webfont.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

body {
  background-color: #000300;
}
```

---

## ⚙️ 3. Extend Tailwind Configuration

Update **`tailwind.config.js`** to register the custom font:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        safiro: ["Safiro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 📌 4. Use the Font in Your Components

Use **Tailwind CSS classes** to apply the font:

```jsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-safiro font-bold">This is Safiro Regular</h1>
<p className="text-base md:text-lg lg:text-lg font-safiro">This is Safiro Paragraph</p>
```

---

## 🚀 5. Restart Vite to Apply Changes

After updating the files, restart your Vite development server:

```bash
npm run dev
```

---

## 🛠️ 6. Debugging & Browser Compatibility

If fonts are not loading correctly:

- **Check if font files exist:**
  ```bash
  ls public/fonts/
  ```
- **Ensure `safiro-bold-webfont.woff2` loads in the Network tab (DevTools).**
- **Use `font-weight: bold` instead of a separate font-family for bold text.**
- **Force a hard refresh (`Cmd + Shift + R`) in Safari to clear cache.**

---

## ✅ Expected Output

If everything is set up correctly, the text should render in **Safiro Regular and Bold** in all browsers.

🎯 **Now your custom font is fully integrated with Tailwind & Vite!** 🚀
