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
        <section className="w-full bg-gray-200">
          <div
            className="seccion container flex flex-col items-center justify-center py-14 align-middle"
            style={{ minHeight: "30vh" }}
          >
            <h1 className="text-center font-britanicaBold">Categorias</h1>
          </div>
        </section>
        <section className="seccion container w-full py-24">
          <div id="grid-categories" className="grid grid-cols-4 gap-8">
            {categories.map((category) => (
              <div>
                <Link href={`/tienda/categoria/${category.id}`}>
                  <div className="flex flex-col gap-4">
                    <div className="relative flex aspect-square flex-col gap-4">
                      <Image
                        src={category.imagen}
                        alt={category.nombre}
                        layout="fill"
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-britanicaBold">{category.nombre}</h4>
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
