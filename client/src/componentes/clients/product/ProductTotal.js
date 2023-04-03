export default function ProductTotal({ cartItems }) {
  return (
    <div id="total">
      <h3 className="font-britanicaBold">
        Total: $
        {cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0)}
      </h3>
    </div>
  );
}
