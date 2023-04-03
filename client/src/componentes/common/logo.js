import Image from "next/image";
import Link from "next/link";

export default function Logo({link}){
    return(
        <Link
        href={link}
        className="flex flex-row items-start justify-start gap-4"
      >
        <Image src="/icon/logo.svg" alt="logo" width={130} height={35} />
      </Link>
    )
}