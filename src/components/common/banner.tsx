import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ReactNode} from "react";
import {Topsvg} from "@/components/common/topsvg";


interface BannerProps {
    title: ReactNode;
}

export const Banner = ({title} : BannerProps ) => {
    return (
        <div className={"relative w-full lg:h-[50vh] flex flex-col items-center justify-center py-20 lg:py-10 bg-juiher-ternary-green"}>
            {title}
            <p className={"my-2 text-center"}>Juiher nature vous permet de révéler la beauté naturelle de votre environnement grâce
                à notre expertise en élagage.</p>
            <ul className={"flex flex-wrap justify-center my-4 lg:my-0"}>
                <li className={"list-disc mx-4"}>Élagage</li>
                <li className={"list-disc mx-4"}>Abattage d&apos;abre</li>
                <li className={"list-disc mx-4"}>Débroussaillage</li>
                <li className={"list-disc mx-4"}>Démontager d&apos;arbre</li>
                <li className={"list-disc mx-4"}>Travaux forestier</li>
            </ul>
            <Button className={"my-3"} variant={"juiher"} asChild>
                <Link href={"/#contact"}>
                    Contactez-nous
                </Link>
            </Button>

           <Topsvg/>
        </div>
    )
}