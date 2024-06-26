import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";
import { Topsvg } from "@/components/common/topsvg";

export const AbattageService = () => {
  const items = [
    {
      title: "Évaluation et Planification :",
      text: "Avant toute intervention, nous effectuons une évaluation complète de l’arbre et de son environnement. Cela inclut l'identification des risques potentiels et la planification des étapes de l'abattage pour assurer une exécution sécurisée.",
    },
    {
      title: "Abattage Contrôlé :",
      text: "Nous pratiquons des méthodes d'abattage contrôlé, adaptées à chaque situation spécifique. Qu'il s'agisse d'un arbre en milieu urbain ou en zone forestière, nous garantissons une coupe précise et maîtrisée.",
    },
    {
      title: "Gestion des Déchets :",
      text: "Après l'abattage, nous nous chargeons de l'évacuation et du recyclage des déchets végétaux. Les troncs, branches et feuillages sont transportés et traités conformément aux normes environnementales en vigueur.",
    },
    {
      title: "Travail en Milieu Contraint :",
      text: "Nous avons l'expertise pour intervenir dans des environnements difficiles, tels que les zones urbaines denses ou les terrains accidentés. Nos techniques permettent de minimiser l'impact sur les structures et la végétation environnantes.",
    },
  ];
  return (
    <div
      id={"abattage"}
      className={"relative flex flex-col bg-juiher-ternary-green py-24 p-4 "}
    >
      <div className={"text-center"}>
        <H1 label={"Dites adieu à vos soucis arboricoles !"} />
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
        title={"Abattage"}
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

      <Topsvg />
    </div>
  );
};
