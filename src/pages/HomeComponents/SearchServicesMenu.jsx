import React, { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { NavLink, useNavigate } from "react-router-dom";

function SearchServicesMenu() {
  const navigate = useNavigate();

  const [showMore,setShowMore]=useState(false);


  return (
    <div className="relative z-10  ">
      <div className=" ">
        <div className={` lg:w-[50%] lg:flex   py-2 mx-auto flex  items-center justify-center lg:justify-start flex-wrap gap-3 ${showMore?"":"h-16"}  overflow-y-hidden sm:gap-6 lg:gap-10 text-lg text-black font-signika  `}>
          <div className="cursor-pointer  flex flex-col justify-end gap-2 text-[15px] font-splinesans leading-4  h-[50px] w-[100px] hover:border-2 border-black  hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1  flex-shrink-0 rounded-md active:scale-95    transition-all duration-75 ease-in-out">
            <p
              onClick={() => {
                navigate("/search/graphics");
                window.location.reload();
              }}
            >
              Graphics & Design
            </p>
          </div>
          <div className="cursor-pointer font-splinesans flex flex-col justify-end gap-2 text-[15px] leading-4 h-[50px] w-[100px] hover:border-2 hover:border-black  hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1 flex-shrink-0 rounded-md active:scale-95  transition-all duration-75 ease-in-out">
            
            <p
              onClick={() => {
                navigate("/search/programming");
                window.location.reload();
              }}
            >
              Programming & Tech
            </p>
          </div>
          <div className="cursor-pointer font-splinesans flex flex-col justify-center gap-1 text-[15px] leading-4 h-[50px] w-[100px] hover:border-2   border-black hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1 flex-shrink-0 rounded-md  active:scale-95  transition-all duration-75 ease-in-out">
            

            <p
              onClick={() => {
                navigate("/search/photography");
                window.location.reload();
              }}
            >
              Photography
            </p>
          </div>

          <div className="cursor-pointer font-splinesans flex flex-col justify-end gap-2  text-[15px] leading-4 h-[50px] w-[100px] hover:border-2 border-black hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1  flex-shrink-0 rounded-md active:scale-95   transition-all duration-75 ease-in-out">
         
            <NavLink to="/search/maintenance">Office Maintenance</NavLink>
          </div>
          <div className="cursor-pointer font-splinesans flex flex-col justify-center gap-1 text-[15px] leading-4 h-[50px] w-[100px] hover:border-2 border-black hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1 flex-shrink-0 rounded-md active:scale-95   transition-all duration-75 ease-in-out">
           
            <p
              onClick={() => {
                navigate("/search/volunteering");
                window.location.reload();
              }}
            >
              3D Modeling
            </p>
          </div>
          <div className="cursor-pointer font-splinesans flex flex-col justify-end gap-2 text-[14px] leading-4 h-[50px] w-[100px] hover:border-2 border-black hover:shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-1  flex-shrink-0 rounded-md active:scale-95   transition-all duration-75 ease-in-out">
           
            <p
              onClick={() => {
                navigate("/search/animation");
                window.location.reload();
              }}
            >
              Video Editing & Animation
            </p>
          </div>
        </div>
       <div onClick={()=>{setShowMore(!showMore)}} className="w-[50%] mx-auto text-center cursor-pointer active:scale-95 2xl:hidden lg:block md:hidden">
       <h1 className="font-splinesans text-green-500">{showMore?"Show less":"Show more"}</h1>
      {!showMore&& <KeyboardArrowDownRoundedIcon sx={{marginTop:"-15px",color:"#22c581"}} />}
       {showMore&&<KeyboardArrowUpRoundedIcon sx={{marginTop:"-15px",color:"#22c581"}} />}
       </div>
      </div>
      {!window.location.href.includes("profile") ||
        (!window.location.href.includes("search") && (
          <div>
            <h1 className="w-[75%] overflow-x-hidden py-2 my-10 mx-auto flex items-center gap-5 text-4xl text-[#222325] font-splinesans">
              Wossop, Mr_Kaakyire
            </h1>
          </div>
        ))}
    </div>
  );
}

export default SearchServicesMenu;
