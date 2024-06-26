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

export const AbattageStuff = () => {
  const items = [
    {
      title: "Tronçonneuse & Casque",
      text: "Notre tronçonneuse de pointe et notre casque de sécurité sont essentiels pour assurer des coupes précises et sécurisées lors de nos interventions d'élagage.",
    },
    {
      title: "Levier d'abattage & Coin d'abattage",
      text: "L'échelle robuste et le crochet d'abattage garantissent un accès sécurisé et contrôlé aux arbres, facilitant ainsi des opérations d'abattage efficaces et bien orchestrées.",
    },
    {
      title: "Crochets et pinces de levage",
      text: "Nos crochets et pinces de levage professionnels permettent de manipuler et de déplacer les branches et les troncs en toute sécurité, assurant un dégagement efficace des zones élaguées.",
    },
  ];

  const images = ["abattage3.jpg", "abattage4.jpg"];

  return (
    <div
      id={"abattage"}
      className={"relative flex flex-col bg-juiher-ternary-green py-24 p-4 "}
    >
      <div className={"text-center"}>
        <H1 label={"Abattage d'arbre"} />
      </div>
      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
          L&apos;abattage est une opération délicate qui consiste à couper un
          arbre de manière sécurisée et contrôlée pour diverses raisons, telles
          que la sécurité, la gestion de l&apos;espace ou la santé de
          l&apos;arbre.{" "}
        </span>
      </div>
      <CardJuiher
        items={items}
        title={"Nos équipements"}
        reversed
        cta={{
          title: "En savoir plus",
          href: "/#contact",
        }}
        image={[
          {
            url: "/assets/images/services/abattage.jpeg",
            alt: "un arbre en train d'être abattu",
          },
          {
            url: "/assets/images/services/abattage2.jpg",
            alt: "un arbre en train d'être abattu",
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
