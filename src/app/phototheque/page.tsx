import * as React from "react";
import { Banner } from "@/components/common/banner";
import { cn } from "@/lib/utils";
import { Pictures } from "@/components/phototheque/pictures";

export default function PagePhototheque() {
  const homeTitle = (
    <h1
      className={cn(
        "text-2xl lg:text-5xl uppercase font-semibold text-center",
        "lg:leading-relaxed",
      )}
    >
      Découvrez notre
      <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>
        travail
      </span>
      <br /> en images
    </h1>
  );
  return (
    <div className="w-full">
      <Banner title={homeTitle} />
      <Pictures />
    </div>
  );
}
