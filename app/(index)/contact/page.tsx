"use client"
import Aboutus from "@/app/_components/agency/Aboutus";
import Capabilities from "@/app/_components/agency/Capabilities";
import HeadingTxt from "@/app/_components/agency/HeadingTxt";
import Link from "next/link";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

function Service() {
  const [message, updateMessage] = useState({
    fullName: '',
    email: '',
    msg: ''
  })

  function formChange(obj: {}){
    updateMessage(prevState => ({
      ...prevState,
      ...obj
    }))
  }

  return (
    <div className="bg-slate-950 text-white">
      <div
        className="w-full bg-[url('/img/agencybg.jpg')] bg-cover bg-fixed bg-center relative text-white
      before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/50 border border-transparent"
      >
        <div className=" w-full relative md:px-10 px-7 mt-[120px] z-[30] py-20">
          <div className="max-w-xl ">
            <HeadingTxt text="What we are" /> <br />
            <h2 className="text-5xl font-bold ">
              We’re A Digital Design & Branding Agency.
            </h2>
          </div>
        </div>
      </div>

      <div className="py-20 px-10">
        <div className="grid lg:grid-cols-2 lg:px-14 px-5">
          <div className=" px-5">
            <HeadingTxt text="Contact Us" />
            <p className="my-14 text-sm">
              Let&rsquo;s make something great together! Use the form below to
              get in touch with us. Whether you&rsquo;re interested in our
              services, have a project idea in mind, or just want to connect,
              we&rsquo;re here to help. Your inquiry is important to us, and
              we&rsquo;ll make sure to respond promptly. We can&rsquo;t wait to
              hear from you and start this exciting journey together!
            </p>
            <ul className="">
              <li className="flex gap-5 mb-5 text-sm">
                <i className="fa fa-map"></i>
                <p>
                  Julius Berga camp, after fedral housing kubwa, Abuja, Nigeria
                </p>
              </li>
              <li className="flex gap-5 mb-5 text-sm">
                <i className="fa fa-envelope"></i>
                <p>agency@codextreme.com.ng</p>
              </li>
              <li className="flex gap-5 mb-5 text-sm">
                <i className="fa fa-phone"></i>
                <p>+234 808 541 9653, +234 806 198 2520</p>
              </li>
            </ul>
          </div>

          <form>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2.5 outline-none border ps-3 text-black"
                value={message.fullName}
                onChange={(e) => formChange({ fullName: e.target.value })}
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="email"
                className="w-full py-2.5 outline-none border ps-3 text-black"
                value={message.email}
                onChange={(e) => formChange({ email: e.target.value })}
              />
            </div>

            <div className="mb-5">
              <textarea
                placeholder="message"
                className="w-full h-36 ps-3 py-2 text-black"
                value={message.msg}
                onChange={(e) => formChange({ msg: e.target.value })}
              ></textarea>
            </div>
            <button className="px-20 py-2.5 border group bg-transparent hover:bg-transparent border-orange-400 hover:border-white">
             <i className="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i> <span> submit</span>
            </button> 
          </form>
        </div>
      </div>

      <div className="pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d984.7782660575873!2d7.354940988681886!3d9.14426024889281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1712749058330!5m2!1sen!2sng"
          className="mx-auto w-full h-[350px]"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-14 py-20">
        <h2 className="text-4xl font-extrabold text-center">Follow Us</h2>
        <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-10"></span>

        <ul className="flex gap-5 justify-center">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <li>
              <i className="fa-brands fa-facebook fa-lg"></i>
            </li>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <li>
              <i className="fa-brands fa-twitter fa-lg"></i>
            </li>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <li>
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </li>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <li>
              <i className="fa-brands fa-tiktok fa-lg"></i>
            </li>
          </a>
        </ul>
      </div>

      <div className="mt-14 py-20 bg-black/70">
        <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-10"></span>
        <h2 className="text-5xl font-extrabold text-center mb-10">
          Don&rsquo;t Be Shy, Say Hello!
        </h2>

        <Link href="/contact" className="w-fit mx-auto block">
          <Button
            label="contact us"
            className="border-2  px-20 py-2 mx-auto border-orange-600 bg-transparent hover:bg-transparent hover:border-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Service;
