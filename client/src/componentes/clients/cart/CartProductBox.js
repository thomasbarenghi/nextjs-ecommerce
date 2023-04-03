import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { manageCart } from "@/redux/slices/cartSlice";
import { ProductImage, ProductTextBox, QuantityManager } from "@/componentes";

export default function CartProductBox({ producto }) {
  const dispatch = useDispatch();

  return (
    <div className="relative flex justify-between pr-32 align-middle items-start">
      <Image
        src="/icon/cross.svg"
        alt="delete"
        width={15}
        height={15}
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => dispatch(manageCart(producto))}
      />
      <Link
        href={`/tienda/producto/${producto.id}`}
        key={producto.id}
        className="flex flex-row items-center justify-start gap-3 align-middle"
      >
        <ProductImage producto={producto} height="80px" width="80px" />
        <div className="flex flex-col">
          <ProductTextBox producto={producto} />
          <p className="text-gray-500">Cantidad: {producto.quantity}</p>
        </div>
      </Link>
      <div className="flex gap-24">
      <QuantityManager producto={producto} />
      <h5 className="font-britanicaBold" >
        ${producto.precio * producto.quantity}{" "}
      </h5>
      </div>
    </div>
  );
}
