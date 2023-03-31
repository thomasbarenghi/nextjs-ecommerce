import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export default function Header() {
  const [visibility, setCartVisibility] = useState(false);

  return (
    <header className="flex flex-row bg-white py-8 ">
      <div className="seccion container flex justify-between ">
        <Link href="/admin" className="flex flex-row items-center gap-4">
          <Image src="/icon/logo.svg" alt="logo" width={130} height={35} />
        </Link>
        <div className="flex flex-row items-center gap-10">
          <nav className="flex flex-row">
            <ul className="flex flex-row gap-9">
              <li>
                <Link
                  href="/admin"
                  className={
                    Router.pathname === "/"
                      ? "font-britanicaBold"
                      : "font-britanicaRegular"
                  }
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/productos"
                  className={
                    Router.pathname === "/admin/productos"
                      ? "font-britanicaBold"
                      : "font-britanicaRegular"
                  }
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda"
                  className={
                    Router.pathname === "/tienda"
                      ? "font-britanicaBold"
                      : "font-britanicaRegular"
                  }
                >
                  Tienda
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
