import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { productos } from "../../api/data";
import { useSelector, useDispatch } from "react-redux";
import { manageCart } from "../../../redux/slices/cartSlice";
import Image from "next/image";

export default function SlugProduct() {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const currentCategory =
    productos.find((category) => category.id == slug) || {};

  return (
    <>
      <Head title="Categoria" description="Categoria" keywords="Categoria" />
      <main>
        <section
          className="w-full"
          style={{
            background:
              " linear-gradient(180deg, #FFE5F4 0%, rgba(255, 229, 244, 0) 100%)",
          }}
        >
          <div
            className="seccion container flex flex-col items-center justify-center py-14 align-middle"
            style={{ minHeight: "30vh" }}
          >
            <div id="grid" className="grid w-full grid-cols-2 gap-14">
              <div className="">
                <div className="relative aspect-square">
                  <Image
                    src={currentCategory.imagen}
                    alt={currentCategory.nombre}
                    layout="fill"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-britanicaBold text-4xl text-black">
                  {currentCategory.nombre}
                </h1>
                <p className="text-black mb-6">
                  {currentCategory.descripcion}
                </p>
                <h2 className="font-britanicaBold text-2xl text-black">
                  ${currentCategory.precio * quantity}
                </h2>
                <div className="mt-9">
                  <label className="font-britanicaBold text-black">
                    Cantidad
                    <input
                      className="rounded-xl bg-gray-100 px-4 py-2 w-20"
                      type="number"
                      min="1"
                      max="10"
                      defaultValue={quantity}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </label>
                <button className="rounded-xl bg-pink-600 mt-9 px-4 py-2 font-britanicaBold text-white" onClick={() => dispatch(manageCart(currentCategory))}  >Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
