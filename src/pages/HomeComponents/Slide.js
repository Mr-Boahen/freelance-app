import React, { useEffect } from "react";
import graphic from "../../images/graphic.jpg";
import photo from "../../images/photo.jpg";
import code from "../../images/code.jpg";
import clean from "../../images/clean.jpg";
import video from "../../images/video.jpg";


function Slide() {
  const slideContainer = document.querySelector(".slide-container");
  
  useEffect(()=>{
    slideContainer?.addEventListener("wheel", (e)=>{
      e.preventDefault();
      e.stopPropagation();
  
    },{passive:false});
  },[slideContainer?.scrollLeft])

  const slideMotion = (e) => {
  const slideContainer = document.querySelector(".slide-container");
    if(slideContainer.scrollLeft<759){
      slideContainer.scrollBy({
        top: 0,
        left: e.target.id === "slide-right" ? -550 : 550,
        behavior: "smooth",
      });
    }else{
      slideContainer.scrollBy({
        top: 0,
        left:-759,
        behavior: "smooth",
      });
    }
      
  };
  return (
    <div className="font-splinesans w-[75%] mx-auto relative">
      <svg
        onClick={slideMotion}
        id="slide-right"
        className="h-14 w-14  text-gray-400 absolute bottom-[35%] -left-24 cursor-pointer hover:bg-gray-200 hover:text-black bg-white shadow-md rounded-full transition-all duration-100 ease-in-out z-30"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>

      <svg
        onClick={slideMotion}
        id="slide-left"
        className=" h-14 w-14  text-gray-400 absolute bottom-[35%] -right-24 cursor-pointer hover:bg-gray-200 hover:text-black bg-white shadow-md rounded-full transition-all duration-100 ease-in-out z-30"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>

      <h2 className="text-4xl font-bold my-10">Popular Services</h2>
      <div className="slide-container flex items-center px-24 justify-between  gap-12 mt-3   my-10 relative overflow-x-scroll scrollbar-hide h-[500px] ">
        <div className="shrink-0 w-[300px] z-[10] rounded-sm  relative transition-all ease-in-out duration-75 hover:shadow-2xl cursor-pointer">
          <img
            className="filter rounded-lg    h-[400px]  object-cover"
            src={graphic}
            alt=""
          />
          <p className="absolute bottom-0 text-white text-2xl font-[500] m-5">
            Graphic Design
          </p>
        </div>
        <div className="shrink-0 w-[300px]  rounded-sm  relative transition-all ease-in-out duration-75 hover:shadow-2xl cursor-pointer">
          <img
            className="filter rounded-lg    h-[400px]  object-cover"
            src={photo}
            alt=""
          />
          <p className="absolute bottom-0 text-white text-2xl font-[500] m-5">
            Photography
          </p>
        </div>
        <div className="shrink-0 w-[300px]   rounded-sm relative transition-all ease-in-out duration-75 hover:shadow-2xl cursor-pointer">
          <img
            className="filter rounded-lg    h-[400px] object-cover"
            src={code}
            alt=""
          />
          <p className="absolute bottom-0 text-white text-2xl font-[500] m-5">
            Programming & <br />
            Tech
          </p>
        </div>
        <div className="shrink-0 w-[300px]    rounded-sm  relative transition-all ease-in-out duration-75 hover:shadow-2xl cursor-pointer">
          <img
            className="filter rounded-lg    h-[400px] object-cover"
            src={clean}
            alt=""
          />
          <p className="absolute bottom-0 text-white text-2xl font-[500] m-5">
            Cleaning & Laundry
          </p>
        </div>
        <div className="shrink-0  w-[300px]    rounded-sm  relative transition-all ease-in-out duration-75 hover:shadow-2xl cursor-pointer">
          <img
            className="filter rounded-lg    h-[400px] object-cover"
            src={video}
            alt=""
          />
          <p className="absolute bottom-0 text-white text-2xl font-[500] m-5">
            Cleaning & Laundry
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
