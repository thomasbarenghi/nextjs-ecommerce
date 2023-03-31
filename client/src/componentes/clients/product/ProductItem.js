import Link from "next/link";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { ProductImage, ProductTextBox } from "@/componentes";

export default function ProductItem({ producto }) {
  const dispatch = useDispatch();

  const handleAddToCart = (producto) => {
    dispatch(addToCart({ id: producto.id, quantity: 1 }));
  };

  return (
    <div key={producto.id} className="bg-red relative flex flex-col gap-3">
      <button
        className=" absolute right-0 top-0 z-10 rounded-xl bg-violet-100 px-4 py-2 font-britanicaBold text-violet-800"
        onClick={() => handleAddToCart(producto)}
      >
        Agregar al carrito
      </button>
      <Link
        href={`/tienda/producto/${producto.id}`}
        key={producto.id}
        className="flex flex-col gap-4"
      >
        <ProductImage producto={producto} height={"auto"} width={"auto"} />
        <ProductTextBox producto={producto} />
      </Link>
    </div>
  );
}
