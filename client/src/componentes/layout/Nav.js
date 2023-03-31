import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const Router = useRouter();
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row gap-9">
        <li>
          <Link
            href="/"
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
            href="/tienda/categoria"
            className={
              Router.pathname === "/tienda/categoria"
                ? "font-britanicaBold"
                : "font-britanicaRegular"
            }
          >
            Categorias
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
  );
}
