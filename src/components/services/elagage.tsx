import {H1} from "@/components/common/h1";
import {CardJuiher} from "@/components/common/card";
import * as React from "react";

export const ElagageService = () => {
    const items = [
        {
            title: "Sylvicole",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "fruitier",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "ornemental",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]
    return (
        <div id={"elagage"} className={"relative flex flex-col py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"Donnez leur une nouvelle coupe !"}/>
            </div>
            <div className={"flex justify-center w-full"}>
                <span className={"text-muted-foreground text-center w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>

            <CardJuiher items={items}
                        title={"Élagage"}
                        cta={{
                            title: "En savoir plus",
                            href: "/#contact"
                        }}
                        image={[{
                            url: "/assets/images/services/elagage.jpg",
                            alt: "un arbre en train d'être élagué"
                        }]}
            />
        </div>
    )
}
