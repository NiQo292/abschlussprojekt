"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";
import LogoRed from "@/public/Logo/logo_red.svg";
import LogoRedText from "@/public/Logo/logo_red_text.svg";
import LogoLight from "@/public/Logo/logo_light.svg";
import LogoLightText from "@/public/Logo/logo_light_text.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    // Navigationsleiste
    <Navbar
      className="h-[100px] justify-evenly dark:bg-transparent"
      maxWidth="full"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo und Menü-Button */}
      <NavbarContent>
        <NavbarBrand>
          {/* Mobile Ansicht Logo */}
          <div className="mx-2 px-2 lg:hidden dark:hidden">
            <Image alt="Logo" src={LogoRed} />
          </div>
          <div className="mx-2 px-2 hidden dark:lg:hidden dark:block">
            <Image alt="Logo" src={LogoLight} />
          </div>
          {/* Desktop Ansicht Logo */}
          <div className="mx-2 hidden px-2 lg:block dark:hidden">
            <Image alt="Logo" src={LogoRedText} />
          </div>
          <div className="mx-2 hidden px-2 dark:lg:block">
            <Image alt="Logo" src={LogoLightText} />
          </div>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>
      {/* Elemente bei Desktop Ansicht */}
      <div className="flex flex-col gap-y-4 my-4 w-auto">
        <NavbarContent className="hidden md:flex" justify="end">
          {siteConfig.navSecondItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink className="text-14" href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink className="text-18 hover:text-hover" href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>

      {/* Elemente bei Mobile Ansicht */}
      <NavbarMenu className="h-screen justify-center">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href} className="my-4">
            <NextLink className="text-24 hover:text-hover" href={item.href}>
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        <Divider className="my-4 w-3/4" />
        {siteConfig.navSecondItems.map((item) => (
          <NavbarMenuItem key={item.href} className="my-4">
            <NextLink href={item.href}>{item.label}</NextLink>
          </NavbarMenuItem>
        ))}
        <p>Kontaktieren Sie uns unter:</p>
        <p>
          T <span className="font-semibold underline">0571 509766</span>
        </p>
        <p>
          M <span className="font-semibold underline">service@hammer.de</span>
        </p>
      </NavbarMenu>
      <ThemeSwitch />
    </Navbar>
  );
};

export default Navigation;
