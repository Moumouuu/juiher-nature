import * as React from "react";

export const NumberIndex = ({index}: {
    index: number
}) => {
    return (
        <div className={"hidden md:block"}>
            <div
                className={"bg-juiher-secondary-green/70 flex items-center justify-center rounded-full w-12 h-12 p-3 mr-3"}>
                <span className={'text-xl font-semibold'}>{index + 1}</span>
            </div>
        </div>
    )
};