import { Filters } from "@/components/phototheque/filters";

export const Pictures = () => {
  return (
    <div className={"flex flex-col items-center py-24"}>
      <div className={"w-full lg:w-[90%]"}>
        <Filters />
      </div>
    </div>
  );
};
