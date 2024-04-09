import React from "react";
import HeadingTxt from "./HeadingTxt";

function LatestWork() {
  const works = [
    {
      title: "codXtreme Blog home",
      src: "codeXtreme-blog-home.png",
    },
    {
      title: "nepto assets crypto page",
      src: "neptoassets-crypto-page.png",
    },

    {
      title: "okisstore home",
      src: "okisstore-home.png",
    },
    {
      title: "sidework dashboard home",
      src: "sidework-dashbord-home.jpg",
    },
  ];

  return (
    <div className="py-32 bg-black/50">
      <div className="mb-16 px-10 ">
        <HeadingTxt text="Our Work" />
      </div>

      <ul className="flex flex-wrap mx-auto px-3 gap-3">
        {works.map((work, index) => (
          <li key={work.title} className="inline shadow-md  relative hover:-mt-5 transition-all ease-in-out duration-300">
            <img
              src={`/img/work/${work.src}`}
              alt={work.title.toLowerCase()}
              className="object-cover max-h-[400px]"
            />
           <div className="py-2 w-full absolute z-20 bg-orange-600/80 bottom-0 left-0 text-center font-semibold">
            <p>
              {work.title}
            </p>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestWork;
