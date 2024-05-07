import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {PanelTopClose} from "lucide-react";
import Link from "next/link";

export function Navbarmobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className={"absolute top-3 left-0 z-20"} variant="ghost"><PanelTopClose className={"rotate-90"} /></Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Juiher Nature</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col my-4">
                    <span className={"text-lg bg-muted py-1 text-center font-semibold"}>Nos services</span>
                    <ul className={"flex flex-col"}>
                        <li className={"my-1"}>
                            <Link href={"/services#elagage"}>Élagage</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/services#abattage"}>Abattage d&apos;abre</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/services#demontage"}>Démontage d&apos;arbre</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/services/entretien"}>Débroussaillage</Link>
                        </li>
                    </ul>

                    <span className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}>Nos atouts</span>
                    <ul className={"flex flex-col"}>
                        <li className={"my-1"}>
                            <Link href={"/qse"}>Une équipe engagée</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/certifications"}>Une équipe certifiée</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/equipements"}>Des équipements de qualité</Link>
                        </li>
                        <li className={"my-1"}>
                            <Link href={"/#contact"}>Un service client à votre écoute</Link>
                        </li>
                    </ul>

                    <span className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}>
                        <Link href={"nous-rejoindre"}>Nous rejoindre</Link>
                    </span>
                    <span className={"text-lg bg-muted py-1 text-center font-semibold mt-3"}>
                        <Link href={"phototheque"}>Photothèque</Link>
                    </span>

                </div>
            </SheetContent>
        </Sheet>
    )
}
