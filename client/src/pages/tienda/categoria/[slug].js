import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories } from "../../api/data";
import { HeroBasic } from "@/componentes";

export default function SlugCategory() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const currentCategory =
    categories.find((category) => category.id == slug) || {};
  console.log(currentCategory.nombre);
  return (
    <>
      <Head>
        <title>{currentCategory.nombre} | Vesta USA</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <HeroBasic
          title={currentCategory.nombre}
          subtitle="Tener una tipografía con algo de impacto, pero con una elegancia visual, hará que tu arte suba al podio de los ganadores."
          textColor="text-pink-600"
          bgColor="bg-pink-200"
        />
      </main>
    </>
  );
}
