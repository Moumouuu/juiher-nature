import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";

export const Pillar = () => {
  const items = [
    {
      title: "Récent",
      text: "Nous investissons constamment dans du matériel récent et moderne. En renouvelant régulièrement notre équipement, nous nous assurons de toujours utiliser les dernières technologies disponibles sur le marché. Cela nous permet d'effectuer des travaux d'élagage avec une précision et une efficacité inégalées.",
    },
    {
      title: "performant",
      text: "La performance est une priorité pour nous. Nos machines et outils sont choisis pour leur puissance et leur efficacité. Cette performance nous permet de réaliser des travaux de grande envergure dans des délais réduits, tout en maintenant un niveau de qualité élevé. Que ce soit pour des interventions complexes ou de routine, nous garantissons des résultats exceptionnels.",
    },
    {
      title: "durable",
      text: "Nous privilégions du matériel durable et respectueux de l'environnement. Nos équipements sont robustes et conçus pour résister aux usages intensifs. En optant pour des solutions durables, nous minimisons notre empreinte écologique et contribuons à la préservation de l'environnement. Cela reflète notre engagement à long terme envers la durabilité et la responsabilité environnementale.",
    },
  ];

  return (
    <div className={"relative flex flex-col py-24 p-4 "}>
      <div className={"text-center"}>
        <H1 label={"les pilliers de notre engagement"} />
      </div>
      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
          Notre engagement repose sur trois piliers fondamentaux qui
          garantissent la qualité et la fiabilité de nos services
          d&apos;élagage. Chacun de ces piliers est conçu pour offrir une
          satisfaction optimale à nos clients.{" "}
        </span>
      </div>
      <CardJuiher
        reversed
        items={items}
        cta={{
          title: "En savoir plus",
          href: "/qse",
        }}
        image={[
          {
            url: "/assets/images/qse.jpg",
            alt: "Qualité sécurité environnement",
          },
        ]}
      />
    </div>
  );
};
