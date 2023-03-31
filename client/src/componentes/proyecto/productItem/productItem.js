import Link from "next/link";
import Image from "next/image";
import { manageCart } from "../../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ProductItem({ producto }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart) || [];
  const isInCart = cart.find((item) => item.id === producto.id);

  const handleAddToCart = (producto) => {
    dispatch(manageCart(producto));
  };

  return (
    <div key={producto.id} className="bg-red relative flex flex-col gap-3">
      <button
        className=" absolute right-0 top-0 z-10 rounded-xl bg-violet-100 px-4 py-2 font-britanicaBold text-violet-800"
        onClick={() => handleAddToCart(producto)}
      >
        {isInCart ? "Quitar del carrito" : "Agregar al carrito"}
      </button>
      <Link
        href={`/tienda/producto/${producto.id}`}
        key={producto.id}
        className="flex flex-col gap-4"
      >
        <div className="relative rounded-md object-cover" style={{aspectRatio: "1/1"} }>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            layout="fill"
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <div>
            <h4>{producto.nombre}</h4>
            <h5 className="font-britanicaBold">${producto.precio} </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
