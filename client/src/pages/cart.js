import { useSelector, useDispatch } from "react-redux";
import { manageCart } from "../redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart) || [];

  return (
    <section className="w-full bg-gray-200">
      <div className="seccion container flex flex-col py-14">
        <div className="rounded-xl bg-white p-8">
          <h1 className="mb-6 font-britanicaBold text-4xl">Carrito</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {Array.isArray(cart) &&
                cart.map((producto) => (
                  <div className="relative">
                    <Image
                      src="/icon/cross.svg"
                      alt="delete"
                      width={25}
                      height={25}
                      className="absolute right-2 top-2 cursor-pointer"
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
            <div id="total">
                <h3>Total: ${cart.reduce((acc, item) => acc + item.precio, 0)}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
