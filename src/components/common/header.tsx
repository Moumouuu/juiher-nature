import {Navbar} from "@/components/common/navbar";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={"flex w-full p-3 items-center justify-around bg-juiher-ternary-green"}>
            <div className={'flex items-center '}>
                <div className={"h-12 w-12 bg-green-500 rounded-full mr-3"}></div>
                <h1 className={"font-semibold"}>Juiher nature</h1>
            </div>
            <Navbar/>
            <Button variant={"juiher"} asChild>
                <Link href={"#contact"}>Nous contacter</Link>
            </Button>
        </div>
    )
}