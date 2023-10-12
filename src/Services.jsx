import React from "react";
import cleaning from "./images/cleaning.png";
import graphicDesign from "./images/graphicDesign.gif";
import photography from "./images/photography.png";
import programing from "./images/programing.gif";
import videoEditing from "./images/videoEditing.gif";

function Services() {
  return (
    <div className="my-20 w-[75%] mx-auto">
      <h2 className="text-[35px] font-splinesans  font-[700]">
        You need it, we've got it
      </h2>
      <div className="flex mt-20 justify-around items-baseline ">
        <div className="w-[200px]">
          <img
            className="aspect-square  shadow-lg cursor-pointer object-contain rounded-lg hover:border-4 hover:border-red-200 w-[10vw] ease-in-out duration-75"
            src={graphicDesign}
            alt=""
          />
          <p className="text-[18px] font-[500] cursor-pointer hover:scale-105 ease-in-out duration-75">Graphic Design</p>
        </div>
        <div className="w-[200px]">
          <img
            className="aspect-square shadow-lg cursor-pointer object-contain rounded-lg hover:border-4 hover:border-yellow-200 w-[10vw] ease-in-out duration-75"
            src={photography}
            alt=""
          />
          <p className="text-[18px] font-[500] cursor-pointer hover:scale-105 ease-in-out duration-75">Photography</p>
        </div>
        <div className="w-[200px]">
          <img
            className="aspect-square shadow-lg cursor-pointer object-contain rounded-lg hover:border-4 hover:border-green-200 w-[10vw] ease-in-out duration-75"
            src={programing}
            alt=""
          />
          <p className="text-[18px] font-[500] cursor-pointer hover:scale-105 ease-in-out duration-75">Programming & Tech</p>
        </div>
        <div className="w-[200px]">
          <img
            className="aspect-square shadow-lg cursor-pointer object-contain rounded-lg hover:border-4 hover:border-blue-200 w-[10vw] ease-in-out duration-75"
            src={cleaning}
            alt=""
          />
          <p className="text-[18px] font-[500] cursor-pointer hover:scale-105 ease-in-out duration-75">Office & <br/> Home Cleaning</p>
        </div>
        <div className="w-[200px]">
          <img
            className="aspect-square shadow-lg cursor-pointer object-contain rounded-lg hover:border-4 hover:border-orange-200 w-[10vw] ease-in-out duration-75"
            src={videoEditing}
            alt=""
          />
          <p className="text-[18px] font-[500] cursor-pointer hover:scale-105 ease-in-out duration-75">Video Editing</p>
        </div>
       
      </div>
    </div>
  );
}

export default Services;
{
  /* <img className='aspect-square cursor-pointer object-contain rounded-lg border-4 border-yellow-400 w-[10%]' src={photography} alt="" />       
          <img className='aspect-square cursor-pointer object-contain rounded-lg border-4 border-green-400 w-[10%]' src={programing} alt="" />       
          <img className='aspect-square cursor-pointer object-contain rounded-lg border-4 border-blue-400 w-[10%]' src={cleaning} alt="" />       
          <img className='aspect-square cursor-pointer object-contain rounded-lg border-4 border-indigo-400 w-[10%]' src={videoEditing} alt="" />        */
}
