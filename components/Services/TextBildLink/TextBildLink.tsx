import { StaticImageData } from "next/image";
import React from "react";

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
  return <div>TextBildLink</div>;
};

export default TextBildLink;
