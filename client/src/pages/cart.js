import { useSelector, useDispatch } from "react-redux";
import { useEffect, useReducer, useState } from "react";
import { productos } from "./api/data";
import { cartItemsFormatted } from "@/utils/formatCartItems";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProductTotal, CartProductBox } from "@/componentes";
import axios from "axios";
import { urlServer } from "./api/config";

export default function About() {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useSelector((state) => state.cart) || [];
  const products = productos;
  const router = useRouter();

  useEffect(() => {
    const cartItems = cartItemsFormatted({ cart, products });
    setCartItems(cartItems);
  }, [cart, products]);

  const handleCheckout = () => {
    console.log("checkout");

    console.log(cartItems);
    const products = cartItems.map((item) => {
      return {
        title: item.nombre,
        price: item.precio,
        quantity: item.quantity,
      };
    });

    axios
      .post(`${urlServer}payments`, { products })
      .then((response) => {
        console.log(response.data);
        router.push(response.data.init_point);
        //redirigimos a url externa
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <main>
        <section
          className="w-full "
          style={{
            background:
              "linear-gradient(180deg, rgba(221, 214, 254, 0.20) 0%, rgba(255, 229, 244, 0) 100%)",
          }}
        >
          <div className="seccion container flex flex-col py-14 ">
            <div className="rounded-xl bg-white p-8 shadow-xl shadow-violet-50">
              <h1 className="mb-6 font-britanicaBold text-4xl">Carrito</h1>
              <div className="mb-6 flex flex-col gap-4">
                {cartItems.map((producto) => (
                  <CartProductBox producto={producto} />
                ))}
              </div>
              <ProductTotal cartItems={cartItems} />
              <button
                className="mt-6 w-full rounded-xl bg-violet-700 py-3 font-britanicaBold text-lg text-white"
                onClick={handleCheckout}
              >
                Comprar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
