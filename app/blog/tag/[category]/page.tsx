"use client";
import React, { useState, useEffect } from "react";
import { NewsType } from '../../../lib/News.types';
import { Toolbar } from "primereact/toolbar";
import CardNewsComp from "../../../_components/blog/CardNewsComp";
import SquareNewsComp from "../../../_components/blog/SquareNewsComp";
import NewsAside from "../../../_components/blog/NewsAside";

function Home({ params }: { params: { category: string } }) {
  let [news, setNews] = useState([]);
  let [newsTwo, setNewsTwo] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/${params.category}/?length=20`
        );
        if (!res.ok) {
          throw new Error("Unknown Category");
        }

        const response = await res.json();
        let news = response.slice(0, 4);
        let newsTwo = response.slice(4, 20);
        setNews(news)
        setNewsTwo(newsTwo)

      } catch (error) {
        throw new Error("Error Occured During fetch");
      }
    };

    getNews();
  }, []);

  const ToolbarFirst = (
    <h2 className="text-2xl font-bold uppercase">
      CATEGORY: {params.category}
    </h2>
  );

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-5 my-10 lg:px-10">
        <div className=" lg:max-w-[65%] w-full">
          <Toolbar start={ToolbarFirst} />

          <div>
            <div className=" grid md:grid-cols-2 gap-4 mt-5">
              {news.map((news: NewsType) => {
                return <CardNewsComp news={news} key={news.id} />;
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 my-3">
            {newsTwo.map((news: NewsType) => (
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

export default Home;
