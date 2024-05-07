import {Banner} from "@/components/common/banner";

export default function Home() {

    const homeTitle = <span>Votre <span className={"text-white bg-juiher-secondary-green rounded-xl p-2"}>arbre</span> commence à <br/> prendre trop de place ?</span>

    return (
        <div className="">
          <Banner title={homeTitle}/>
        </div>
  );
}
