# RH Gerencial — Sitio web

Sitio listo para subir a **GitHub Pages** (o cualquier hosting estático).

## Estructura

```
dist/
├── index.html               ← Página principal (servir esta)
├── assets/
│   └── paola.jpg            ← Foto de Paola (cambiar este archivo)
├── fonts/                   ← Instrument Serif + Manrope + JetBrains Mono
├── vendor/                  ← React 18 + Babel standalone
└── src/
    ├── app.jsx              ← Componentes principales y contenido
    ├── logos.jsx            ← Marca/wordmark
    ├── backgrounds.jsx      ← Fondos técnicos del hero
    └── tweaks-panel.jsx     ← Panel de tweaks (no se ve en producción)
```

## Cambiar la foto de Paola

**Opción A (más simple):** reemplazar el archivo `assets/paola.jpg` por otro con
el mismo nombre. El sitio recogerá la nueva imagen automáticamente.

**Opción B (cambiar el enlace):** editar `src/app.jsx`, **línea 336**:

```jsx
<img className="about-photo" src="./assets/paola.jpg" alt="Paola González" />
```

Sustituir `"./assets/paola.jpg"` por la nueva ruta o URL. El comentario
inmediatamente arriba (línea 335) marca dónde está exactamente.

## Subir a GitHub Pages

1. Crear un repo en GitHub.
2. Copiar **todo el contenido de esta carpeta `dist/`** a la raíz del repo
   (no subir la carpeta `dist/` en sí — los archivos que están dentro).
3. En el repo → Settings → Pages → Source: `Deploy from a branch` → `main` / `root`.
4. La URL queda como `https://TU_USUARIO.github.io/TU_REPO/`.

## Notas técnicas

- El sitio usa React + JSX compilado en el navegador con Babel standalone.
  Funciona perfecto para sitios estáticos como este, sin necesidad de build step.
- Las fuentes (Instrument Serif, Manrope, JetBrains Mono) se sirven localmente
  desde `fonts/` — el sitio no depende de Google Fonts en tiempo de carga.
- Es 100% responsivo: hero, foto y secciones se reflujan correctamente en
  móviles (probado desde 375px hasta 1280px).
