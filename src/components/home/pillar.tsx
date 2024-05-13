import {H1} from "@/components/common/h1";
import {CardJuiher} from "@/components/common/card";
import * as React from "react";

export const Pillar = () => {

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
        <div className={"relative flex flex-col py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"les pilliers de notre engagement"}/>
            </div>
            <span className={"text-muted-foreground text-center"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, non!
            </span>

            <CardJuiher
                reversed
                items={items}
                cta={{
                    title: "En savoir plus",
                    href: "/qse"
            }}
                image={{
                    url: "/assets/images/qse.jpg",
                    alt: "Qualité sécurité environnement"
            }}
            />

        </div>
    )
}