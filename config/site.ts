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
};
