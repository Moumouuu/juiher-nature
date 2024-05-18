import * as React from "react";
import { Banner } from "@/components/common/banner";
import { cn } from "@/lib/utils";
import { WorkSheet } from "@/components/nous-rejoindre/workSheet";

export default function PageTeam() {
  const homeTitle = (
    <h1
      className={cn(
        "text-2xl lg:text-5xl uppercase font-semibold text-center",
        "lg:leading-relaxed",
      )}
    >
      Recrutement découvrez nos <br />
      <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>
        opportunités
      </span>
    </h1>
  );
  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      <WorkSheet />
    </div>
  );
}
