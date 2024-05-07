export const Numbers = () => {
    const items = [
        {
            value: 120,
            label: "Devis"
        },
        {
            value: 45,
            label: "Projets"
        },
        {
            value: 10,
            label: "Année d'expérience"
        },
    ]
    return (
        <div className={"w-full flex justify-center my-10"}>
            <div className={"flex items-center w-full lg:w-[80%] justify-center"}>
                {
                    items.map((item, index) => (
                        <div key={index} className={"flex flex-col items-center justify-center w-1/3"}>
                            <h1 className={"text-3xl lg:text-5xl font-semibold"}>{item.value}+</h1>
                            <p className={"text-xl lg:text-2xl"}>{item.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}