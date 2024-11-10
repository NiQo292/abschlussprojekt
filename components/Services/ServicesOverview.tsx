import React from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const ServicesOverview = () => {
  return (
    <section>
      <div className="bg-light dark:bg-secondary60">
        <h1 className="px-5 pb-8 pt-16 text-32 text-red dark:text-secondary40 lg:w-[60%] lg:px-24 lg:text-72">
          Wir packen mit an: <br />
          unsere <span className="font-bold">Services.</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {siteConfig.servicesOverview.map((item, index) => (
            <div
              key={index}
              className="flex items-start px-5 lg:flex-col lg:px-24"
            >
              <Image src={item.src} alt={item.title} />
              <div className="pb-8">
                <p className="font-bold mb-2">{item.title}</p>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
