import React from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const ServicesOverview = () => {
  return (
    <section>
      <div className="flex items-center border border-secondary40 px-5 py-3 text-dark2 dark:text-secondary40">
        <Accordion>
          {siteConfig.servicesOverview.map((item, index) => (
            <AccordionItem key={index} title={item.title}>
              {item.description}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesOverview;
