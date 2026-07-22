# Velvet Clinic — Landing Page

Landing page premium para **Velvet Clinic**, optimizada para conversión desde Instagram Ads hacia WhatsApp.

## Stack

- React + TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones al scroll)
- Vite
- Lista para desplegar en Vercel

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Despliegue en Vercel

1. Sube la carpeta a un repositorio de GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Vercel detectará Vite automáticamente

O con CLI:

```bash
npx vercel
```

## Configuración

### WhatsApp
Todos los botones apuntan a: `https://wa.link/a4hfua`  
Configurado en `src/config/site.ts`

### Meta Pixel y Google Analytics
Edita `src/config/site.ts` y sustituye:
- `META_PIXEL_ID` → tu ID de Meta Pixel
- `GA_MEASUREMENT_ID` → tu ID de Google Analytics

### Contenido
Imágenes, vídeos, tratamientos y testimonios en `src/data/content.ts`.  
Sustituye las URLs de placeholder por fotos y vídeos reales de la clínica.

## Estructura

```
src/
├── components/
│   ├── layout/      # Header, Footer, WhatsApp flotante
│   ├── sections/    # Hero, Tratamientos, Resultados, etc.
│   └── ui/          # Botones, animaciones, títulos
├── config/          # SEO, analytics, WhatsApp
├── data/            # Contenido editable
├── lib/             # Analytics
└── pages/           # LandingPage
```
