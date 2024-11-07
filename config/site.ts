import Hero1 from "@/public/Carousel/hero1.jpg";
import Hero2 from "@/public/Carousel/hero2.jpg";
import Hero3 from "@/public/Carousel/hero3.png";

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
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
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
  services: [{}],
};
