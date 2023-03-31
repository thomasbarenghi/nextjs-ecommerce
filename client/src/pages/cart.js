import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { productos } from "./api/data";
import { cartItemsFormatted } from "@/utils/formatCartItems";
import Head from "next/head";
import {ProductTotal, CartProductBox} from "@/componentes";

export default function About() {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useSelector((state) => state.cart) || [];
  const products = productos;

  useEffect(() => {
    const cartItems = cartItemsFormatted({ cart, products });
    setCartItems(cartItems);
  }, [cart, products]);

  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <main>
        <section className="w-full bg-gray-200">
          <div className="seccion container flex flex-col py-14">
            <div className="rounded-xl bg-white p-8">
              <h1 className="mb-6 font-britanicaBold text-4xl">Carrito</h1>
              <div className="mb-6 flex flex-col gap-4">
                {cartItems.map((producto) => (
                  <CartProductBox producto={producto} />
                ))}
              </div>
              <ProductTotal cartItems={cartItems} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
