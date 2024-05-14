import {H1} from "@/components/common/h1";
import {CardJuiher} from "@/components/common/card";
import * as React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

export const ElagageStuff = () => {
    const items = [
        {
            title: "Baudrier & Griffes",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Sécateurs",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Accessoiores de sécurité",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Longes & Moussquetons",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]
    return (
        <div id={"elagage"} className={"relative flex flex-col py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"L'élagage"}/>
            </div>
            <div className={"flex justify-center w-full"}>
                <span className={"text-muted-foreground text-center w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>

            <CardJuiher items={items}
                        title={"Nos équipements"}
                        cta={{
                            title: "En savoir plus",
                            href: "/#contact"
                        }}
                        image={[{
                            url: "/assets/images/services/elagage.jpg",
                            alt: "un arbre en train d'être élagué"
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
                                            className="aspect-square rounded-2xl bg-[url('/assets/images/services/elagage.jpg')] bg-cover">
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

        </div>
    )
}
