"use client"
import React from "react";
import "./globals.css";
import Link from "next/link";
import { Button } from "primereact/button";

function Error() {
  return (
    <div className="h-screen w-screen bg-slate-950">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="">
              <div className="">
                <h1 className="text-9xl font-extrabold text-white">500</h1>
                <h1 className="my-2 text-orange-500 font-bold text-2xl">
                  Looks like you&rsquo;ve an unexpected error loading this page
                </h1>
                <p className="my-2 text-orange-500">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link href="/">
                  <Button
                    label="Homepage"
                    className="px-24 bg-transparent hover:bg-transparent border-orange-500
                    hover:border-white"
                  />
                </Link>
              </div>
            </div>
            <div>
              {/* <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt=" " /> */}
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt=" " />
        </div>
      </div>
    </div>
  );
}

export default Error
