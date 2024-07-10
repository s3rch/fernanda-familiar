## Getting Started

Para levantar el ambiente en local en modo de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Implementaciones

1. Se consumen los siguientes servicios de la API pública del sitio de Fernanda Familiar:
  - https://fernandafamiliar.soy/wp-json/wp/v2/posts/?per_page=${limit}&offset=${offset}: Para obtener la Noticia Destacada y el listado de Noticias principales.
  - https://fernandafamiliar.soy/wp-json/wp/v2/posts/?slug=${slug}: Para obtener el detalle de una Noticia, mediante el "slug".

2. Se crearon dos servicios GET a modo de pasamanos para consumir la API Pública externa.

3. Se utilizaron las siguientes tecnologías en el desarrollo:
  - Next JS.
  - Typescript, para el tipado JS.
  - Taildwind, para los estilosy estructura del sitio.
  - Luxon, para el formateo de fechas.
  - Next third-parties, para la implementación del Tag Manager de Google.
  - No se implmentó Google Analytics 4 dado que en la documentación de Google menciona lo siguiente: "Si ya utilizas Google Tag Manager, no es necesario que utilices gtag.js. Google Tag Manager es totalmente compatible con las etiquetas de Google Ads y Google Marketing Platform, y no necesitas implementar código adicional con gtag.js en tu sitio."

4. Se utiliza el enfoque "App Router" en el desarrollo, ya que es el recomendado por Next JS en las últimas versiones. De tal modo que en la carpeta de "app" se implmenta el ruteo, páginas y layouts y en "components", los componentes que se renderizan del lado del servidor y del lado del cliente.

5. Se implementa el renderizado de páginas estáticas en tiempo de compilación para la navegación sea más rápida para el usuario.

6. Se realiza carga perezosa de imágenes, para mostrar al usuario únicamente lo que ve en pantallas y cargar imágenes bajo demanda.

7. Se implementan páginas de Error y Not Found para el manejo de errores en las peticiones del servidor.

8. Se implementa Metadatos dinámicos en cada una de las páginas de las noticias.

9. Se agrega favicon.ico
