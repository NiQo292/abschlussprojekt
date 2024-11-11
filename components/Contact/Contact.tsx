import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <article className="items-center justify-between bg-primary px-5 pt-16 text-dark2 dark:bg-dark lg:flex lg:flex-row lg:space-x-8 lg:px-24 lg:pb-40 lg:pt-40">
      <div className="lg:w-[40%]">
        <h1 className="text-32 text-red dark:text-secondary40 lg:text-72">
          Nehmen Sie <span className="font-bold">Kontakt</span> zu uns auf.
        </h1>
        <p className="py-6 text-16 text-dark2 dark:text-secondary40 lg:text-18">
          Sie haben Fragen zur Lieferung, unseren Produkten oder unserem
          Service? Schreiben Sie uns einfach eine Nachricht oder rufen Sie uns
          an.
        </p>
        <p className="hidden text-dark2 dark:text-secondary40 lg:flex lg:flex-col">
          Tel.:&nbsp;0571 509766 <br />
          <a href="/">
            Mail:&nbsp;
            <span className="font-semibold underline">service@hammer.de</span>
          </a>
        </p>
      </div>
      <form className="container m-auto w-full space-y-12 rounded-md py-10 lg:w-[60%]">
        <div>
          <input
            required
            className="input__field"
            id="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <input
            required
            className="input__field"
            id="email"
            placeholder="E-Mail"
            type="email"
          />
        </div>
        <div>
          <textarea
            required
            className="autoexpand input__textarea"
            id="message"
            placeholder="Ihre Nachricht"
          />
        </div>
        <div className="input__checkbox">
          <input
            required
            className="h-5 w-5"
            id="consent"
            name="consent"
            type="checkbox"
          />
          <label htmlFor="consent">
            Hiermit akzeptiere ich die{" "}
            <a className="font-semibold underline" href="/">
              Datenschutzbestimmungen
            </a>
          </label>
        </div>
        <Link className="btn__outlined" href="/">
          Nachricht senden
        </Link>
      </form>
    </article>
  );
};

export default Contact;
