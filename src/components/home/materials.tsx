import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Topbotsvg } from "../common/topbotsvg";

export const Materials = () => {
  const items = [
    {
      title: "Récent",
      text: "Notre parc est constitué de matériel récent, renouvelé fréquemment pour intégrer les dernières technologies et innovations du secteur. Nous nous assurons que chaque équipement est à la pointe de la technologie, vous offrant ainsi des prestations de haute qualité.",
    },
    {
      title: "performant",
      text: "La performance est au cœur de notre stratégie. Nos machines et outils sont sélectionnés pour leur efficacité et leur puissance, permettant de réaliser des travaux d'élagage avec précision et rapidité. Cette performance nous permet de répondre à vos besoins spécifiques, qu'il s'agisse de l'entretien de grands parcs ou de l'élagage de jardin privés.",
    },
    {
      title: "durable",
      text: "Nous investissons dans du matériel durable, conçu pour résister aux conditions les plus exigeantes. Nos équipements sont non seulement robustes mais aussi écologiques, réduisant ainsi notre impact environnemental. En choisissant notre service, vous optez pour une entreprise responsable et soucieuse de la durabilité.",
    },
  ];

  const images = [
    "elageuse1.jpg",
    "elageuse2.jpg",
    "IMG_0786.jpeg",
    "IMG_0787.jpeg",
    "IMG_0788.jpeg",
  ];

  return (
    <div
      className={"relative flex flex-col py-24 bg-juiher-ternary-green p-4 "}
    >
      <div className={"text-center"}>
        <H1 label={"parc métériel récent et performant"} />
      </div>
      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
          Nous sommes fiers de vous présenter notre parc matériel, régulièrement
          mis à jour avec les dernières innovations en matière d&apos;élagage.
          Chaque outil et machine de notre collection est sélectionné pour sa
          performance et sa fiabilité, garantissant des interventions efficaces
          et sécurisées.{" "}
        </span>
      </div>

      <CardJuiher
        items={items}
        cta={{
          title: "En savoir plus",
          href: "/equipements",
        }}
        image={[
          {
            url: "/assets/images/materials/abattage.jpg",
            alt: "Matériels performant et récent",
          },
        ]}
      />

      <div className={"flex justify-center mt-8"}>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-[65%] lg:w-[80%]"
        >
          <CarouselContent>
            {images.map((name, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={"bg-transparent border-none "}>
                    <Image
                      src={`/assets/images/materials/${name}`}
                      alt={"Matériels performant et récent"}
                      className={"rounded-2xl object-contain"}
                      height={300}
                      width={400}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Topbotsvg />
    </div>
  );
};
