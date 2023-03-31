import { productos } from "@/pages/api/data";
import { useSelector } from "react-redux";

export const cartItemsFormatted = ({ cart, products}) => {

console.log(cart);
console.log(products);
  const cartItemsFormatted = cart.map((cartItem) => {
    const product = products.find((product) => product.id === cartItem.id);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });
console.log("form", cartItemsFormatted);
  return cartItemsFormatted;
};
