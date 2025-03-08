import { Banner } from "@/components/common/banner";
import { Certifications } from "@/components/home/certifications";
import { Contact } from "@/components/home/contact";
import { Materials } from "@/components/home/materials";
import { Numbers } from "@/components/home/numbers";
import { Pillar } from "@/components/home/pillar";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/home/map"), { ssr: false });

export default function Home() {
  const homeTitle = (
    <h1
      className={cn(
        "text-2xl lg:text-5xl uppercase font-semibold text-center",
        "lg:leading-relaxed"
      )}
    >
      Votre{" "}
      <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>
        arbre
      </span>{" "}
      commence à <br /> prendre trop de place ?
    </h1>
  );

  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      <Numbers />
      <Certifications />
      <Materials />
      <Pillar />
      <Map />
      <Contact />
    </div>
  );
}
