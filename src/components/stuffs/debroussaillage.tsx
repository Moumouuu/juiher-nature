import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";
import { Topbotsvg } from "@/components/common/topbotsvg";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const DebroussaillageStuff = () => {
  const items = [
    {
      title: "Robot de pente radiocommandé",
      text: "Notre robot de pente radiocommandé est essentiel pour accéder en toute sécurité aux pentes escarpées, assurant un débroussaillage précis et efficace dans les terrains difficiles.",
    },
    {
      title: "Débroussailleuse à dos",
      text: "Utilisée par nos équipes sur le terrain, la débroussailleuse à dos offre une maniabilité exceptionnelle pour atteindre les zones étroites et difficiles d'accès, assurant un débroussaillage complet et détaillé.",
    },
    {
      title: "Tracteurs équipés d’un broyeur forestier",
      text: "Nos tracteurs équipés de broyeurs forestiers sont idéaux pour le débroussaillage de vastes zones. Ils permettent de réduire efficacement les buissons, les broussailles et les petites arbustes tout en préservant la fertilité du sol.",
    },
    {
      title: "Pelle mécanique équipé d’un broyeur",
      text: "Notre pelle mécanique équipée d'un broyeur est utilisée pour dégager rapidement et efficacement les zones encombrées par des végétaux épais. Elle assure un débroussaillage puissant et permet le traitement des débris végétaux sur place.",
    },
  ];

  const images = [
    "debrouissaillage1.jpg",
    "debrouissaillage2.jpg",
    "debrouissaillage3.jpg",
  ];
  return (
    <div
      id={"entretien"}
      className={
        "relative flex flex-col py-24 p-4 my-16 bg-juiher-ternary-green"
      }
    >
      <div className={"text-center"}>
        <H1 label={"Débroussaillage"} />
      </div>

      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed
          sunt. Iste, sed.
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
            url: "/assets/images/services/debroussaillage.jpg",
            alt: "un homme en train de débroussailler",
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

      <Topbotsvg />
    </div>
  );
};
