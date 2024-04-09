import React from 'react'
import {Button} from 'primereact/button'
import {Card} from 'primereact/card'
import Link from 'next/link'
import Image from 'next/image'
import { NewsType } from '@/app/lib/News.types'

function CardNewsComp({news}: {news: NewsType}) {

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
    <>
      <Card>
        <div>
          
          <img
            src={news.urlToImage}
            alt={news.title}
            key={news.id}
            className="object-center object-cover"
            width={350}
            height={340}
          />
          <div className=" py-4 w-full px-5">
            <div className="flex gap-3 items-center my-3">
              <Button
                label={news.category}
                className="px-3 !py-2.5 pt-0 pb-0 border-0 bg-yellow-400 hover:bg-orange-500 rounded-none text-sm font-light text-black/60"
              />
              <span className=" text-sm">{fmtDate(news.published_at)}</span>
            </div>
            <div className="py-3">
              <Link
                href={news.url}
                className="hover:underline underline-offset-2"
              >
                <h2 className="text-lg font-extrabold text-black/70 hover:text-orange-500 line-clamp-2 text-ellipsis">
                  {" "}
                  {news.title}{" "}
                </h2>
              </Link>
            </div>
            <div>
              <p className="italic line-clamp-5 text-ellipsis">{news.desc}</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CardNewsComp
