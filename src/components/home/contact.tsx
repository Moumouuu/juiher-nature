'use client'

import {H1} from "@/components/common/h1";
import Image from "next/image";
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";

export const Contact = () => {
    const formSchema = z.object({
        email: z.string().email(),
        message: z.string().min(10),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        fetch("/api/send/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then(r => form.reset())
    }

    return (
        <div id={"contact"} className={"flex flex-col py-24 p-4 "}>
            <div className={"text-center"}>
                <H1 label={"Nous contacter"}/>
            </div>
            <div className={"flex flex-col-reverse lg:flex-row items-center w-full justify-around"}>
                <Image src={"/assets/images/contact.png"} alt={"Téléphone et mail"} width={500} height={500}/>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Votre E-mail</FormLabel>
                                    <FormControl>
                                        <Input className={"bg-juiher-secondary-green text-white placeholder:text-white/70 "}  placeholder="robin@juihernature.fr" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Votre message</FormLabel>
                                    <FormControl>
                                        <Textarea className={"bg-juiher-secondary-green text-white placeholder:text-white/70 "} cols={40} placeholder="J'aimerais avoir un devis à propos de ..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant={"juiher"} type="submit">Envoyer le mail</Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}