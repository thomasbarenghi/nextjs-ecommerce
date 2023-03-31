import { MiniCart, Nav } from "@/componentes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [visibility, setCartVisibility] = useState(false);

  return (
    <header className="flex flex-row bg-white py-8 ">
      <div className="seccion container flex justify-between ">
        <Link href="/" className="flex flex-row items-center gap-4">
          <Image src="/icon/logo.svg" alt="logo" width={130} height={35} />
        </Link>
        <div className="flex flex-row items-center gap-10">
          <Nav />
          <button
            className="rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white"
            onClick={() => setCartVisibility(!visibility)}
          >
            Carrito
          </button>
        </div>
        {visibility && (
          <MiniCart
            visibility={visibility}
            setCartVisibility={setCartVisibility}
          />
        )}
      </div>
    </header>
  );
}
