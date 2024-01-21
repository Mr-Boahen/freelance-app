import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { NavLink } from "react-router-dom";

function ProfessionalInfo_tab() {
  return (
    <div>
      <div className="">
        <div className="w-[80%] mx-auto">
          <h1 className="text-4xl text-gray-600 font-[500] mb-5 mt-10 font-signika">
            Professional Info
          </h1>
          <p className="text-gray-400 text-lg font-semibold font-sans w-[40%] mb-10">
            This is your time to shine. Let potential buyers know what you do
            best and how you gained your skills, certifications and experience.
          </p>
          <div className="h-[1px]  bg-gray-300" />{" "}
        </div>
      </div>

      <form
        action=""
        className="flex w-[80%] mx-auto flex-col items-stretch gap-40 my-24"
      >
        {/* INPUT FOR FULL NAME */}
        <div className="flex justify-between ">
          <label className="text-[23px] shrink-0 flex-[0.3] font-semibold text-slate-600">
            Skills <sup className="text-[23px] text-red-600">*</sup>
          </label>
          <div className="relative ml-16 flex items-center flex-[0.7] gap-4 ">
            <input
              autoFocus={true}
              placeholder="Add Skills"
              className="relative z-10 border-2 h-14 w-[35%] text-lg outline-[#00FFA9]  font-[500] px-10 "
            />
            <input
              placeholder="Experience Level"
              className="relative z-10 border-2 h-14 w-[35%] text-lg outline-[#00FFA9]  font-[500] px-8"
            />
            <div className="relative z-10 flex gap-2">
              <button className=" w-24 h-[52px] bg-[#f0f0f0] text-[#bfc0c3] border border-[#d4d3d3] text-lg rounded-[4px] ">
                Cancel
              </button>
              <button className=" w-24 h-[52px] bg-[#dddddd] text-[#999999] font-[500] text-lg rounded-[4px] ">
                Add
              </button>
            </div>

            <div className="h-[70px] w-[100%] absolute -left-12 -bottom-[7px] border-[2px] rounded-lg z-0"></div>
          </div>
        </div>

        {/* EDUCATION INPUT */}
        <div className="flex gap-[11%] justify-between w-[80%]">
          <label className="text-[23px] flex-[0.3] font-semibold text-slate-600">
            Education
          </label>
          <div className="flex-[0.7]">
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2">
                <input type="text" className="border h-14 p-3 text-lg font-[500] col-span-2 rounded-sm outline-green-400" placeholder="College/University Name"  />
                <input type="text" className="border h-14 p-3 text-lg font-[500] rounded-sm outline-green-400 " placeholder="Major"  />
                <input type="text" className="border h-14 p-3 text-lg font-[500] rounded-sm outline-green-400 text-center" placeholder="Year"  />
              </div>
            </div>
          </div>
        </div>
        {/* CERTIFICATION INPUT */}
        <div className="flex justify-between">
          <label className="text-[23px] flex-[0.3] font-semibold text-slate-600">
            Certification
          </label>
          <div className="flex-[0.7] ">
           <div className="flex gap-2">
           <input
              placeholder="Certificate/Award"
              className="border-2 h-14 w-96 text-lg outline-[#00FFA9] font-[500] px-10"
            />{" "}
            <input
              placeholder="Certified from (eg.KNUST)"
              className="border-2 h-14 w-96 text-lg outline-[#00FFA9] font-[500] px-10"
            />{" "}
           </div>
          </div>
        </div>

        <NavLink  to="/partner_onboarding/account_security" className="group flex justify-center items-center w-[20%] h-14 text-xl text-green-500 font-[500]  border-green-300 border-4 hover:bg-green-500 hover:text-white hover:border-green-500 focus:bg-green-400 focus:border-green-400 hover:rounded-lg transition-all duration-200 ease-in-out">
          Continue{" "}
          <span className="mb-[2px] ml-1 group-hover:translate-x-2 transition-all duration-150 ease-in-out">
            <ArrowForwardRoundedIcon />
          </span>{" "}
        </NavLink>
      </form>
    </div>
  );
}

export default ProfessionalInfo_tab;
