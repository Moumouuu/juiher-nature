import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelTopClose } from "lucide-react";
import Link from "next/link";

export function Navbarmobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={"absolute top-3 left-0 z-20"} variant="ghost">
          <PanelTopClose className={"rotate-90"} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Juiher Nature</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col my-4">
          <span className={"text-lg bg-muted py-1 text-center font-semibold"}>
            Nos services
          </span>
          <ul className={"flex flex-col"}>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/services#elagage"}>Élagage</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/services#abattage"}>Abattage d&apos;abre</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/services#demontage"}>Démontage d&apos;arbre</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/services#entretien"}>Débroussaillage</Link>
              </SheetTrigger>
            </li>
          </ul>

          <span
            className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}
          >
            Nos atouts
          </span>
          <ul className={"flex flex-col"}>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/qse"}>Une équipe engagée</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/certifications"}>Une équipe certifiée</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/equipements"}>Des équipements de qualité</Link>
              </SheetTrigger>
            </li>
            <li className={"my-1"}>
              <SheetTrigger asChild>
                <Link href={"/#contact"}>Un service client à votre écoute</Link>
              </SheetTrigger>
            </li>
          </ul>

          <span
            className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}
          >
            <SheetTrigger asChild>
              <Link href={"nous-rejoindre"}>Nous rejoindre</Link>
            </SheetTrigger>
          </span>
          <span
            className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}
          >
            <SheetTrigger asChild>
              <Link href={"phototheque"}>Photothèque</Link>
            </SheetTrigger>
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
