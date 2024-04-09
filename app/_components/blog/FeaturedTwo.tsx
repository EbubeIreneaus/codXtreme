import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { NewsType } from "../../lib/News.types";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import Link from "next/link";
import SquareNewsComp from "./SquareNewsComp";
import NewsAside from "./NewsAside";
import CardNewsComp from "./CardNewsComp";

async function FeaturedTwo() {
  let first_news = [];
  let second_news = [];
  let thirdnews = {} as NewsType;
  let last_news = [];
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/software/?length=40"
    );
    if (!response.ok) {
      throw new Error("Network Error Getting LC_News Data");
    }
    const data = await response.json();

    if (data.length >= 40) {
      first_news = data.slice(0, 4);
      second_news = data.slice(5, 9);
      thirdnews = data[10];
      last_news = data.slice(11, 15);
    } else {
      console.error("Response contains fewer than six elements");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const startContent = (
    <h2 className="text-2xl font-extrabold ">Latest News</h2>
  );

  const endContent = (
    <Link href="/latest" className="font-semibold hover:text-yellow-500">
      view all
    </Link>
  );

  const fmtDate = (dateString: Date) => {
    let date_month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    let month = date_month[date.getMonth()];
    let day = date.getDay();
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="lg:max-w-[85%] md:max-w-[90%]  mx-auto my-5 py-10">
      <Toolbar start={startContent} end={endContent} />
      <div className="flex lg:flex-row flex-col my-5 gap-5">
        {/* flex item one */}
        <div className=" lg:max-w-[65%] w-full">
          <div className=" grid md:grid-cols-2 gap-4">
            {first_news.map((news: NewsType) => {
              return <CardNewsComp news={news} key={news.id} />;
            })}
          </div>

          {/* second news  */}
          <div className="grid md:grid-cols-2 gap-3 my-3">
            {second_news.map((news: NewsType) => (
              <React.Fragment key={news.id}>
                <SquareNewsComp news={news} />
              </React.Fragment>
            ))}
          </div>

          {/* third news large component */}
          <div>
            <Card>
              <div className=" py-2 px-1">
                <div className="flex md:flex-row flex-col items-center gap-5">
                  <img
                    src={thirdnews.urlToImage}
                    alt={thirdnews.title}
                    className="md:w-[300px] w-full h-[400px] object-cover mx-auto"
                  />
                  <div>
                    <div className="flex gap-3 items-center ">
                      <Button
                        label="software"
                        className="px-4 !py-1 pt-0 pb-0 border-0 bg-yellow-400 hover:bg-orange-500 rounded-none text-sm font-light text-black/60"
                      />
                      <span className="text-sm">
                        {fmtDate(thirdnews.published_at)}
                      </span>
                    </div>
                    <div className="my-4">
                      <Link
                        href={thirdnews.url}
                        className="hover:underline underline-offset-2"
                      >
                        <h2 className="text-2xl font-extrabold text-black/60 hover:text-yellow-500 line-clamp-2 text-ellipsis">
                          {" "}
                          {thirdnews.title}{" "}
                        </h2>
                      </Link>
                    </div>

                    <div>
                      <p className="italic text-black/80 text-lg">
                        {thirdnews.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/*last news  */}
          <div className="grid md:grid-cols-2 gap-3 my-3 ">
            {last_news.map((news: NewsType) => (
              <React.Fragment key={news.id}>
                <SquareNewsComp news={news} />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* flex item two */}
        <div className="flex-grow lg:px-7">
          <NewsAside />
        </div>
      </div>
    </div>
  );
}

export default FeaturedTwo;
