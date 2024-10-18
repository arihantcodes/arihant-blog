"use client";
import { ModeToggle } from "@/components/theme-toggle";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";

import Search from "./search";

export const NAVLINKS = [
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Components",
    href: "/components",
  },

  {
    title: "Examples",
    href: "/example",
  },
  {
    title: "Colors",
    href: "/colors",
  },
  {
    title: "Blog",
    href: `/docs/${page_routes[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex">
              <Search />
              <Link
                href="https://github.com/arihantcodes"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.gitHub className="icon-class w-4" />
              </Link>
              <Link
                href="https://x.com/arihantcodes"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Icons.twitter className="icon-class w-3" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <h2 className="text-md font-bold">Spectrum/ui</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
