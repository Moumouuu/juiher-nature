import { Banner } from "@/components/common/banner";
import { H1 } from "@/components/common/h1";
import { Topbotsvg } from "@/components/common/topbotsvg";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PageQSE() {
  const homeTitle = (
    <h1
      className={cn(
        "text-2xl lg:text-5xl uppercase font-semibold text-center",
        "lg:leading-relaxed"
      )}
    >
      <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>
        Engagés
      </span>
      pour la qualité, <br /> la sécurité et l&apos;environnement
    </h1>
  );

  const items = [
    {
      title: "Qualité",
      description:
        "Chez Juiher Nature, notre engagement envers la qualité est fondamental. Nous nous efforçons constamment de surpasser les attentes de nos clients en offrant des produits et des services d'une qualité exceptionnelle. Chaque aspect de notre travail est soumis à des contrôles rigoureux pour garantir une satisfaction totale et durable. ",
      image: "quality.jpeg",
      svg: false,
      reverse: false,
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est au cœur de nos préoccupations chez Juiher Nature. Nous avons mis en place des normes strictes pour protéger la santé et le bien-être de nos employés, de nos clients et de l'environnement. Grâce à une formation continue et à l'utilisation d'équipements de pointe, nous assurons des opérations sécurisées et sans risque.",
      image: "security.jpeg",
      svg: true,
      reverse: true,
    },
    {
      title: "Environnement",
      description:
        " Nous sommes profondément engagés dans la protection de l'environnement chez Juiher Nature. En intégrant des pratiques durables dans toutes nos activités, de la gestion des ressources à la réduction des déchets, nous nous efforçons de minimiser notre impact environnemental. Nous cherchons également à offrir des solutions écologiques à nos clients pour promouvoir un avenir durable.",
      image: "nature.jpeg",
      svg: false,
      reverse: false,
    },
  ];

  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      {items.map((item, index) => (
        <QseItem key={index} item={item} />
      ))}
    </div>
  );
}

function QseItem({
  item,
}: {
  item: {
    title: string;
    description: string;
    image: string;
    svg: boolean;
    reverse: boolean;
  };
}) {
  return (
    <div
      className={cn(
        item.svg ? "bg-juiher-ternary-green py-24" : "py-8",
        "relative w-full flex justify-center "
      )}
    >
      <div
        className={cn(
          item.reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          "flex flex-col justify-center items-center w-[80%]"
        )}
      >
        <div className={"flex flex-col flex-1 mr-0 lg:mx-8"}>
          <H1 label={item.title} />
          <p>{item.description}</p>
        </div>
        <Card
          className={"bg-transparent flex-1 border-none mt-4 w-full lg:w-1/2"}
        >
          <CardContent className={`relative aspect-square`}>
            <Image
              className={"object-cover rounded-2xl"}
              src={`/assets/images/qse/${item.image}`}
              alt={item.title}
              fill={true}
            />
          </CardContent>
        </Card>
      </div>

      {item.svg ? <Topbotsvg /> : null}
    </div>
  );
}
