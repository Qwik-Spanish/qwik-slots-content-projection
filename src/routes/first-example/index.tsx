// 1: Importamos el elemento Slot para proyecciones
import { Slot, component$ } from '@builder.io/qwik';

// 2 Componente (Hijo) donde proyectaremos lo que pasamos desde el padre a "Slot"
const Button = component$(() => {
  return (
    <button>
      Lo que se proyecta: <Slot />
    </button>
  );
});

// 3 Componente principal que usa "Button" y pasa "Contenido..." para proyectarse dentro de "Slot"
export default component$(() => {
  return (
    <>
      <Button>
        Contenido dentro del componente {'<Button>'} marcado con el elemento{' '}
        {`<Slot>`}
      </Button>
      <Button>Contenido 2</Button>
      <Button>Contenido 3 con {'<Button>'} probando variantes</Button>
      <Button>Otra variante</Button>
    </>
  );
});
