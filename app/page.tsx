import React from "react";

import Carousel from "@/components/Carousel/Carousel";
import Services from "@/components/Services/Services";
import Products from "@/components/Products/Products";
import Inspiration from "@/components/Inspiration/Inspiration";
import Contact from "@/components/Contact/Contact";
import Map from "@/components/Map/Map";
export default function Home() {
  return (
    <div>
      <Carousel />
      <Services />
      <Products />
      <Inspiration />
      <Contact />
      <Map />
    </div>
  );
}
