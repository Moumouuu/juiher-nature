import { Navbar } from "@/components/common/navbar";
import { Navbarmobile } from "@/components/common/navbarmobile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header
        className={
          "hidden lg:flex w-full p-3 items-center justify-around bg-juiher-ternary-green"
        }
      >
        <div className={"flex items-center "}>
          <Image
            src={"/assets/images/logo.png"}
            width={50}
            height={50}
            alt={"Logo Juiher Nature"}
            className="mr-2"
          />
          <h1 className={"font-semibold"}>
            <Link href={"/"}>Juiher Nature</Link>
          </h1>
        </div>
        <Navbar />
        <Button variant={"juiher"} asChild>
          <Link href={"/#contact"}>Nous contacter</Link>
        </Button>
      </header>
      <div className={"block lg:hidden"}>
        <Navbarmobile />
      </div>
    </>
  );
};
