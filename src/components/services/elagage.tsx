import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";

export const ElagageService = () => {
  const items = [
    {
      title: "",
      text: "Notre équipe de professionnels est spécialisée dans l’élagage des arbres et arbustes pour garantir leur bonne santé et leur développement harmonieux. Nous intervenons avec des techniques respectueuses de l’environnement pour minimiser notre impact sur la nature. Nous sommes équipés du matériel nécessaire pour intervenir en toute sécurité, même sur les arbres les plus hauts. Contactez-nous dès maintenant pour en savoir plus sur nos services d’élagage.",
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
