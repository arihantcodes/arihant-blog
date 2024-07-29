import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { Coffee, MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/arihantdotcom"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
      From Code to Cloud: A Comprehensive Guide to Modern Web Development Mastery
      </h1>
     
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link href="https://www.buymeacoffee.com/jainari1202" target="_blank" className={buttonVariants({ variant: "outline", size: "sm" })}>
       <Coffee className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
       Buy me a coffee
        </Link>
      </div>
      <Link href="https://arihant.us">
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> Visit arihant.us
      </span>
      </Link>
    </div>
  );
}
