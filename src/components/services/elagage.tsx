import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";

export const ElagageService = () => {
  const items = [
    {
      title: "Manuel",
      text: "L'élagage manuel est une technique traditionnelle qui permet un soin méticuleux et adapté à chaque arbre et arbuste. Notre équipe de professionnels utilise des outils manuels pour effectuer des coupes précises, favorisant ainsi la santé et la croissance harmonieuse des plantes. Cette méthode artisanale est idéale pour les jardins où l'attention aux détails est primordiale. En respectant l'environnement, nous veillons à minimiser notre impact tout en assurant la sécurité de nos interventions, même sur les arbres les plus hauts. Contactez-nous pour découvrir comment notre expertise en élagage manuel peut transformer votre espace vert.",
    },
    {
      title: "Mécanique",
      text: "L'élagage mécanique est une solution moderne et efficace pour gérer de vastes zones ou des arbres difficiles d'accès. Grâce à notre équipement de pointe, nous pouvons réaliser des interventions rapides et sécurisées, tout en préservant la santé et la structure des arbres. Cette méthode est particulièrement adaptée aux grands projets où la rapidité et l'efficacité sont essentielles. Nos techniques mécaniques sont conçues pour être respectueuses de l'environnement, réduisant l'impact sur la nature. Contactez-nous pour en savoir plus sur nos services d’élagage mécanique et comment ils peuvent répondre à vos besoins spécifiques.",
    },
  ];
  return (
    <div id={"elagage"} className={"relative flex flex-col py-24 p-4 "}>
      <div className={"text-center"}>
        <H1 label={"Donnez leur une nouvelle coupe !"} />
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
        title={"Élagage"}
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
    </div>
  );
};
