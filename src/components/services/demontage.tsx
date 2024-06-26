import { Botsvg } from "@/components/common/botsvg";
import { CardJuiher } from "@/components/common/card";

export const DemontageService = () => {
  const content = (
    <p >
      Le démontage d&apos;arbre est une opération technique nécessitant une
      approche experte et sécurisée pour assurer un résultat optimal tout en
      minimisant les risques. Notre équipe spécialisée est dédiée à évaluer
      chaque arbre de manière approfondie avant toute intervention, prenant en
      compte les contraintes environnementales et les risques potentiels. Nous
      utilisons des techniques avancées de démontage, adaptées à chaque
      situation spécifique, pour garantir une exécution précise et sécuritaire.
      Après le démontage, nous assurons la gestion responsable des débris
      végétaux, en les recyclant conformément aux normes environnementales en
      vigueur. Avec notre engagement envers la sécurité et notre équipement
      spécialisé, nous sommes prêts à répondre à vos besoins de démontage
      d&apos;arbres avec professionnalisme et efficacité. Contactez-nous dès
      maintenant pour discuter de votre projet et bénéficier de notre expertise
      en démontage d&apos;arbres.
    </p>
  );
  return (
    <div
      id={"demontage"}
      className={"relative flex flex-col bg-juiher-ternary-green pb-24 p-4 "}
    >
      <CardJuiher
        title={"Démontage d'arbre"}
        content={content}
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

      <Botsvg />
    </div>
  );
};
