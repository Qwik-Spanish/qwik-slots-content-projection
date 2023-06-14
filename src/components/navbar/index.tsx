import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(`
    * {
        box-sizing: border-box;
        
    }
    nav {
        background-color: black;
    }
    nav ul {
        display:grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: 50px;
        justify-content:center;
        justify-items:center;
        list-style-type:none;
        margin:0;
    }
 
    nav ul li{
        background-color:#000;
        width:90%;
        text-align:center;
        line-height:50px;
        }
        nav ul li a{
            text-decoration:none;
            color:white;
        }
        nav ul li:hover{
            background-color:red;
        }
    `);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
            <Link href="/first-example">Slot - Primer ejemplo</Link>
        </li>

        <li>
            <Link href="/render">Slot - Renderización</Link>
        </li>

        <li>
            <Link href="/named-slots/basic/">Named Slots - Básico</Link>
        </li>
        <li>
            <Link href="/named-slots/conditional/">Named Slots - Condicional</Link>
        </li>

        <li>
            <Link href="/fallback">Fallback</Link>
        </li>
      </ul>
    </nav>
  );
});
