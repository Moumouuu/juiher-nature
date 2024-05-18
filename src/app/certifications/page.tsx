"use client";

import { Banner } from "@/components/common/banner";
import * as React from "react";
import { cn, defaultFetcherGet } from "@/lib/utils";
import { H1 } from "@/components/common/h1";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Topbotsvg } from "@/components/common/topbotsvg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWR from "swr";

export default function PageCertification() {
  const url =
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "certifications?populate=*";
  const { data, error, isLoading } = useSWR(url, defaultFetcherGet);

  if (error) return <div>Error during loading certifications</div>;

  const homeTitle = (
    <h1
      className={cn(
        "text-2xl lg:text-5xl uppercase font-semibold text-center",
        "lg:leading-relaxed",
      )}
    >
      Nos certifications gage de <br />
      <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>
        qualité
      </span>
      et d&apos;engagement
    </h1>
  );

  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      {isLoading ? <div>Loading...</div> : null}
      {data?.data.map((certif: any, index: number) => (
        <CertifItem key={index} item={certif} index={index} />
      ))}
    </div>
  );
}

function CertifItem({ item, index }: { item: any; index: number }) {
  console.log(item);
  return (
    <div
      className={cn(
        index % 2 === 0 ? "bg-juiher-ternary-green py-24" : "py-8",
        "relative w-full flex justify-center ",
      )}
    >
      <div
        className={cn(
          index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row",
          "flex flex-col justify-center items-center w-[80%]",
        )}
      >
        <div className={"flex flex-col flex-1 mr-0 lg:mx-8"}>
          <H1 label={item.attributes.Titre} />
          <p>{item.attributes.Description}</p>
          <div className={"flex justify-center my-4"}>
            <Button variant={"juiher"} asChild>
              <Link href={"/#contact"}>Nous contacter</Link>
            </Button>
          </div>
        </div>
        <Card
          className={"bg-transparent flex-1 border-none mt-4 w-full lg:w-1/2"}
        >
          <CardContent className={`relative aspect-square`}>
            <Image
              className={"object-cover rounded-2xl"}
              src={item.attributes.Logo.data.attributes.url}
              alt={'Logo de la certification "' + item.attributes.Titre + '"'}
              fill={true}
            />
          </CardContent>
        </Card>
      </div>

      {item.svg ? <Topbotsvg /> : null}
    </div>
  );
}
