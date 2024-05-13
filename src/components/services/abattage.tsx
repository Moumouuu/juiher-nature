import {H1} from "@/components/common/h1";
import {CardJuiher} from "@/components/common/card";
import * as React from "react";
import {Topsvg} from "@/components/common/topsvg";

export const AbattageService = () => {
    const items = [
        {
            title: "Mécanisé",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Manuel",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            title: "Déssouchage",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]
    return (
        <div id={"abattage"} className={"relative flex flex-col bg-juiher-ternary-green py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"Dites adieu à vos soucis arboricoles !"}/>
            </div>
            <div className={"flex justify-center w-full"}>
                <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>
            <CardJuiher items={items}
                        title={"Abattage"}
                        reversed
                        cta={{
                            title: "En savoir plus",
                            href: "/#contact"
                        }}
                        image={[
                            {
                                url: "/assets/images/services/abattage.jpeg",
                                alt: "un arbre en train d'être abattu"
                            }, {
                                url: "/assets/images/services/abattage2.jpg",
                                alt: "un arbre en train d'être abattu"
                            }
                        ]}
            />

            <Topsvg/>
        </div>
    )
}