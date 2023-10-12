import React from "react";
function Banner() {
  return (
    <div className="bg-black text-white h-[75vh]">
      
      <div className="mx-auto w-[75%] pt-44 ">
        <p className="text-[60px] font-[200] font-signika">
          Find the right <span className="font-narrow text-blue-400">freelance</span> <br /> service, right away
        </p>
        <div className="flex items-center mt-3 h-14 w-[800px] bg-white rounded-[3px] pt-0 pl-5">
          <input
            type="text"
            placeholder="Search for any service"
            className="w-[750px] h-10 outline-none text-gray-700 font-bold font-signika text-xl"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-500 animate-pulse rounded-lg p-1 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          
        </div>
        <div className="flex items-center gap-3 mt-5">
            <p className="font-narrow">Popular: </p>
            <div className="flex gap-2 font-splinesans">
              <button className="border-4 hover:bg-white hover:text-black rounded-[15px] font-bold pt-[2px] pb-[2px] text-cente px-[5px]">Website Designer</button>
              <button className="border-4 hover:bg-white hover:text-black rounded-[15px] font-bold pt-[2px] pb-[2px] text-cente px-[5px]">WordPress</button>
              <button className="border-4 hover:bg-white hover:text-black rounded-[15px] font-bold pt-[2px] pb-[2px] text-cente px-[5px]">Logo Design</button>
              <button className="border-4 hover:bg-white hover:text-black rounded-[15px] font-bold pt-[2px] pb-[2px] text-cente px-[5px]">Photo Editing</button>
            </div>
          
          </div>
       
      </div>
    </div>
  );
}

export default Banner;
