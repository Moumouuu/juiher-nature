import {Banner} from "@/components/common/banner";
import {cn} from "@/lib/utils";
import {ElagageService} from "@/components/services/elagage";
import {AbattageService} from "@/components/services/abattage";
import {DemontageService} from "@/components/services/demontage";
import {DebroussaillageService} from "@/components/services/debroussaillage";

export default function PageService () {

    const homeTitle = <h1
        className={cn("text-2xl lg:text-5xl uppercase font-semibold text-center", "lg:leading-relaxed")}>Nos services
        d&apos;élagage <br/> professionnel en <span
            className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>france</span></h1>

    return (
        <div className={"w-full"}>
            <Banner title={homeTitle}/>
            <ElagageService/>
            <AbattageService/>
            <DemontageService/>
            <DebroussaillageService/>
        </div>
    )
}