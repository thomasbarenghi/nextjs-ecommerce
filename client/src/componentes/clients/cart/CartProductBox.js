import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { manageCart } from "@/redux/slices/cartSlice";
import { ProductImage, ProductTextBox } from "@/componentes";

export default function CartProductBox({ producto }) {
  const dispatch = useDispatch();

  return (
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
        href={`/tienda/producto/${producto.id}`}
        key={producto.id}
        className="flex flex-row items-center justify-start gap-2 align-middle"
      >
        <ProductImage producto={producto} height="80px" width="80px" />
        <div className="flex flex-col">
          <ProductTextBox producto={producto} />
          <p className="text-gray-500">Cantidad: {producto.quantity}</p>
        </div>
      </Link>
    </div>
  );
}
