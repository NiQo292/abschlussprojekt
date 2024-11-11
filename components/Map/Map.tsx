import Image from "next/image";
import React from "react";

import MapLight from "@/public/Map/maplight.png";
import MapDark from "@/public/Map/mapdark.png";

const Map = () => {
  return (
    <section className="relative items-center justify-between pt-16 lg:flex lg:flex-row lg:pb-40 lg:pt-40 text-darkred dark:text-secondary h-[1000px] lg:h-auto">
      <div className="absolute top-1/2 ms-5 -translate-y-1/2 transfrom lg:ms-24 lg:w-[50%] w-[60%]">
        <p className="mb-4 text-40 md:text-64 lg:text-72 xl:text-96 select-none">
          Wir freuen uns auf Ihren{" "}
          <span className="font-bold select-none">Besuch</span>
        </p>
        <p className="mb-8 text-20 md:text-24 lg:text-28 xl:text-32 select-none">
          Hammer Fachmarkt Minden <br />
          Königstraße 168 <br />
          32427 Minden
        </p>
        <button className="btn__outlined">Route berechnen</button>
      </div>
      <div className="w-full h-full">
        <Image
          alt="Karte"
          className="w-full h-full object-cover"
          src={MapLight}
        />
      </div>
    </section>
  );
};

export default Map;
