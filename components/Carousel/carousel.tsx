"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import CarouselCaption from "./CarouselCaption";

import { siteConfig } from "@/config/site";

type PropType = {
  options?: EmblaOptionsType;
};

const Carousel = ({ options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div
        ref={emblaRef}
        className="overflow-hidden max-h-screen lg:mt-[-100px] z-1 w-full lg:h-screen h-[500px]"
      >
        <div className="flex relative w-full h-full">
          {siteConfig.carousel.map((item) => (
            <div key={item.alt} className="grow-0 shrink-0 basis-full">
              <div className="w-full h-full bg-black">
                <Image
                  alt={item.alt}
                  className="h-full w-full object-cover opacity-70"
                  src={item.src}
                />
              </div>
              <CarouselCaption
                text={item.caption}
                title={item.title}
                titleBold={item.titleBold}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
