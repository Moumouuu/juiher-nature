import { Banner } from "@/components/common/banner";
import * as React from "react";
import { cn } from "@/lib/utils";
import { H1 } from "@/components/common/h1";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Topbotsvg } from "@/components/common/topbotsvg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageCertification() {
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

  const items = [
    {
      title: "SGS",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
      image: "SGS.png",
      svg: false,
      reverse: false,
    },
    {
      title: "SGS",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
      image: "SGS.png",
      svg: true,
      reverse: true,
    },
    {
      title: "SGS",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
      image: "SGS.png",
      svg: false,
      reverse: false,
    },
  ];
  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      {items.map((item, index) => (
        <CertifItem key={index} item={item} />
      ))}
    </div>
  );
}

function CertifItem({
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
        "relative w-full flex justify-center ",
      )}
    >
      <div
        className={cn(
          item.reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          "flex flex-col justify-center items-center w-[80%]",
        )}
      >
        <div className={"flex flex-col flex-1 mr-0 lg:mx-8"}>
          <H1 label={item.title} />
          <p>{item.description}</p>
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
              src={`/assets/images/certifs/${item.image}`}
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
