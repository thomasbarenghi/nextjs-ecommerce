import Head from "next/head";
import { productos } from "@/pages/api/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdminLayout, AdminProductTable, AdminIsland } from "@/componentes";

export default function Admin() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AdminLayout>
        <header className="flex flex-row items-center justify-between pb-10 align-middle">
          <div className="flex flex-col">
            <h2 className="font-britanicaBold">Dashboard</h2>
            <p>Bienvenido nuevamente</p>
          </div>
          <div className="flex flex-row gap-6">
            <div></div>
            {/* <button
              className=" rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white"
              onClick={() => Router.push("/admin/productos/crear")}
            >
              Agregar producto
            </button> */}
          </div>
        </header>
        {/* <AdminIsland>
        </AdminIsland> */}
      </AdminLayout>
    </>
  );
}
