import Head from "next/head";
//import { productos } from "@/pages/api/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdminLayout, AdminProductTable, AdminIsland } from "@/componentes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/slices/adminSlice";

export default function Productos() {
  const Router = useRouter();
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.admin.products);
  console.log("productos", productos);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const products = useSelector((state) => state.admin);

  // console.log("products", products);

  return (
    <>
      <Head>
        <title>Productos</title>
      </Head>
      <AdminLayout>
        <header className="flex flex-row items-center justify-between pb-10 align-middle">
          <div className="flex flex-col">
            <h2 className="font-britanicaBold">Productos</h2>
            <p>0 entries found</p>
          </div>
          <div className="flex flex-row gap-6">
            <div></div>
            <button
              className=" rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white"
              onClick={() => Router.push("/admin/productos/crear")}
            >
              Agregar producto
            </button>
          </div>
        </header>
        <AdminIsland>
          <AdminProductTable productos={productos} />
        </AdminIsland>
      </AdminLayout>
    </>
  );
}
