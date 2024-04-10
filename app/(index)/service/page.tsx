import Capabilities from "@/app/_components/agency/Capabilities";
import HeadingTxt from "@/app/_components/agency/HeadingTxt";
import Link from "next/link";
import { Button } from "primereact/button";
import React from "react";

function Service(){

    return (
      <div className="bg-slate-950 text-white">
        <div
          className="w-full bg-[url('/img/agencybg.jpg')] bg-cover bg-fixed bg-center relative text-white
      before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/50 border border-transparent"
        >
          <div className=" w-full relative md:px-10 px-7 mt-[120px] z-[30] py-20">
            <div className="max-w-xl ">
              <HeadingTxt text="What we do?" /> <br />
              <h2 className="text-5xl font-bold " data-aos="fade-up">
                Ask Us About Branding, Design & Advertising.
              </h2>
            </div>
          </div>
        </div>

        <Capabilities />
      </div>
    );
}

export default Service