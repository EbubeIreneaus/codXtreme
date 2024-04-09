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
    <div className="py-28 bg-black/50">
      <div className="mb-14 px-10 ">
        <HeadingTxt text="Latext Work" />
      </div>

      <ul className="flex flex-wrap mx-auto px-3">
        {works.map((work, index) => (
          <li key={work.title} className={`inline shadow-md p-3`}>
            <img
              src={`/img/work/${work.src}`}
              alt={work.title.toLowerCase()}
              className="object-cover max-h-[400px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestWork;
