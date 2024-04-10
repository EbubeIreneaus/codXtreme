"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

export default function  HeadingTxt({text}: {text: string}){
useEffect(()=>{
AOS.init();
},[])
    return (
        <div data-aos="fade-up">
            <span className=" w-24 py-1 bg-orange-500 mb-5 block" ></span>
            <h2 className="text-4xl font-bold text-white">{text}</h2>
        </div>
    )
}