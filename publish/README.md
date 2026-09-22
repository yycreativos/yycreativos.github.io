# Y&Y Creativos — Portafolio

Sitio estático. Para publicarlo en GitHub Pages:

1. Crea un repositorio nuevo (por ejemplo `yy-creativos`).
2. Sube **el contenido de esta carpeta** a la raíz del repositorio (index.html debe quedar en la raíz).
3. En GitHub: Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. La página queda en `https://<usuario>.github.io/<repositorio>/`.

## Contenido
- `index.html` — la página completa.
- `support.js` — runtime necesario para la página.
- `LandingPreview.dc.html` — miniatura animada usada en las tarjetas del portafolio.
- `_ds/` — estilos y tokens de la marca (Y&Y Paraguas).
- `assets/` — imágenes optimizadas (hero 84 KB, logo 2 KB).
- `.nojekyll` — evita que GitHub Pages procese los archivos.

Todo es estático: no requiere build ni servidor.
