import Head from "next/head";
import { productos } from "./api/data";
import {ProductItem} from "@/componentes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Vesta USA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section
          className="flex items-center justify-center bg-blue-500 align-middle"
          style={{
            minHeight: "45vh",
            background: "url(/img/hero.png) no-repeat center center/cover",
          }}
        >
          <div className="seccion container flex flex-col items-center justify-center text-center align-middle lg:w-3/5">
            <h1 className="font-britanicaBold text-white">
              Ropa original, para gente original.
            </h1>
            <p className="text-white">
              Tener una tipografía con algo de impacto, pero con una elegancia
              visual, hará que tu arte suba al podio de los ganadores.
            </p>
          </div>
        </section>
        <section className="seccion container py-24">
          <div id="grid-productos" className="grid grid-cols-4 gap-8">
            {productos.map((producto) => (
              <ProductItem producto={producto} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
