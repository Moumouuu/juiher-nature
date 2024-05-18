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

export function Certifications() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <div className={"bg-red-300 rounded-xl p-14 "}>
                      <Image
                        className={"rounded-2xl"}
                        src={"/assets/images/certifs/SGS.png"}
                        width={300}
                        height={300}
                        alt={""}
                      />
                    </div>
                    <span className="text-xl font-semibold">
                      Quali Territoires
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
