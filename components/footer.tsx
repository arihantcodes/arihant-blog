import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Coffee, HeartIcon, HexagonIcon, Linkedin, TriangleIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <HexagonIcon className="sm:block hidden w-5 h-5 text-muted-foreground fill-current" />
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://arihant.us"
            >
              Arihant jain
            </Link>
           
            
          </p>
          
        </div>
      <div>
        <p>
        © 2024-25 All rights reserved
        </p>
      </div>
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/arihantdotcom/"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Linkedin className="h-[0.9rem] w-4 mr-2 text-primary fill-current" />
        Linkedin
      </Link>
      <Link href="https://www.buymeacoffee.com/jainari1202" target="_blank" className={buttonVariants({ variant: "outline", size: "sm" })}>
       <Coffee className="h-[0.9rem] w-4 mr-3 text-primary fill-current" />
       Buy me a coffee
        </Link>
    </>
  );
}


