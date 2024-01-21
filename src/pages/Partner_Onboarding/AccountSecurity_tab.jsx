import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function AccountSecurity_tab() {
  return (
    <div>
      <div className="">
        <div className="w-[80%] mx-auto">
          <h1 className="text-4xl text-gray-600 font-[500] mb-5 mt-10 font-signika">
            Account Security
          </h1>
          <p className="text-gray-400 text-lg font-semibold font-sans w-[40%] mb-10">
            Trust and safety is a big deal in our community. Please verify your
            email and phone number so that we can keep your account secured.
          </p>
          <div className="h-[1px]  bg-gray-300" />{" "}
        </div>
      </div>
      <div className="mt-16 ">
        <div className="flex items-center justify-between mx-[10%] ">
          <div className="flex items-center gap-1">
            <EmailRoundedIcon fontSize="large" color="disabled" />
            <h1 className="text-[28px] text-gray-600 mb-1">Email <sup className="text-[20px] text-gray-400 italic">Private</sup> </h1>
          </div>

          <div className=" text-lg italic text-gray-600 cursor-default font-[500] h-14 border grid place-items-center bg-[#edfaf0] w-[200px]">
            {true ? "Verified" : "Unverified"}
          </div>
        </div>
      </div>

      <div className="mt-16 ">
        <div className="flex items-center justify-between mx-[10%] ">
          <div className="flex items-center gap-1">
            <LocalPhoneRoundedIcon fontSize="large" color="disabled" />
            <h1 className="text-[25px] text-gray-600 mb-1">Phone Number <sup className="italic text-gray-400">Private</sup> </h1>
          </div>
          <input 
            placeholder="Add Phone Number"
            className=" border-2 h-14 w-[200px] text-lg outline-[#00FFA9]  font-[500] px-3"
          />
        </div>
      </div>
      <div className="flex  w-[90%] justify-end mt-10 ">
      <button className="group flex justify-center items-center w-[200px] h-14 text-xl  font-[500]  rounded-lg border-4 bg-green-500 text-white  focus:bg-green-400 focus:border-green-400 hover:rounded-lg transition-all duration-200 ease-in-out">Finish <span className="mb-[2px] ml-1 group-hover:translate-x-2 transition-all duration-150 ease-in-out"><ArrowForwardRoundedIcon/></span> </button>
      </div>
    </div>
  );
}

export default AccountSecurity_tab;
