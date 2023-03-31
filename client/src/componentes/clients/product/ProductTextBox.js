export default function ProductBox({ producto }) {
  return (
    <div>
      <div>
        <h4>{producto.nombre}</h4>
        <h5 className="font-britanicaBold">${producto.precio}</h5>
      </div>
    </div>
  );
}
