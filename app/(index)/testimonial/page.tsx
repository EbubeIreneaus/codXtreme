import HeadingTxt from "@/app/_components/agency/HeadingTxt";
import Link from "next/link";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

function Testimony() {
  const reviews = [
    {
      company: "CEO of Golden Wealths",
      name: "Ogbeche Andrey",
      text: "Working with codXtreme was a game-changer for our business. From the initial consultation to the \
      final product delivery, they demonstrated unparalleled professionalism and expertise. Their team's\
       attention to detail ensured that every aspect of our project was meticulously executed. Moreover, \
       their proactive communication and willingness to go the extra mile made the entire process seamless \
       and enjoyable. I can't recommend codXtreme highly enough!",
    },
    {
      company: "CEO of Digital Assets",
      name: "Ebuka Samuel",
      text: "codXtreme exceeded all expectations with their innovative solutions and top-notch service. Their\
       team's creativity and technical prowess were evident in every interaction, and they consistently delivered\
        results that surpassed our wildest dreams. What truly sets codXtreme apart is their unwavering\
         commitment to client satisfaction. They truly care about their clients' success and will stop at\
          nothing to ensure they achieve their goals. Without a doubt, working with codXtreme was one of \
          the best decisions we've made for our business.",
    },
    {
      company: "CEO of Nepto Assets",
      name: "Chukwudi Stanley",
      text: "codXtreme is the epitome of excellence in the digital realm. From website development to digital\
       marketing, their team has mastered every aspect of the digital landscape. What impressed me the most was\
        their ability to understand our unique needs and tailor their solutions accordingly. Their attention to\
         detail and dedication to delivering results were evident in every deliverable they produced. Thanks to \
         codXtreme, our online presence has never been stronger, and our business has seen exponential growth.\
          I couldn't be happier with the results!",
    },
    {
      company: "CEO of SpringField",
      name: "Nnamani Hillary",
      text: "codXtreme is hands down the best in the business. Their team's expertise and creativity are unmatched,\
       and they consistently deliver results that exceed expectations. What sets codXtreme apart is their \
       customer-centric approach. They take the time to truly understand their clients' needs and goals, and\
        they tailor their solutions accordingly. Working with codXtreme was a breath of fresh air – they made\
         the entire process smooth and stress-free. I wouldn't hesitate to recommend codXtreme to anyone looking\
          to elevate their online presence and grow their business.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white bg-[url('/img/agencybg.jpg')] bg-cover bg-fixed bg-center  min-h-screen">
      <div
        className="w-full relative text-white 
      before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/50 border border-transparent"
      >
        <div className="w-full relative md:px-10 px-7 mt-[120px] z-[30] py-20">
          <div className="max-w-2xl ">
            <HeadingTxt text="What They Say" /> <br />
            <h2 className="text-5xl font-bold ">
              We Build Valuable & Meaningful Experiences.
            </h2>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className=" py-32 bg-black text-white">
          <h2 className="text-lg font-extrabold text-center">Testimonial</h2>
          <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-7"></span>
          <h2 className="text-5xl font-extrabold text-center">
            Why Our Client Love Us
          </h2>

          <p className="text-center py-10 max-w-5xl px-5 mx-auto">
            What sets us apart is our unwavering focus on exceeding client
            expectations. We go above and beyond to deliver exceptional service,
            consistently exceeding deadlines and surpassing project
            requirements. Our team of experts combines creativity, technical
            expertise, and industry knowledge to deliver innovative solutions
            that drive tangible results. With a client-centric approach at the
            core of everything we do, it's no wonder our clients keep coming
            back to us, time and time again."
          </p>
        </div>
        <div>
          {
            reviews.map((review, index )=> {
              if(index % 2 == 0){
                return (
                  <div className="grid lg:grid-cols-2" key={index}>
                    <div className="w-full min-h-[100px] h-full bg-transparent "></div>
                    <div className="bg-black text-white lg:min-h-[400px] py-32 lg:px-10 px-5">
                      <p className="font-bold">{review.company}</p>
                      <br />
                      <HeadingTxt text={review.name} />
                      <p className="text-sm mt-10">
                        <q> {review.text} </q>
                      </p>
                    </div>
                  </div>
                );
              }else {
                 return (
                   <div className="grid lg:grid-cols-2" key={index}>
                     <div className="bg-black text-white lg:min-h-[400px] py-32 lg:px-10 px-5 order-2 lg:order-1">
                       <p className="font-bold">{review.company}</p>
                       <br />
                       <HeadingTxt text={review.name} />
                       <p className="text-sm mt-10">
                         <q> {review.text} </q>
                       </p>
                     </div>
                     <div className="w-full min-h-[100px] h-full  bg-transparent !order-1 lg:!order-2"></div>
                   </div>
                 );
              }
            })
          }
        </div>
      </div>

      <div className="mt-14 py-20 bg-slate-950">
        <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-10"></span>
        <h2 className="text-5xl font-extrabold text-center mb-10">
          Don&rsquo;t Be Shy, Say Hello!
        </h2>

        <Link href="/contact" className="w-fit mx-auto block">
          <Button
            label="contact us"
            className="px-24 py-2 mx-auto border-orange-600 bg-transparent hover:bg-transparent hover:border-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Testimony;
