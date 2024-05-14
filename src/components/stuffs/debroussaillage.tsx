import {CardJuiher} from "@/components/common/card";
import * as React from "react";
import {H1} from "@/components/common/h1";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Topbotsvg} from "@/components/common/topbotsvg";

export const DebroussaillageStuff = () => {
    const items = [
        {
            title: "Protection",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Serpe",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Taille herbe",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]
    return (
        <div id={"entretien"} className={"relative flex flex-col py-24 p-4 my-16 bg-juiher-ternary-green"}>
            <div className={"text-center"}>
                <H1 label={"Débroussaillage"}/>
            </div>

            <div className={"flex justify-center w-full"}>
               <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>
            <CardJuiher
                items={items}
                title={"Nos équipements"}
                cta={{
                    title: "En savoir plus",
                    href: "/#contact"
                }}
                image={[
                    {
                        url: "/assets/images/services/debroussaillage.jpg",
                        alt: "un homme en train de débroussailler"
                    }
                ]}
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
                                            className="aspect-square rounded-2xl bg-[url('/assets/images/services/debroussaillage.jpg')] bg-cover">
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