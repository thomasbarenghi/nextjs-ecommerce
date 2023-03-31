import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productos } from "../api/data";
import ProductItem from "@/componentes/proyecto/productItem/productItem";

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
            <h1 className="text-center font-britanicaBold">Tienda</h1>
          </div>
        </section>
        <section className="seccion container w-full py-24">
          <div id="box" className="flex flex-row gap-9">
            <div className="w-1/5">
              <h3 className="font-britanicaBold">Filtros</h3>
            </div>
            <div
              id="grid-categories"
              className="grid flex-auto grid-cols-3 gap-8"
            >
              {productos.map((producto) => (
                <ProductItem producto={producto} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
