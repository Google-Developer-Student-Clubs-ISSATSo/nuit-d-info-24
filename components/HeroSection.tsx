"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="w-screen px-10  pt-[140px] flex">
      <section className="lg:w-[40vw] flex flex-col gap-9 pt-10">
        <h1 className="text-4xl font-[800] leading-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D2714D]">
          Bienvenue sur AquaEcho
        </h1>
        <p className="pr-8 leading-7">
          Un site qui explore la connexion unique entre l'océan et le corps
          humain. Découvrez comment ces deux mondes se ressemblent et
          s’entrelacent à travers des comparaisons fascinantes et des
          visualisations captivantes.
        </p>
        <Link href="/human" className="w-full">
          <Button className="bg-[#F4A261] hover:bg-[#c17f4b] text-white-800 mr-16 rounded-xl">
            Savoir plus
          </Button>
        </Link>
      </section>
      {/* <Image src={"/images/turtle.png"} width={350} height={200} alt="turtle" /> */}
    </div>
  );
};

export default HeroSection;
