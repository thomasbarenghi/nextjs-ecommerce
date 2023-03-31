import Image from "next/image";

export default function ProductImage({ producto, height, width }) {
  return (
    <div
      className="relative aspect-square rounded-md object-cover"
      style={{ height: height, width: width }}
    >
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        layout="fill"
        className="rounded-xl object-cover"
      />
    </div>
  );
}
