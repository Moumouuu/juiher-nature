import {CardJuiher} from "@/components/common/card";
import * as React from "react";
import {H1} from "@/components/common/h1";

export const DebroussaillageService = () => {
    const content = <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium asperiores assumenda consequatur consequuntur eaque incidunt iste, itaque mollitia numquam quae quam quasi? Beatae consequuntur ducimus eaque harum <br/> <br/> id in, ipsa iste nostrum omnis quidem, rerum sapiente soluta tempore, totam voluptate? Accusantium asperiores deleniti <br/> <br/> eos facere minus nesciunt quae, tenetur?
    </p>
    return (
        <div id={"entretien"} className={"relative flex flex-col py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"Libérez votre espace, débarrassez-vous des broussailles !"}/>
            </div>

            <div className={"flex justify-center w-full"}>
               <span className={"text-muted-foreground text-center w-full lg:w-[70%]"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolores doloribus ducimus laboriosam obcaecati officiis sed sunt. Iste, sed.
                </span>
            </div>
            <CardJuiher
                title={"Débrroussaillage"}
                content={content}
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

        </div>
    )
}