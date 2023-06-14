import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Bienvenid@s</h1>
      <p>En este artículo vamos a ver estos 3 apartados principales, donde podemos ver los resultados</p>
      <ul>
        <li>Primer ejemplo, haciendo uso de Slot principal</li>
        <li>Slots con referencias, es decir, Named Slots</li>
        <li>Contenido de respaldo: Fallback content</li>
      </ul>
      <p>El código de lo trabajado lo tenéis disponible en Github</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Slots / Content Projection',
  meta: [
    {
      name: 'description',
      content: 'Proyecto donde se trabaja al detalle con las claves para entender mejor como se comportan los Slots proyectando información de componentes padres a hijos',
    },
    {
      name: "keywords",
      content: "qwik, slots, content projection, qwik curso, qwik blog",
    },
    {
      name: "author",
      content: "Anartz Mugika Ledo",
    },
    {
      name: "og:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://qwik-osm-poc.netlify.app/",
    },
    {
      name: "twitter:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Qwik - Content Projection con Slots - Conceptos avanzados",
    },
    {
      name: "twitter:description",
      content:
        "Proyecto donde se trabaja al detalle con las claves para entender mejor como se comportan los Slots proyectando información de componentes padres a hijos",
    },
  ],
};
