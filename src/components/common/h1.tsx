interface h1Props {
    label:string
}

export const H1 = ({
    label
                   }:h1Props) => {
    return <h1 className={"text-xl lg:text-2xl uppercase text-black font-semibold mb-3"}>{label}</h1>
}