import React, { useEffect, useState } from "react";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { NavLink } from "react-router-dom";
function FirstPersonalInfo_tab() {
 
  return (
    <div>
      <div className="">
        <div className="w-[80%] mx-auto">
          <h1 className="text-4xl text-gray-600 font-[500] mb-5 mt-10 font-signika">
            Personal Info
          </h1>
          <p className="text-gray-400 text-lg font-semibold font-sans w-[40%] mb-10">
            Tell us a bit about yourself. This information will appear on your
            public profile, so that potential buyers can get to know you better.
          </p>
          <div className="h-[1px]  bg-gray-300" />{" "}
        </div>
      </div>

      <div>
        <form
          action=""
          className="flex w-[80%] mx-auto flex-col items-stretch gap-40 my-24"
        >
          {/* INPUT FOR FULL NAME */}
          <div className="flex justify-between ">
            <label className="text-[23px] shrink-0 flex-[0.3] font-semibold text-slate-600">
              Full Name <sup className="text-[23px] text-red-600">*</sup>
            </label>
            <div className="flex flex-[0.7] gap-4">
              <input
                autoFocus={true}
                placeholder="First Name"
                className="border-2 h-14 w-[35%] text-lg outline-[#00FFA9]  font-[500] px-10 "
              />
              <input
                placeholder="Last Name"
                className="border-2 h-14 w-[35%] text-lg outline-[#00FFA9]  font-[500] px-10"
              />
            </div>
          </div>
          {/* INPUT FOR DISPLAY NAME */}
          <div className="flex justify-between ">
            <label className=" flex-[0.3] text-[23px] font-semibold text-slate-600">
              Display Name <sup className="text-[23px] text-red-600">*</sup>
            </label>
            <div className="flex flex-[0.7]">
              <input
                placeholder="Type your display name"
                className="border-2 h-14 w-96 text-lg outline-[#00FFA9]  font-[500] px-10"
              />
            </div>
          </div>
          {/* PROFILE PICTURE INPUT */}
          <div className="flex">
            <label className="flex-[0.3] text-[23px] font-semibold text-slate-600">
              Profile Picture <sup className="text-[23px] text-red-600">*</sup>
            </label>
            <div className="flex-[0.7]">
              <input type="file" />
            </div>
          </div>
          {/* DESCRIPTION INPUT */}
          <div className="flex justify-between">
            <label className="text-[23px] flex-[0.3] font-semibold text-slate-600">
              Description <sup className="text-[23px] text-red-600">*</sup>
            </label>
            <div className="flex-[0.7]">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Share a bit about your work experience, cool projects you've completed, and you area of expertise."
                className="border-2 pt-3 w-[80%] h-44 text-lg outline-[#00FFA9]  font-[500] px-10"
              ></textarea>
            </div>
          </div>
          {/* LANGUAGES INPUT */}
          <div className="flex justify-between">
            <label className="text-[23px] flex-[0.3] font-semibold text-slate-600">
              Languages <sup className="text-[23px] text-red-600">*</sup>
            </label>
            <div className="flex-[0.7]">
              <input
                placeholder="Language"
                className="border-2 h-14 w-96 text-lg outline-[#00FFA9] font-[500] px-10"
              />{" "}
            </div>
          </div>

          <NavLink to="/partner_onboarding/professional_info" className="group flex justify-center items-center w-[20%] h-14 text-xl text-green-500 font-[500]  border-green-300 border-4 hover:bg-green-500 hover:text-white hover:border-green-500 focus:bg-green-400 focus:border-green-400 hover:rounded-lg transition-all duration-200 ease-in-out">Continue <span className="mb-[2px] ml-1 group-hover:translate-x-2 transition-all duration-150 ease-in-out"><ArrowForwardRoundedIcon/></span> </NavLink>
        </form>
      </div>
    </div>
  );
}

export default FirstPersonalInfo_tab;
