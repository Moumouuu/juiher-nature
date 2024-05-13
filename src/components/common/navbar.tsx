"use client"

import * as React from "react"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Une équipe engagée",
        href: "/qse",
        description:
            "Notre équipe s'engage pour la qualité, la sécurité et l'environnement !",
    },
    {
        title: "Une équipe certifiée",
        href: "/certifications",
        description:
            "Nos équipes sont formées et certifiées pour intervenir en toute sécurité.",
    },
    {
        title: "Des équipements de qualité",
        href: "/equipements",
        description:
            "Nous disposons de tout le matériel nécessaire pour intervenir efficacement.",
    },
    {
        title: "Un service client à votre écoute",
        href: "/#contact",
        description:
            "Nous sommes à votre disposition pour répondre à toutes vos questions.",
    },
]

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Nos services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Juiher Nature
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Juiher Nature intervient dans tous les domaines d&apos;entretien des espaces verts et travaux forestiers.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/services#elagage" title="Élagage">
                                Donnez leur une nouvelle coupe !
                            </ListItem>
                            <ListItem href="/services#abattage" title="Abattage">
                                Dites adieu à vos arbres malades !
                            </ListItem>
                            <ListItem href="/services#demontage" title="Entretien">
                                Plus besoin de vous soucier de vos arbres !
                            </ListItem>
                            <ListItem href="/services#entretien" title="Débroussaillage">
                                Libérer votre espace, débarassez-vous des broussailles !
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Nos atouts</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/nous-rejoindre" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Nous rejoindre
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/phototheque" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Photothèque
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
