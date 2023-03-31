import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../api/data";

export default function Categories() {
  return (
    <>
      <Head title="Categories" description="Categories" keywords="Categories" />
      <main>
        <section className="w-full bg-pink-200">
          <div
            className="seccion container flex flex-col items-center justify-center text-center align-middle lg:w-2/4"
            style={{ minHeight: "30vh" }}
          >
            <h1 className="text-center font-britanicaBold text-pink-600">
            Compra por categoría
            </h1>
            <p className="text-center text-pink-600">
              Tener una tipografía con algo de impacto, pero con una elegancia
              visual, hará que tu arte suba al podio de los ganadores.
            </p>
          </div>
        </section>
        <section className="seccion container w-full py-24">
          <div id="grid-categories" className="grid grid-cols-4 gap-8">
            {categories.map((category) => (
              <div>
                <Link href={`/tienda/categoria/${category.id}`}>
                  <div className="flex flex-col gap-4">
                    <div className="relative flex flex-col gap-4" style={{aspectRatio: "4/3"}}>
                      <Image
                        src={category.imagen}
                        alt={category.nombre}
                        layout="fill"
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-britanicaBold text-center">{category.nombre}</h4>
                      <p className="text-center">8 Productos disponibles</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
