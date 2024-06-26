import { CardJuiher } from "@/components/common/card";
import { H1 } from "@/components/common/h1";

export const DebroussaillageService = () => {
  const content = (
    <p>
      Transformez votre espace extérieur avec notre service professionnel de
      débroussaillage. Nous sommes spécialisés dans l&apos;élimination efficace
      des broussailles et des végétaux indésirables pour vous offrir un
      environnement propre et bien entretenu. Notre équipe expérimentée utilise
      des techniques avancées pour assurer un débroussaillage complet, adapté à
      vos besoins spécifiques. Que ce soit pour un terrain résidentiel,
      commercial ou industriel, nous sommes équipés pour gérer toutes les
      surfaces avec efficacité. Contactez-nous dès aujourd&apos;hui pour en
      savoir plus sur nos services de débroussaillage et révéler la beauté
      cachée de votre propriété.
    </p>
  );
  return (
    <div id={"entretien"} className={"relative flex flex-col py-24 p-4 "}>
      <div className={"text-center"}>
        <H1
          label={"Libérez votre espace, débarrassez-vous des broussailles !"}
        />
      </div>

      <div className={"flex justify-center w-full"}>
        <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
          Rajeunissez votre espace extérieur en optant pour notre service
          professionnel de débroussaillage, garantissant un environnement propre
          et sécurisé.
        </span>
      </div>
      <CardJuiher
        title={"Débrroussaillage"}
        content={content}
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
    </div>
  );
};
