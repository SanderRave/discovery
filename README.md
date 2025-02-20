# Project: Lessons

## Overzicht

Dit project is een webapplicatie die is opgezet met **Vite**, **Tailwind CSS**, en **PostCSS**. Het bevat een gestructureerde frontend met moderne tools voor snelle en efficiënte ontwikkeling.

## Inhoud van de repository

- **index.html** – Hoofdpagina van de applicatie
- **package.json** – Bevat projectinformatie en dependencies
- **postcss.config.js** – Configuratiebestand voor PostCSS
- **public/** – Bevat statische assets
- **src/** – Hoofdmap met broncode
- **tailwind.config.js** – Configuratiebestand voor Tailwind CSS
- **vite.config.js** – Configuratiebestand voor Vite

## Installatie

Om dit project lokaal te draaien, volg je deze stappen:

1. **Clone de repository:**

   ```sh
   git clone https://github.com/SanderRave/discovery.git
   cd discovery
   ```

2. **Installeer de dependencies:**

   ```sh
   npm install
   ```

3. **Start de ontwikkelserver:**

   ```sh
   npm run dev
   ```

   De applicatie zal beschikbaar zijn op `http://localhost:5173/`.

## Configuratie

- **Vite** wordt gebruikt als ontwikkelserver en bundler.
- **Tailwind CSS** is geconfigureerd in `tailwind.config.js`.
- **PostCSS** wordt gebruikt voor CSS-verwerking (`postcss.config.js`).

## Deployment

Voor productie kan de applicatie worden gebuild en gehost op een statische hostingservice zoals Vercel of Netlify:

```sh
npm run build
```

De output wordt geplaatst in de `dist/` map.

## Licentie

Dit project valt onder de MIT-licentie.
