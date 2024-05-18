import { Button } from "@/components/ui/button";
import Link from "next/link";

export const WorkSheet = () => {
  const worksheet = [
    {
      title: "Développeur Fullstack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. InLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget",
      pdf: "/pdf/developpeur-fullstack.pdf",
    },
    {
      title: "Développeur Fullstack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. InLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget",
      pdf: "/pdf/developpeur-fullstack.pdf",
    },
    {
      title: "Développeur Fullstack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. InLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus id purus lacinia luctus. In hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget hac habitasse platea dictumst. Nulla facilisi. Nullam nec purus eget",
      pdf: "/pdf/developpeur-fullstack.pdf",
    },
  ];

  return (
    <div className={"flex justify-center w-full py-24"}>
      <div className={"flex flex-col w-[90%]"}>
        {worksheet.map((item, index) => (
          <div key={index} className={"flex flex-col w-full my-6"}>
            <span className={"border-b mb-2 font-semibold text-lg lg:text-xl "}>
              {item.title}
            </span>
            <p className={"text-sm lg:text-base"}>{item.description}</p>
            <div>
              <Button className={"my-4"} variant={"juiher"} asChild>
                <Link href={item.pdf}> Voir la fiche de poste</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
