"use client";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="md:text-4xl text-center md:mt-12 font-bold ">
          Instant UI Components <br /> at <Cover>Copy, Paste, Done</Cover>{" "}
        </h1>
        <h1 className="text-center font-bold mt-6 text-2xl text-gray-500">
          Build With
        </h1>
        <div className="flex flex-cols md:flex-row md:items-center md:justify-center mt-4 gap-6">
          <Image src="./shadcn.svg" height={40} width={160} alt="" />
          <Image src="./nextjs.svg" height={40} width={90} alt="" />
          <Image src="./tailwind.svg" height={40} width={120} alt="" />

          <Image src="./aceternity.svg" height={40} width={160} alt="" />
          <h1 className=" font-bold text-1xl text-[#848484]">Magic UI</h1>
        </div>
      </div>
    </div>
  );
}
