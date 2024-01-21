import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function PartnerOnboardingLayout() {

  const [active, setActive] = useState(false);

  useEffect(() => {
   const activeLink=document.querySelector(".active");
   
    
  }, []);

  return (
    <div>

      <div className=" flex ml-10 h-20 mb-5 ">
        <img
          src="https://logowik.com/content/uploads/images/fiverr-new3326.jpg"
          alt="logo"
          className="h-[100px] w-42"
        />
      </div>
      <div className="h-[1px]  bg-gray-300" />

      <div className="flex items-center gap-[45%]  justify-center my-5 px-10">
        <div className="flex shrink-0 gap-5">
          <NavLink to="/partner_onboarding/personal_info" className="flex gap-1 items-center justify-center cursor-pointer">
            <div className={`border w-8 h-8 grid place-items-center rounded-full  bg-yellow-400  text-white text-lg font-splinesans font-[900]`}>
              1
            </div>
            <div className="text-gray-400 text-lg font-[500]">
              Personal Info{" "}
            </div>
            <ArrowForwardIosIcon
              style={{
                height: "15px",
                width: "15px",
                color: "rgb(128, 128, 128)",
              }}
            />
          </NavLink>
          <NavLink to="/partner_onboarding/professional_info" className="flex gap-1 items-center justify-center cursor-pointer">
            <div className="border w-8 h-8 grid place-items-center rounded-full bg-yellow-400 text-white text-lg font-splinesans font-[900]">
              2
            </div>
            <div className="text-gray-400 text-lg font-[500]">
              Personal Info{" "}
            </div>
            <ArrowForwardIosIcon
              style={{
                height: "15px",
                width: "15px",
                color: "rgb(128, 128, 128)",
              }}
            />
          </NavLink>
          <NavLink to="/partner_onboarding/account_security" className="flex gap-1 items-center justify-center cursor-pointer">
            <div className="border w-8 h-8 grid place-items-center rounded-full bg-yellow-400 text-white text-lg font-splinesans font-[900]">
              3
            </div>
            <div className="text-gray-400 text-lg font-[500]">
              Account Security{" "}
            </div>
            <ArrowForwardIosIcon
              style={{
                height: "15px",
                width: "15px",
                color: "rgb(128, 128, 128)",
              }}
            />
          </NavLink>
        </div>
        <div className="h-[10px] shrink-0 w-40 rounded-lg bg-[#C8A2C8]" />
      </div>
      <div className="h-[1px] w-[80%] mx-auto  bg-gray-300" />
     
      <Outlet />
    </div>
  );
}

export default PartnerOnboardingLayout;
