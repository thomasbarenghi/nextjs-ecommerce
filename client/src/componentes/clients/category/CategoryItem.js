import Link from "next/link";
import Image from "next/image";

export default function CategoryItem({ category }) {
  return (
    <div>
      <Link href={`/tienda/categoria/${category.id}`}>
        <div className="flex flex-col gap-4">
          <div
            className="relative flex flex-col gap-4"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={category.imagen}
              alt={category.nombre}
              layout="fill"
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <h4 className="text-center font-britanicaBold">
              {category.nombre}
            </h4>
            <p className="text-center">8 Productos disponibles</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
