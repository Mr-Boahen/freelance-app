import React, { useState } from "react";
import { scroll} from "framer-motion";



function NavBar() {
  const [scrollEvent, setScrollEvent] = useState(false);
  scroll(progress => console.log(progress))
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScrollEvent(true);
    } else {
      setScrollEvent(false);
    }
  });
  return (
    <div>
      <div
        style={
          scrollEvent
            ? { backgroundColor: "#ffff" }
            : { backgroundColor: "transparent" }
        }
        id="navBar"
        className="mx-auto w-[100%]  fixed z-40  bg-transparent text-white px-[8%] flex items-center py-10 text-xl"
      >
        <div className={`${scrollEvent ? "flex-[0.1]" : "flex-[0.6]"} -ml-3 `}>
          <img
            className="cursor-pointer"
            src={
              !scrollEvent
                ? `https://freelogopng.com/images/all_img/1656739841old-fiverr-logo-white.png`
                : `https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo.png`
            }
            width={120}
            alt=""
          />
        </div>
        {scrollEvent ? (
          <div className="flex-[0.5] mx-5 h-12 bg-white">
            <input
              placeholder="Search for any service"
              className="h-12 w-[60%] px-5 font-signika border-2 border-gray-300 rounded-lg   focus:w-[100%] transition-all duration-100 ease-in-out"
              type="text"
              name=""
              id=""
            />
          </div>
        ) : (
          ""
        )}
        <a
          href=""
          className={`flex-[0.2] font-[400] ${
            scrollEvent ? "text-black" : "text-white"
          } font-splinesans`}
        >
          Become a Seller
        </a>
        <a
          href=""
          className={`flex-[0.2] font-[400] ${
            scrollEvent ? "text-black" : "text-white"
          } font-splinesans`}
        >
          Sign In
        </a>
        <a
          href=""
          className={`flex-grow-0 hover:animate-none hover:bg-white hover:text-black ${
            scrollEvent ? "animate-none" : "animate-pulse"
          } pt-1 ${
            scrollEvent ? "text-black" : "text-blue-400"
          } font-mono font-bold text-lg border ${
            scrollEvent ? "border-blue-500" : "border-gray-500"
          } rounded-[5px] text-center w-20 h-10`}
        >
          Join
        </a>
      </div>
    </div>
  );
}

export default NavBar;
