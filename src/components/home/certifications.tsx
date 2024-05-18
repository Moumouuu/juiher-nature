"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H1 } from "@/components/common/h1";
import Image from "next/image";
import useSWR from "swr";
import { defaultFetcherGet } from "@/lib/utils";

export function Certifications() {
  const url =
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "certifications?populate=*";
  const { data, error, isLoading } = useSWR(url, defaultFetcherGet);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error during loading certifications</div>;
  if (data?.data.length === 0) return null;

  return (
    <div className={"w-full flex flex-col items-center my-20"}>
      <H1 label={"Nos certifications"} />
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[65%] lg:w-[80%]"
      >
        <CarouselContent>
          {data?.data.map((certif: any) => (
            <CarouselItem key={certif.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <div className={"bg-black/10 rounded-xl p-14 "}>
                      <Image
                        className={"rounded-2xl"}
                        src={certif.attributes.Logo.data.attributes.url}
                        width={300}
                        height={300}
                        alt={""}
                      />
                    </div>
                    <span className="text-xl font-semibold">
                      {certif.attributes.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
