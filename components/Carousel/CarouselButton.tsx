import Link from "next/link";
import React from "react";

const CarouselButton = () => {
  return (
    <Link className="btn__filled text-primary dark:text-secondary" href="/">
      Termin vereinbaren
    </Link>
  );
};

export default CarouselButton;
