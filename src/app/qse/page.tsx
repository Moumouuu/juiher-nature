import {Banner} from "@/components/common/banner";
import {cn} from "@/lib/utils";
import {H1} from "@/components/common/h1";
import {Card, CardContent} from "@/components/ui/card";
import * as React from "react";
import Image from "next/image";
import {Topbotsvg} from "@/components/common/topbotsvg";

export default function PageQSE() {
    const homeTitle =
        <h1 className={cn("text-2xl lg:text-5xl uppercase font-semibold text-center", "lg:leading-relaxed")}>
            <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>Engagés</span>
            pour la qualité, <br/> la sécurité et l&apos;environnement
        </h1>

    const items = [
        {
            title: "Qualité",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
            image: "quality.jpeg",
            svg: false,
            reverse:false,
        },
        {
            title: "Sécurité",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos loremlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor silorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor si ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
            image: "security.jpeg",
            svg: true,
            reverse:true,
        },
        {
            title: "Environnement",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ",
            image: "nature.jpeg",
            svg: false,
            reverse:false,
        },

    ]

    return (
        <div className="w-full">
            <Banner title={homeTitle}/>
            {
                items.map((item, index) => (
                    <QseItem key={index} item={item}/>
                ))
            }
        </div>
    )
}

function QseItem ({item}: {
    item:{
        title: string,
        description: string,
        image: string,
        svg: boolean
        reverse:boolean,
    }
}) {
    return (
        <div className={cn(item.svg ? "bg-juiher-ternary-green py-24" : "py-8", "relative w-full flex justify-center ")}>
            <div className={cn(item.reverse ? "lg:flex-row-reverse" : "lg:flex-row" ,"flex flex-col justify-center items-center w-[80%]")}>
                <div className={"flex flex-col flex-1 mr-0 lg:mx-8"}>
                    <H1 label={item.title}/>
                    <p>
                        {item.description}
                    </p>
                </div>
                <Card className={"bg-transparent flex-1 border-none mt-4 w-full lg:w-1/2"}>
                    <CardContent
                        className={`relative aspect-square`}>
                        <Image className={"object-cover rounded-2xl"} src={`/assets/images/qse/${item.image}`} alt={item.title} fill={true} />
                    </CardContent>
                </Card>
            </div>

            {
                item.svg ? <Topbotsvg/> : null
            }

        </div>
    )
}