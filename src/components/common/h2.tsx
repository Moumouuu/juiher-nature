interface h2Props {
    label:string
}

export const H2 = ({
                       label
                   }:h2Props) => {
    return <h1 className={"text-lg lg:text-xl uppercase text-black mb-3 underline"}>{label}</h1>
}