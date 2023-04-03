import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminNav() {
  const rutaMadre = "/admin";
  const Router = useRouter();
  const [menu, setMenu] = useState([
    {
      nombre: "Inicio",
      ruta: rutaMadre,
      activo: true,
    },
    {
      nombre: "Productos",
      ruta: rutaMadre + "/productos",
      activo: false,
    },
    {
      nombre: "Categorias",
      ruta: rutaMadre + "/categorias",
      activo: false,
    },
  ]);

  //pasa a activo si esta en la ruta padre o en sus hijos
  return (
    <nav className="flex w-full flex-col">
      <ul className="flex w-full flex-col gap-0 ">
        {menu.map((item, index) => (
          <li
            key={index}
            className={
              Router.pathname === item.ruta
                ? "w-full bg-violet-200 px-10 py-4 text-start"
                : "w-full bg-white px-10 py-4 text-start"
            }
          >
            <Link
              href={item.ruta}
              className=" w-full  font-britanicaBold text-violet-800 "
            >
              {item.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
