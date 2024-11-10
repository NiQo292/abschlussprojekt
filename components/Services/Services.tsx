import React from "react";

import { siteConfig } from "@/config/site";
import TextBildLink from "@/components/Services/TextBildLink/TextBildLink";
import TextBildLinkReversed from "./TextBildLink/TextBildLinkReversed";
import ServicesOverview from "./ServicesOverview";

const Services = () => {
  return (
    <section className="">
      {siteConfig.services.map((item, index) =>
        index % 2 === 0 ? (
          <TextBildLink
            key={item.step}
            picture={item.src}
            servicesText={item.servicesText}
            step={item.step}
            text={item.text}
            title={item.title}
            titleBold={item.titleBold}
          />
        ) : (
          <TextBildLinkReversed
            key={item.step}
            picture={item.src}
            servicesText={item.servicesText}
            step={item.step}
            text={item.text}
            title={item.title}
            titleBold={item.titleBold}
          />
        )
      )}
      <ServicesOverview />
    </section>
  );
};

export default Services;
