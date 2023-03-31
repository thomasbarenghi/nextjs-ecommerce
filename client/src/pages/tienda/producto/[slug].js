import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { productos } from "../../api/data";
import { useSelector, useDispatch } from "react-redux";
import {manageCart} from "../../../redux/slices/cartSlice";

export default function SlugProduct() {
  const router = useRouter();
  const { slug } = router.query;
const dispatch = useDispatch();
  const currentCategory = productos.find((category) => category.id == slug) || {};

  return (
    <>
      <Head title="Categoria" description="Categoria" keywords="Categoria" />
      <main>
        <section className="w-full bg-gray-200">
          <div
            className="seccion container flex flex-col items-center justify-center py-14 align-middle"
            style={{ minHeight: "30vh" }}
          >
            <h1 className="text-center font-britanicaBold">Producto: {currentCategory.nombre}</h1>
            <p>Precio: {currentCategory.precio} </p>
            <button onClick={() => dispatch(manageCart(currentCategory))}>Agregar al carrito</button>
          </div>
        </section>
      </main>
    </>
  );
}
