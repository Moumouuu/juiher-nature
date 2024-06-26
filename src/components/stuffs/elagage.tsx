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

export const ElagageStuff = () => {
  const items = [
    {
      title: "Tronçonneuses",
      text: "Nos tronçonneuses de dernière génération sont essentielles pour des coupes précises et efficaces, garantissant un travail d'élagage professionnel et sécurisé.",
    },
    {
      title: "Nacelle",
      text: "La nacelle que nous utilisons permet un accès sécurisé aux zones difficiles d'accès, assurant une intervention efficace même sur les arbres les plus hauts.",
    },
    {
      title: "Kershaw",
      text: "Équipé de technologies avancées, notre Kershaw permet une taille rapide et précise des branches, facilitant un élagage efficace et respectueux de l'arbre.",
    },
    {
      title: "Pelle mécanique équipé d’un sécateur",
      text: "Notre pelle mécanique dotée d'un sécateur est idéale pour le dégagement des branches et des buissons encombrants, offrant une solution efficace pour le nettoyage des espaces extérieurs.",
    },
  ];

  const images = [
    "elagage_5233.jpeg",
    "elagage_5234.jpeg",
    "elagage_5235.jpeg",
    "elagage_5236.jpeg",
    "elagage_5237.jpeg",
    "elagage_5238.jpeg",
    "elagage_5245.jpeg",
    "elagage_5246.jpeg",
    "elagage_5247.jpeg",
    "elagage_5248.jpeg",
    "elagage_5249.jpeg",
  ];

  return (
    <div id={"elagage"} className={"relative flex flex-col py-24 p-4 "}>
      <div className={"text-center"}>
        <H1 label={"L'élagage"} />
      </div>
      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-[70%]"}>
          L&apos;élagage est une technique de taille et d&apos;entretien des
          arbres et arbustes, visant à améliorer leur santé, leur esthétique et
          leur sécurité.
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
            url: "/assets/images/services/elagage.jpg",
            alt: "un arbre en train d'être élagué",
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
