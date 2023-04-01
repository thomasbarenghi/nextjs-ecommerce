import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/redux/slices/cartSlice";
import { ProductTextBox, ProductImage, QuantityManager } from "@/componentes";

export default function CarritoItem({ producto }) {
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <Image
        src="/icon/cross.svg"
        alt="delete"
        width={10}
        height={10}
        className="absolute bottom-0 right-2 top-0 mb-0 mt-0 cursor-pointer"
        onClick={() => dispatch(deleteFromCart({ id: producto.id }))}
      />
      <div className="flex flex-row items-center justify-start gap-2 align-middle">
        <Link href={`/tienda/producto/${producto.id}`} key={producto.id}>
          <ProductImage producto={producto} height={80} width={80} />
        </Link>
        <div>
          <ProductTextBox producto={producto} />
          <QuantityManager producto={producto} />
        </div>
      </div>
    </div>
  );
}
