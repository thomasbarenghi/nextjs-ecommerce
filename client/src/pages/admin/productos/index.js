import Head from "next/head";
import { productos } from "@/pages/api/data";

export default function Productos() {
  return (
    <>
      <Head title="Categoria" description="Categoria" keywords="Categoria" />
      <main>
        <section className="w-full bg-gray-200">
          <div
            className="seccion container flex flex-col items-center justify-center py-14 align-middle"
            style={{ minHeight: "30vh" }}
          >
            <h1 className="text-center font-britanicaBold">
              Administra o crea productos
            </h1>
          </div>
        </section>
        <section className="seccion container py-16">
          <div className="flex flex-col items-start justify-start">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td style={{ width: "30%" }}>{producto.nombre}</td>
                    <td style={{ width: "30%" }}>${producto.precio}</td>
                    <td>
                      <button>Editar</button>
                      <button>Borrar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
