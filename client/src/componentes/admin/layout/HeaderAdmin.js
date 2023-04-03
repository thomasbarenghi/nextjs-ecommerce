import { AdminNav, Logo } from "@/componentes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [visibility, setCartVisibility] = useState(false);

  return (
    <header
      className="fixed left-0 top-0 flex h-full w-1/6 flex-row bg-white py-8"
      style={{
        maxWidth: "260px",
        boxShadow: "0px 4px 15px rgba(124, 11, 255, 0.05);",
      }}
    >
      <div className="container flex flex-col items-start justify-start gap-14">
        <div className="px-9">
          <Logo link="/admin" />
        </div>
        <AdminNav />
      </div>
    </header>
  );
}
