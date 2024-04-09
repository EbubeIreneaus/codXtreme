import React from "react";
import HeadingTxt from "./HeadingTxt";
import Link from "next/link";
import { Button } from "primereact/button";

function Aboutus() {
  return (
    <div className="py-32">
      <div className="mb-16 px-10 grid lg:grid-cols-2 gap-y-10">
        <HeadingTxt text="About us" />
        <div>
          <p>
            At{" "}
            <span className="font-bold text-orange-400">
              CodXtreme Digital Solutions
            </span>
            , we're more than just a digital agency – we're your dedicated
            partner in navigating the ever-evolving digital landscape. With a
            passion for innovation and a commitment to excellence, we specialize
            in crafting tailored solutions that drive growth, elevate brands,
            and deliver measurable results.
          </p>
          <br />
          <p>
            Our team of experienced professionals brings together a diverse
            range of skills and expertise, from web design and development to
            digital marketing and beyond. We pride ourselves on our
            collaborative approach, working closely with each client to
            understand their unique goals, challenges, and vision.
          </p>
          <br />
          <p>
            Whether you're a startup looking to make a splash in the online
            world or an established business seeking to enhance your digital
            presence, we're here to help. From strategy to execution, we'll
            guide you every step of the way, delivering creative solutions that
            make a real impact.
          </p>
          <br />
          <p>
            Discover the difference that strategic thinking, creative flair, and
            technical expertise can make for your business. Partner with{" "}
            <span className="font-bold text-orange-400">
              CodXtreme Digital Solutions
            </span>{" "}
            and unlock the full potential of your digital journey.
          </p>
          <br />
        </div>
      </div>

      <div className="">
        <div className="grid lg:grid-cols-2 gap-y-7 px-5 lg:px-1 items-center">
          <img
            src="/img/about-ebube.jpg"
            alt="Okigwe Ebube Ireneaus image"
            className="lg:max-w-[500px] md:max-w-[300px] w-full mx-auto"
          />
          <div className="">
            <p className="font-bold text-lg">
              Fullstack Developer | SEO Expert
            </p>
            <h2 className="text-4xl font-bold mt-3 mb-10">
              Okigwe Ebube Ireneaus
            </h2>
            <p className="max-w-xl">
              Passionate fullstack developer, I bring a wealth of experience in
              both refining existing webpage and crafting new once from grounds
              up. My comphrehensive skill set allows me to seamlessly integrate
              frontend element while ensuring optimal user experience and visual
              coherence across your website
              <br />
              <br />
              we are confident in our ability to deliver result that exceed your
              expectation and positively impact any website success
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 py-20 bg-black/70">
        <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-10"></span>
        <h2 className="text-5xl font-extrabold text-center mb-10">
          Don't Be Shy, Say Hello!
        </h2>

        <Link href="/contact" className="w-fit mx-auto block">
          <Button
            label="contact us"
            className="border-2  px-16 py-2 mx-auto border-orange-600 bg-transparent hover:bg-transparent"
          />
        </Link>
      </div>
    </div>
  );
}

export default Aboutus;
