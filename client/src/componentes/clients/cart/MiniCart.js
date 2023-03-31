import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartItemsFormatted } from "@/utils/formatCartItems";
import { productos } from "@/pages/api/data";
import { MiniCartItem } from "@/componentes";

export default function Carrito({ setCartVisibility, visibility }) {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useSelector((state) => state.cart) || [];
  const products = productos;

  useEffect(() => {
    const cartItems = cartItemsFormatted({ cart, products });
    setCartItems(cartItems);
  }, [cart, products]);

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
            {cart.length === 0 && (
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-center">
                  Parece que tu carrito esta vacio
                </h4>
              </div>
            )}
            {Array.isArray(cartItems) &&
              cartItems.map((producto) => <MiniCartItem producto={producto} />)}
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
