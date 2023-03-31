import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories } from "../../api/data";

export default function SlugCategory() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCategory = categories.find((category) => category.id == slug);

  return (
    <>
      <Head title="Categoria" description="Categoria" keywords="Categoria" />
      <main>
        <section className="w-full bg-gray-200">
          <div
            className="seccion container flex flex-col items-center justify-center py-14 align-middle"
            style={{ minHeight: "30vh" }}
          >
            <h1 className="text-center font-britanicaBold">Categoria: {currentCategory.nombre}</h1>
          </div>
        </section>
      </main>
    </>
  );
}
