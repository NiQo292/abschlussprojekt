import React from "react";
import CarouselButton from "./CarouselButton";

interface CarouselCaptionProps {
  title: string;
  titleBold: string;
  text: string;
}

const CarouselCaption = ({ title, titleBold, text }: CarouselCaptionProps) => {
  return (
    <div className="absolute top-1/2 ms-5 w-[90%] -translate-y-1/2 transfrom lg:ms-24 lg:w-[60%]">
      <p className="mb-4 text-40 md:text-64 lg:text-72 xl:text-96 select-none">
        {title} <span className="font-bold select-none">{titleBold}</span>
      </p>
      <p className="mb-8 text-20 md:text-24 lg:text-28 xl:text-32 select-none">
        {text}
      </p>
      <CarouselButton />
    </div>
  );
};

export default CarouselCaption;
