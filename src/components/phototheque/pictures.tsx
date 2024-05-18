"use client";
import React from "react";
import { Card, LayoutGrid } from "../ui/layout-grid";
import { useSearchParams } from "next/navigation";

export function Pictures() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  let pictures = [
    {
      id: 1,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "abattage",
    },
    {
      id: 2,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "debroussaillage",
    },
    {
      id: 3,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "elagage",
    },
    {
      id: 4,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "demontage",
    },
    {
      id: 5,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "abattage",
    },
    {
      id: 6,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "debroussaillage",
    },
    {
      id: 7,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "elagage",
    },
    {
      id: 8,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "demontage",
    },
    {
      id: 9,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "abattage",
    },
    {
      id: 10,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "debroussaillage",
    },
    {
      id: 11,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "elagage",
    },
    {
      id: 12,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "demontage",
    },
    {
      id: 13,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "abattage",
    },
    {
      id: 14,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "debroussaillage",
    },
    {
      id: 15,
      title: "Rivers are serene",
      content:
        "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      service: "elagage",
    },
  ];

  pictures = pictures.filter((picture) => {
    return search ? picture.service === search : true;
  });

  const cards: Card[] = pictures.map((picture, index) => {
    return {
      id: picture.id,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">{picture.title}</p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {picture.content}
          </p>
        </div>
      ),
      className: index % 5 === 0 ? "md:col-span-2" : "col-span-1",
      thumbnail: picture.thumbnail,
    };
  });

  return (
    <div className="w-full py-10">
      <LayoutGrid cards={cards} />
    </div>
  );
}
