"use client";
import React from "react";
import { Card, LayoutGrid } from "../ui/layout-grid";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { defaultFetcherGet } from "@/lib/utils";

export function Pictures() {
  const url =
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "phototheques?populate=*";
  const { data, error, isLoading } = useSWR(url, defaultFetcherGet);

  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const pictures = data?.data.filter((picture: any) => {
    return search ? picture.attributes.Service === search : true;
  });

  const cards: Card[] = pictures?.map((picture: any, index: number) => {
    return {
      id: picture.id,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">
            {picture.attributes.Titre}
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {picture.attributes.description}
          </p>
        </div>
      ),
      className: index % 5 === 0 ? "md:col-span-2" : "col-span-1",
      thumbnail: picture.attributes.image.data.attributes.url,
    };
  });

  if (error) return <div>Error during loading certifications</div>;

  return (
    <div className="w-full py-10">
      <LayoutGrid cards={cards} />
    </div>
  );
}
