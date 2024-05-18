"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWR from "swr";
import { defaultFetcherGet } from "@/lib/utils";

export const WorkSheet = () => {
  const url =
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "fiche-de-postes?populate=*";
  const { data, error, isLoading } = useSWR(url, defaultFetcherGet);

  if (error) return <div>Error during loading work sheet</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data.data);

  return (
    <div className={"flex justify-center w-full py-24"}>
      <div className={"flex flex-col w-[90%]"}>
        {data?.data.map((work: any, index: number) => (
          <div key={index} className={"flex flex-col w-full my-6"}>
            <span className={"border-b mb-2 font-semibold text-lg lg:text-xl "}>
              {work.attributes.Titre}
            </span>
            <p className={"text-sm lg:text-base"}>
              {work.attributes.Description}
            </p>
            <div>
              <Button className={"my-4"} variant={"juiher"} asChild>
                <Link
                  target={"_blank"}
                  href={work.attributes.pdf.data.attributes.url}
                >
                  Voir la fiche de poste
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
