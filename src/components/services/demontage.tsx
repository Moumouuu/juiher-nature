import {CardJuiher} from "@/components/common/card";
import * as React from "react";
import {Botsvg} from "@/components/common/botsvg";

export const DemontageService = () => {
    const content = <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium asperiores assumenda consequatur consequuntur eaque incidunt iste, itaque mollitia numquam quae quam quasi? Beatae consequuntur ducimus eaque harum <br/> <br/> id in, ipsa iste nostrum omnis quidem, rerum sapiente soluta tempore, totam voluptate? Accusantium asperiores deleniti <br/> <br/> eos facere minus nesciunt quae, tenetur?
    </p>
    return (
        <div id={"demontage"} className={"relative flex flex-col bg-juiher-ternary-green pb-24 p-4 "}>
            <CardJuiher
                        title={"Démontage d'arbre"}
                        content={content}
                        cta={{
                            title: "En savoir plus",
                            href: "/#contact"
                        }}
                        image={[
                            {
                                url: "/assets/images/services/demontage.jpg",
                                alt: "un arbre en train d'être démonté"
                            }, {
                                url: "/assets/images/services/demontage2.jpg",
                                alt: "un arbre en train d'être démonté"
                            }
                        ]}
            />

            <Botsvg/>
        </div>
    )
}