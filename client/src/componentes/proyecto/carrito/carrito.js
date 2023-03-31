import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { manageCart } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Carrito({ setCartVisibility, visibility }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart) || [];

  return (
    <aside
      className="fixed right-0 top-0 z-20 flex h-screen w-full flex-col items-end"
      style={{ background: "#00000080" }}
    >
      <div className="relative flex h-screen w-1/4 flex-col justify-between bg-white p-8">
        <Image
          src="/icon/cross.svg"
          alt="close"
          width={15}
          height={15}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setCartVisibility(!visibility)}
        />
        <div id="items">
          <h3 className="mb-6 font-britanicaBold">Carrito</h3>
          <div className="flex flex-col gap-4">
            {
              cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-center">Parece que tu carrito esta vacio</h4>
                  </div>
              )
            }
            {Array.isArray(cart) &&
              cart.map((producto) => (
                <div className="relative">
                  <Image
                    src="/icon/cross.svg"
                    alt="delete"
                    width={10}
                    height={10}
                    className="absolute bottom-0 right-2 top-0 mb-0 mt-0 cursor-pointer"
                    onClick={() => dispatch(manageCart(producto))}
                  />
                  <Link
                    href={`/tienda/${producto.id}`}
                    key={producto.id}
                    className="flex flex-row items-center justify-start gap-2 align-middle"
                  >
                    <div
                      className="relative aspect-square rounded-md object-cover"
                      style={{ height: "80px", width: "80px" }}
                    >
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        layout="fill"
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4>{producto.nombre}</h4>
                      <h5 className="font-britanicaBold">
                        ${producto.precio}{" "}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div id="total">
          <Link href="/cart" onClick={() => setCartVisibility(!visibility)}>
            <button className="mt-6 w-full rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white">
              Ver carrito
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
