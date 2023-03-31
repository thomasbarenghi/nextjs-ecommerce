import React from "react";
import { useDispatch } from "react-redux";
import { manageCartQuantity } from "@/redux/slices/cartSlice";

export default function QuantityManager({ producto }) {
  const dispatch = useDispatch();
  return (
    <div className="z-10">
      <button
        onClick={() =>
          dispatch(
            manageCartQuantity({
              id: producto.id,
              quantity: producto.quantity - 1,
            })
          )
        }
      >
        -
      </button>
      <span>{producto.quantity}</span>
      <button
        onClick={() =>
          dispatch(
            manageCartQuantity({
              id: producto.id,
              quantity: producto.quantity + 1,
            })
          )
        }
      >
        +
      </button>
    </div>
  );
}
