import React from "react";

import { siteConfig } from "@/config/site";
import TextBildLink from "@/components/Services/TextBildLink/TextBildLink";
import TextBildLinkReversed from "./TextBildLink/TextBildLinkReversed";
import ServicesOverview from "./ServicesOverview";

const Services = () => {
  return (
    <section className="">
      {/* siteConfig Array mappen, um alle Elemente in dem services Array zu rendern */}
      {siteConfig.services.map((item, index) =>
        // Prüfen, ob das Array an der Stelle index gerade ist, um zu entscheiden, ob das Element TextBildLink oder TextBildLinkReversed sein soll.
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
