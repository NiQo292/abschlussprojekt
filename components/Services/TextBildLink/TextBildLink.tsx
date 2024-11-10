"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface TextBildLinkProps {
  picture: StaticImageData;
  step: string;
  titleBold: string;
  title: string;
  text: string;
  servicesText: string;
}

const TextBildLink = ({
  picture,
  step,
  titleBold,
  title,
  text,
  servicesText,
}: TextBildLinkProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${picture.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[400px] lg:h-full"
      ></div>
      <div className="mx-5 my-10 text-dark2 dark:text-secondary40 lg:mx-24 lg:my-32">
        <p className=" mb-4 text-14 lg:text-18">{step}</p>
        <h2 className=" mb-6 text-32 text-red dark:text-secondary40 lg:text-64">
          <span className="font-bold">{titleBold}</span>
          {title}
        </h2>
        <p className="lg:text-22 mb-10 text-16 ">{text}</p>

        {isOpen ? (
          <div className="mb-8">
            <div className="mb-10 mt-4">
              <h2 className="mb-6 text-28 lg:text-32">Unsere Leistungen</h2>
              <p className="text-16 lg:text-18">{servicesText}</p>
            </div>
            <div className="mb-12">
              <h2 className="mb-6 text-28 lg:text-32">Jetzt Anfragen</h2>
              <p className="text-18">
                Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu
                erfahren und wie wir Ihre Träume verwirklichen können.
              </p>
            </div>
            <Link className="btn__outlined" href="/">
              Kontakt aufnehmen
            </Link>
          </div>
        ) : (
          <button
            className="pb-8 text-16 font-semibold text-red underline lg:hidden"
            onClick={handleClick}
          >
            Mehr anzeigen
          </button>
        )}
      </div>
    </div>
  );
};

export default TextBildLink;
