import {Banner} from "@/components/common/banner";
import {cn} from "@/lib/utils";
import {Numbers} from "@/components/home/numbers";
import {Certifications} from "@/components/home/certifications";
import {Materials} from "@/components/home/materials";

export default function Home() {

    const homeTitle = <h1 className={cn("text-2xl lg:text-5xl uppercase font-semibold text-center","lg:leading-relaxed")}>Votre <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>arbre</span> commence à <br/> prendre trop de place ?</h1>

    return (
        <div className="w-full">
            <Banner title={homeTitle}/>
            <Numbers/>
            <Certifications/>
            <Materials/>
        </div>
  );
}
