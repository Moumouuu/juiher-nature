import {H1} from "@/components/common/h1";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import * as React from "react";
import {CardJuiher} from "@/components/common/card";
import {Topbotsvg} from "@/components/common/topbotsvg";

export const Materials = () => {

    const items = [
        {
            title: "Récent",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "performant",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "durable",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]

    return (
        <div className={"relative flex flex-col py-24 bg-juiher-ternary-green p-4 "}>
            <div className={"text-center"}>
                <H1 label={"parc métériel récent et performant"}/>
            </div>
            <div className={"flex justify-center w-full"}>
               <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>

            <CardJuiher items={items}
                        cta={{
                            title: "En savoir plus",
                            href: "/equipements"
                        }}
                        image={[{
                            url: "/assets/images/materials/abattage.jpg",
                            alt: "Matériels performant et récent"
                        }]}
            />

            <div className={"flex justify-center mt-8"}>
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-[65%] lg:w-[80%]"
                >
                    <CarouselContent>
                        {Array.from({length: 5}).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className={"bg-transparent border-none"}>
                                        <CardContent
                                            className="aspect-square rounded-2xl bg-[url('/assets/images/materials/abattage.jpg')] bg-cover">
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>

            <Topbotsvg/>

        </div>
    )
}