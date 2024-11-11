import React from "react";
import Image from "next/image";

import { siteConfig } from "@/config/site";

const Products = () => {
  return (
    <section className="px-5 pb-8 pt-16 lg:px-24">
      <h1 className="text-32 text-red dark:text-secondary40 lg:w-1/2 lg:text-72">
        Unser vielfältiges <span className="font-bold">Produkt-Sortiment.</span>
      </h1>
      <div className="relative flex w-full items-center justify-center">
        <div className="mx-auto flex min-w-full overflow-x-auto py-4">
          <div className="flex space-x-6 lg:space-x-8">
            {siteConfig.products.map((item, index) => (
              <div key={index} className="relative flex flex-shrink-0 bg-black">
                <Image
                  alt={item.title}
                  className="h-56 w-72 object-cover object-center opacity-80 lg:h-[400px] lg:w-[530px]"
                  src={item.src}
                />
                <div className="absolute ms-6 mt-4 w-[60%] text-24 text-primary lg:text-40">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
