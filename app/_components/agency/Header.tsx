"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { Button } from "primereact/button";

function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const toggleNav = () =>{
    navRef.current?.classList.toggle('!max-w-[300px]')
    navRef.current?.classList.toggle("!opacity-100");
  }
  const navLinks = [
    { title: "home", href: "/", icon: "" },
    { title: "about", href: "/service", icon: "" },
    { title: "service", href: "/service", icon: "" },
    { title: "project", href: "/project", icon: "" },
    { title: "testimonial", href: "/testimonial", icon: "" },
    { title: "contact", href: "/contact", icon: "" },
  ];

  return (
    <header className="absolute w-full left-0 z-40 text-white py-6 my-5">
      <div className="flex justify-between md:px-20 px-5 items-center">
        <div>
          <h2 className="text-xl lg:text-2xl font-extrabold flex items-center ">
            <span>CODE</span>
            <span className="text-orange-400 font-extrabold text-2xl lg:text-4xl">
              X
            </span>
            <span>TREME</span>
          </h2>
        </div>

        <ul className="hidden lg:flex gap-7 font-semibold">
          {navLinks.map((news) => (
            <li
            key={news.title}
              className={`${
                pathname === news.href ? "text-orange-600" : ""
              } hover:text-orange-400`}
            >
              <Link href={news.href}>{news.title}</Link>
            </li>
          ))}
        </ul>

        <aside
          className="fixed top-0 left-0 max-w-0 w-full min-h-screen h-full bg-black/90 z-[9999] px-5 py-10 
          transition-all ease-in-out duration-300 overflow-hidden opacity-0"
          ref={navRef}
        >
          <div className="bg-black-90 py-5 min-h-10 mb-5">
            <h2 className="text-xl lg:text-2xl font-extrabold flex items-center justify-end ">
              <i className="fa fa-close px-2 py-1" onClick={()=>toggleNav()}></i>
            </h2>
          </div>

          <ul className="flex flex-col gap-7 font-semibold">
            {navLinks.map((news) => (
              <li
              key={news.title}
                className={`${
                  pathname === news.href ? "text-orange-600" : ""
                } hover:text-orange-400`}
              >
                <Link href={news.href}>{news.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5  mt-7">
            <div>
              <i className="fa fa-envelope"></i> &nbsp;
              <span>agency@codextreme.com</span>
            </div>
            <div>
              <i className="fa fa-phone"></i> &nbsp;
              <span>+234 808 541 9653</span>
            </div>
          </div>
        </aside>

        <Button
          label=""
          className="bg-transparent border-0 hover:bg-transparent ring ring-orange-500 hover:ring-2 lg:hidden"
          onClick={()=>toggleNav()}
        >
          <i className="fa fa-bars"></i>
        </Button>
      </div>
    </header>
  );
}

export default Header;
