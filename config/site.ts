import Hero1 from "@/public/Carousel/hero1.jpg";
import Hero2 from "@/public/Carousel/hero2.jpg";
import Hero3 from "@/public/Carousel/hero3.png";
import Beratung from "@/public/Services/beratung.jpg";
import Planung from "@/public/Services/planung.jpg";
import Umsetzung from "@/public/Services/umsetzung.jpg";
import Bodenverlegen from "@/public/Services/Overview/bodenverlegung.svg";
import Montage from "@/public/Services/Overview/montage.svg";
import Naehen from "@/public/Services/Overview/naehen.svg";
import Planen from "@/public/Services/Overview/planung.svg";
import Streichen from "@/public/Services/Overview/streichen.svg";
import Treppen from "@/public/Services/Overview/treppen.svg";
import Farben from "@/public/Products/image1.jpg";
import Gardinen from "@/public/Products/image2.jpg";
import Badmoebel from "@/public/Products/image3.jpg";
import Textilien from "@/public/Products/image4.jpg";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hammer Zuhause",
  description: "Hammer - Mit uns zum TraumRaum",
  navItems: [
    {
      label: "Räume gestalten",
      href: "/",
    },
    {
      label: "Räume ausstatten",
      href: "/",
    },
    {
      label: "Räume bauen",
      href: "/",
    },
  ],
  navSecondItems: [
    {
      label: "Services",
      href: "/",
    },
    {
      label: "Kontakt",
      href: "/",
    },
    {
      label: "3D-Rundgang",
      href: "/",
    },
  ],
  carousel: [
    {
      src: Hero1,
      alt: "MoodImage",
      title: "In drei Schritten zum",
      titleBold: "TraumRaum",
      caption: "Mit Ihren Einrichtungsexperten aus Minden",
    },
    {
      src: Hero2,
      alt: "MoodImage2",
      title: "Von der Planung zum fertigen",
      titleBold: "Raum",
      caption: "Lassen Sie sich jetzt von uns Beraten",
    },
    {
      src: Hero3,
      alt: "MoodImage3",
      title: "Von der Planung zum fertigen",
      titleBold: "Raum",
      caption: "Lassen Sie sich jetzt von uns Beraten",
    },
  ],
  services: [
    {
      src: Beratung,
      step: "01. Beratung",
      titleBold: "Räume gestalten: ",
      title: "Ihre Vision, Unsere Expertise",
      text: "Unser Einrichtungsgeschäft in Minden hat sich weiterentwickelt und präsentiert stolz ein revolutionäres Laden-Konzept auf einer Shopping-Fläche von über 2000 m2. Tauchen Sie ein in eine Welt, in der Kreativität und Innovation auf einzigartige Weise verschmelzen, um Räume zu schaffen, die nicht nur funktional, sondern auch Ausdruck deines individuellen Lebensstils sind.",
      servicesText:
        "Konzept: Wir erfassen Ihre Ideen und entwickeln kreative Konzepte, die Ihre Persönlichkeit und den Zweck des Raumes widerspiegeln. Raumwahrnehmung: Wir berücksichtigen Raumproportionen, Lichtverhältnisse und Farbpaletten, um eine optimale Atmosphäre zu schaffen. Stilvolle Elemente: Wir integrieren Elemente, die Ihren Raum charakterisieren, von Farben und Texturen bis hin zu architektonischen Besonderheiten.",
    },
    {
      src: Planung,
      step: "02. Planung",
      titleBold: "Räume ausstatten: ",
      title: "Komfort und Stil in Harmonie",
      text: "Willkommen bei unseren Raumausstattungsdienst-leistungen, wo wir Räume mit Komfort, Stil und Details ausstatten, die Ihre Persönlichkeit unterstreichen. Unser Fokus liegt auf Heimtextilien, Beleuchtung und Accessoires, um Räume mit Wärme und Charakter zu erfüllen.",
      servicesText:
        "Heimtextilien: Wir bieten eine Auswahl an hochwertigen Textilien, die von Vorhängen bis zu Kissen reicht, um Ihrem Raum Gemütlichkeit zu verleihen. Beleuchtung: Unsere Beleuchtungslösungen schaffen die richtige Atmosphäre, von stimmungsvoll bis funktional.Accessoires: Feine Details machen den Unterschied. Wir wählen Accessoires aus, die Ihrem Raum Individualität verleihen.",
    },
    {
      src: Umsetzung,
      step: "03. Umsetzung",
      titleBold: "Räume bauen: ",
      title: "von Idee zu Realität",
      text: "Willkommen bei unseren Räumebau- und Umsetzungsdienstleistungen, wo wir Ideen in beeindruckende Räume verwandeln. Von der Konzeptentwicklung bis zur finalen Umsetzung koordinieren wir jeden Aspekt, um Ihre Visionen zum Leben zu erwecken.",
      servicesText:
        "Architektonische Gestaltung: Unsere Architekten entwerfen Räume, die Ästhetik und Funktionalität vereinen, basierend auf Ihren Anforderungen. Gewerke-Koordination: Wir managen verschiedene Gewerke, um sicherzustellen, dass Ihr Projekt reibungslos verläuft. Qualität und Präzision: Unsere Handwerker setzen die Pläne exakt um und verwenden erstklassige Materialien. Ganz gleich, ob Sie nach Gestaltung, Ausstattung oder Bau suchen, wir sind hier, um Ihre Räume in einzigartige und inspirierende Umgebungen zu verwandeln.",
    },
  ],
  servicesOverview: [
    {
      src: Planen,
      title: "Planung",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      src: Montage,
      title: "Montage",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      src: Naehen,
      title: "Nähen & Dekorieren",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      src: Bodenverlegen,
      title: "Bodenverlegen",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      src: Streichen,
      title: "Streichen",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      src: Treppen,
      title: "Treppenrenovierung",
      description:
        "Porem ipsum dolor sit amet, con sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
  ],
  products: [
    {
      src: Farben,
      title: "Farben, Böden & Tapeten",
    },
    {
      src: Gardinen,
      title: "Gardinen & Sonnenschutz",
    },
    {
      src: Badmoebel,
      title: "Badmöbel & Amaturen",
    },
    {
      src: Textilien,
      title: "Textilien & Wohnaccessoires",
    },
  ],
};
