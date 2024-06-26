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

export const DemontageStuff = () => {
  const items = [
    {
      title: "Corde",
      text: "Notre corde de haute qualité est essentielle pour sécuriser les branches et les sections d'arbres pendant le démontage, permettant un contrôle précis et sécurisé lors des opérations.",
    },
    {
      title: "Frein de rétention",
      text: "Le frein de rétention joue un rôle crucial en assurant un contrôle supplémentaire lors de la descente contrôlée des branches et des troncs, minimisant ainsi les risques et assurant la sécurité pendant tout le processus.",
    },
    {
      title: "Tronçonneuse",
      text: "Notre tronçonneuse professionnelle est utilisée pour des coupes précises et efficaces, permettant de démanteler l'arbre en sections gérables en toute sécurité.",
    },
  ];

  const images = ["demontage3.jpg", "demontage4.jpg"];

  return (
    <div id={"demontage"} className={"relative flex flex-col pb-24 p-4 "}>
      <div className={"text-center"}>
        <H1 label={"Démontage d'arbre"} />
      </div>
      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-[70%]"}>
          Le démontage d&apos;arbre désigne le processus sécurisé et méthodique
          de déconstruction d&apos;un arbre par des professionnels utilisant des
          équipements spécialisés tels que des cordes, des freins de rétention
          et des tronçonneuses.
        </span>
      </div>
      <CardJuiher
        items={items}
        title={"Nos équipements"}
        cta={{
          title: "En savoir plus",
          href: "/#contact",
        }}
        image={[
          {
            url: "/assets/images/services/demontage.jpg",
            alt: "un arbre en train d'être démonté",
          },
          {
            url: "/assets/images/services/demontage2.jpg",
            alt: "un arbre en train d'être démonté",
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
                      src={`/assets/images/services/${name}`}
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
    </div>
  );
};
