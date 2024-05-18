import { Filters } from "@/components/phototheque/filters";
import { Pictures } from "@/components/phototheque/pictures";

export const Container = () => {
  return (
    <div className={"flex flex-col items-center py-24"}>
      <div className={"w-full lg:w-[90%] p-2 lg:p-0"}>
        <Filters />
        <Pictures />
      </div>
    </div>
  );
};
