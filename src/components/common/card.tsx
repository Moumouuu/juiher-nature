import { H2 } from "@/components/common/h2";
import { NumberIndex } from "@/components/common/numberIndex";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ICardProps {
  title?: string;
  items?: {
    title: string;
    text: string;
  }[];
  content?: React.JSX.Element;
  cta: {
    title: string;
    href: string;
  };
  image: {
    url: string;
    alt: string;
  }[];
  reversed?: boolean;
}

export const CardJuiher = ({
  items,
  cta,
  image,
  reversed,
  title,
  content,
}: ICardProps) => {
  const isMultipleImage = image.length > 1;

  return (
    <div className={"flex justify-center w-full mt-4"}>
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center lg:w-[80%]",
          reversed ? "lg:flex-row-reverse " : ""
        )}
      >
        <div
          className={cn(
            "flex flex-1 flex-col lg:mr-12",
            reversed ? "lg:ml-12 mr-0" : ""
          )}
        >
          {title && title.length > 0 && <H2 label={title} />}
          {items
            ? items.map((item, index) => (
                <div key={index} className={"flex items-center m-4"}>
                  <NumberIndex index={index} />
                  <div className={"flex flex-col"}>
                    <h3 className={"text-lg uppercase font-semibold"}>
                      {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
            : content}
          <div className={"flex justify-center"}>
            <Button variant={"juiher"} className={"my-8"} asChild>
              <Link href={cta.href}>
                {cta.title}
                <title></title>
              </Link>
            </Button>
          </div>
        </div>
        <div
          className={cn(
            reversed ? "lg:items-end" : "lg:items-start",
            "w-[300px] lg:w-[400px] h-full flex flex-col justify-center items-center"
          )}
        >
          {image.map((img, index) => (
            <Image
              key={index}
              width={isMultipleImage ? 500 / 1.5 : 300}
              height={isMultipleImage ? 400 / 1.5 : 400}
              className={cn(
                isMultipleImage ? "aspect-video" : "aspect-square",
                "rounded-2xl object-cover p-2"
              )}
              src={img.url}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
