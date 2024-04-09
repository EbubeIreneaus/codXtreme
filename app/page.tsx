import Image from "next/image";
import React from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import Header from "./_components/agency/Header";
import { Divider } from 'primereact/divider';
import Capabilities from "./_components/agency/Capabilities";
import LatestWork from "./_components/agency/LatestWork";
import Aboutus from "./_components/agency/Aboutus";
import Footer from "./_components/agency/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />

      <div
        className="min-h-screen w-full bg-[url('/img/agencybg.jpg')] bg-cover bg-fixed bg-center relative text-white
      before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/50 border border-transparent"
      >
        <div className=" w-full relative md:px-10 px-7 mt-[120px] z-[30] ">
          <div className="max-w-xl ">
            <h2 className="lg:text-6xl md:text-8xl text-6xl md:mt-10 lg:mt-0 mt-0 font-bold mb-12">
              An Innovative Agency For Forward-thinking Brands.
            </h2>
            <Link href="/agency/about">
              <Button
                label="Learn More"
                className="w-[250px] z-30 py-2 ring-2 border-0 ring-orange-500 p-button bg-transparent hover:-mt-5 hover:bg-transparent 
                hover:ring-white transition-all ease-in-out duration-500"
              />
            </Link>
          </div>
          <br />
          <br />
          <Divider color="orange" className="hidden lg:block" />

          <div className=" hidden lg:flex justify-between items-center px-5 py-7 mt-3">
            <div>
              <i className="fa fa-map"></i> &nbsp;
              <span>Kubwa fedral housing, Abuja</span>
            </div>
            <div>
              <i className="fa fa-envelope"></i> &nbsp;
              <span>agency@codextreme.com</span>
            </div>
            <div>
              <i className="fa fa-phone"></i> &nbsp;
              <span>+234 808 541 9653</span>
            </div>
          </div>
        </div>
      </div>

        <Capabilities />
        <LatestWork />
        <Aboutus />

        <Footer />
    </div>
  );
}
