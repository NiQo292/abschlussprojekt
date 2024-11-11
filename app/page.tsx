import React from "react";

import Carousel from "@/components/Carousel/Carousel";
import Services from "@/components/Services/Services";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <div>
      <Carousel />
      <Services />
      <Products />
    </div>
  );
}
