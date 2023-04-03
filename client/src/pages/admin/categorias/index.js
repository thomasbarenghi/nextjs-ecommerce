import Head from "next/head";
import { categories } from "@/pages/api/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdminLayout, AdminProductTable, AdminIsland } from "@/componentes";

export default function Categorias() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>
      <AdminLayout>
        <header className="flex flex-row items-center justify-between pb-10 align-middle">
          <div className="flex flex-col">
            <h2 className="font-britanicaBold">Categorias</h2>
            <p>0 entries found</p>
          </div>
          <div className="flex flex-row gap-6">
            <div></div>
            <button
              className=" rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white"
              onClick={() => Router.push("/admin/categorias/crear")}
            >
              Agregar producto
            </button>
          </div>
        </header>
        <AdminIsland>
          
        </AdminIsland>
      </AdminLayout>
    </>
  );
}
