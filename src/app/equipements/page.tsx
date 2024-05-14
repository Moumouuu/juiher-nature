import {Banner} from "@/components/common/banner";
import {cn} from "@/lib/utils";
import {ElagageStuff} from "@/components/stuffs/elagage";
import {AbattageStuff} from "@/components/stuffs/abattage";
import {DemontageStuff} from "@/components/stuffs/demontage";
import {DebroussaillageStuff} from "@/components/stuffs/debroussaillage";

export default function PageStuff() {

    const homeTitle =
        <h1 className={cn("text-2xl lg:text-5xl uppercase font-semibold text-center", "lg:leading-relaxed")}>
            Nos outils et équipement de <br/>
            <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>pointe</span>
            pour chaque service
        </h1>

    return (
        <div className={"w-full"}>
            <Banner title={homeTitle}/>
            <ElagageStuff/>
            <AbattageStuff/>
            <DemontageStuff/>
            <DebroussaillageStuff/>
        </div>
    )
}