"use client"
import React, {useEffect, useState} from "react";
import { Card } from "primereact/card";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import SquareNewsComp from "./SquareNewsComp";
import { NewsType } from "@/app/lib/News.types";

function NewsAside() {
  let [popular_news, setPopularNews] = useState([]);

  const categories = [
    {
      title: "programming",
      url: "/blog/tag/programming",
    },
    {
      title: "software",
      url: "/blog/tag/software",
    },
    {
      title: "innovation",
      url: "/blog/tag/innovation",
    },
  ];
  
  useEffect(() => {
    async function getNews(){
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/software/?length=10"
        );
        if (!response.ok) {
          throw new Error("Network Error Getting LC_News Data");
        }
        const data = await response.json();

        if (data.length >= 1) {
          setPopularNews(data);
        } else {
          console.error("Response contains no data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

    getNews()
  }, []);

  const ToolbarFirst = (
    <h2 className="text-xl font-extrabold ">Advertisement</h2>
  );
  return (
    <div>
      <Card>
        <div className="min-h-52">
          <Toolbar start={ToolbarFirst} />
        </div>
      </Card>
      <div className="grid gap-3 my-3">
        {popular_news.map((news: NewsType) => (
          <React.Fragment key={news.id}>
            <SquareNewsComp news={news} />
          </React.Fragment>
        ))}
      </div>
      <br />
      <Card>
        <div className="min-h-52">
          <Toolbar
            start={
              <h2 className="text-2xl font-extrabold uppercase">NewsLater</h2>
            }
          />

          <div className="my-5">
            <p className="text-center py-2 uppercase text-sm font-bold">
              Signup and recieve email updates on our new product announcement, sales and more
            </p>
            <br />
            <div className="p-inputgroup mx-auto w-fit">
              <input
                type="email"
                placeholder="email"
                className="py-2 ps-3  border outline-none"
              />
              <Button
                className="p-inputgroup-addon py-2 px-4 rounded-none border-0 mx-2 bg-yellow-500 hover:bg-orange-500"
                label="sign up"
              />
            </div>
          </div>
        </div>
      </Card>
      <br /> <br />
      <Card>
        <div className="min-h-52">
          <Toolbar
            start={<h2 className="text-2xl font-extrabold uppercase">Tags</h2>}
          />

          <div className="my-5">
            {categories.map((tag, index) => (
              <Button
                key={index}
                label={tag.title}
                className="px-4 !py-2.5 pt-0 pb-0 border mx-4 mb-2 hover:bg-orange-500 rounded-none text-sm font-light text-black/60"
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NewsAside;
