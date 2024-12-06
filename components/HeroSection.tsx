"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen px-10  pt-[140px] flex">
      <section className="lg:w-[40vw] flex flex-col gap-4   pt-10">
        <h1 className="text-4xl  ">
          Bienvenue sur <span className="text-[#F4A261]">AquaEcho</span>
        </h1>
        <p className="pr-8 leading-7">
          Découvrez les liens fascinants entre le corps humain et l’océan.
          Explorez comment ces deux mondes se ressemblent et s’entrelacent à
          travers des comparaisons fascinantes et des visualisations
          captivantes.
        </p>
        <Link href="/human" className="w-full">
          <Button className="bg-[#F4A261] text-white-800 mr-16 w-full">
            Explorer
          </Button>
        </Link>
      </section>
      {/* <Image src={"/images/turtle.png"} width={350} height={200} alt="turtle" /> */}
    </div>
  );
};

export default HeroSection;
