import {lazy, Suspense} from 'react'
import Image from "next/image";
import LargeCarouselNews from "../_components/blog/LargeCarouselNews";
import FeaturedTwo from "../_components/blog/FeaturedTwo";
import {LoaderIcon} from '../_components/LoaderIcon'
const Featured = lazy(()=>import('../_components/blog/Featured'))
import "../_components/loader.css";


export default function Home() {
  return (
    <>
    
      <div className="w-full">
        <LargeCarouselNews />
        <Featured />
        <Suspense fallback={LoaderIcon}>
          <FeaturedTwo />
        </Suspense>
      </div>
    </>
  );
}
