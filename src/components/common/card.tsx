import {NumberIndex} from "@/components/common/numberIndex";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import {cn} from "@/lib/utils";

interface ICardProps {
    items: {
        title: string, text: string
    }[],
    cta: {
        title: string,
        href: string
    },
    image: {
        url: string,
        alt: string
    },
    reversed?: boolean
}

export const CardJuiher = ({items, cta, image, reversed}:ICardProps) => {
    return (
        <div className={"flex justify-center w-full"}>
            <div className={cn("flex flex-col lg:flex-row items-center lg:w-[80%]", reversed ? 'lg:flex-row-reverse ' : '')}>
                <div className={cn("flex flex-col lg:mr-12", reversed ? 'lg:ml-12 mr-0':'')}>
                    {
                        items.map((item, index) => (
                            <div key={index} className={"flex items-center m-4 w-full "}>
                                <NumberIndex index={index}/>
                                <div className={"flex flex-col"}>
                                    <h3 className={"text-lg uppercase font-semibold"}>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className={"flex justify-center"}>
                        <Button variant={"juiher"} className={"my-8"} asChild>
                            <Link href={cta.href}>{cta.title}<title></title></Link>
                        </Button>
                    </div>

                </div>
                <Image width={500} height={300} className={"rounded-2xl"}
                       src={image.url} alt={image.alt}/>
            </div>
        </div>
    )
}