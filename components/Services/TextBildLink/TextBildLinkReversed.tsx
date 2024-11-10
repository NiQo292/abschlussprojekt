"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Text_Bild_LinkProps {
  picture: StaticImageData;
  step: string;
  titleBold: string;
  title: string;
  text: string;
  servicesText: string;
}

const TextBildLinkReversed = ({
  picture,
  step,
  titleBold,
  title,
  text,
  servicesText,
}: Text_Bild_LinkProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="order-2 mx-4 my-10 text-dark2 dark:text-secondary40 lg:order-1 lg:mx-24 lg:my-32">
        <p className=" mb-4 text-14 lg:text-18">{step}</p>
        <h2 className=" mb-6 text-32 text-red dark:text-secondary40 lg:text-64">
          <span className="font-bold">{titleBold}</span>
          {title}
        </h2>
        <p className="lg:text-22 mb-10 text-16">{text}</p>

        {isOpen ? (
          <div>
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
            <Link href="/" className="btn__outlined">
              Kontakt aufnehmen
            </Link>
          </div>
        ) : (
          <button
            onClick={handleClick}
            className="text-16 font-semibold text-red underline lg:hidden"
          >
            Mehr anzeigen
          </button>
        )}
      </div>
      <div
        style={{
          backgroundImage: `url(${picture.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="order-1 h-[400px] lg:order-2 lg:h-full"
      ></div>
    </div>
  );
};

export default TextBildLinkReversed;
