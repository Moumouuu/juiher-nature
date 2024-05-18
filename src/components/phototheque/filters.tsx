"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export const Filters = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const router = useRouter();
  const pathname = usePathname();

  const filters = [
    {
      label: "Abattage d'arbre",
      value: "abattage",
    },
    {
      label: "Débroussaillage",
      value: "debroussaillage",
    },
    {
      label: "Élagage",
      value: "elagage",
    },
    {
      label: "Démontage d'arbre",
      value: "demontage",
    },
  ];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return pathname + "?" + params.toString() + "#pictures";
    },
    [searchParams],
  );

  const deleteQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return pathname + "?" + params.toString() + "#pictures";
    },
    [searchParams],
  );

  function handleClick(filter: { label: string; value: string }) {
    const newFilter = createQueryString("filter", filter.value);
    console.log(newFilter);
    // remove filter if already selected
    if (search === filter.value) {
      router.push(deleteQueryString("filter"));
      return;
    }

    router.push(newFilter.toString());
  }

  return (
    <div id="pictures" className={"flex w-full flex-col"}>
      <span className={"text-lg mb-3"}>Filtres rapides</span>
      <div className={"flex flex-wrap items-center gap-2"}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleClick(filter)}
            className={cn(
              "bg-juiher-secondary-green px-4 py-2 text-white rounded-full",
              search == filter.value ? "bg-juiher-primary-green" : "",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
