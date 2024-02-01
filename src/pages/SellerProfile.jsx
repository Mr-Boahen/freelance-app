import { Avatar, Skeleton } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getSeller, payPartner } from "../services/users";
import { useDispatch, useSelector } from "react-redux";
import { sellerActions, userActions } from "../store/reducers/userReducers";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";

function SellerProfile() {
  const dispatch = useDispatch();
  const [showPayment, setShowPayment] = useState(false);
  const sellerState = useSelector((state) => state.seller);
  const userState = useSelector((state) => state.user);
  console.log();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      provider: "",
      tel: userState.userInfo.tel,
    },
    mode: "onChange",
  });

  const _id = window.location.pathname.split("/")[2];

  const { mutate: mutateSeller, isPending: pendingSeller } = useMutation({
    mutationFn: (_id) => {
      return getSeller(_id);
    },
    onSuccess: (data) => {
      dispatch(sellerActions?.setSellerInfo(data.data[0]));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { mutate: mutatePayment, isPending: pendingPayment } = useMutation({
    mutationFn: ({ provider, tel }) => {
      return payPartner({ provider, tel }, _id);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const submitPayment = (data) => {
    const { provider, tel } = data;
    mutatePayment({ provider, tel });
  };

  useEffect(() => {
    mutateSeller(_id);
  }, []);
  //Every feature of the PayScrolling
  const payScrollRef = useRef();

  const preventWheel = () => {
    setTimeout(() => {
      payScrollRef.current.classList.remove("overflow-y-scroll");
      payScrollRef.current.classList.add("overflow-y-hidden");
    }, 400);
  };

  const allowWheel = () => {
    payScrollRef.current.classList.remove("overflow-y-hidden");
    payScrollRef.current.classList.add("overflow-y-scroll");
  };

  const scrollOnPay = () => {
    payScrollRef.current.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative  flex flex-col items-center xl:items-start   xl:flex-row w-[58%] px-10 pb-10 border-none xl:border-2 rounded-lg mx-auto gap-5 xl:gap-10">
      {pendingSeller ? (
        <div>
          <div className="mt-[110px] flex flex-col gap-2">
            <Skeleton
              variant="rectangular"
              height={120}
              width={400}
              animation="wave"
              className="rounded-lg"
            />
            <Skeleton
              variant="rectangular"
              height={500}
              width={400}
              animation="wave"
              className="rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="  ">
          <h1 className="text-2xl font-splinesans mt-16 mb-5">About Seller</h1>
          <div className="flex min-w-[400px] max-w-[350px] md:min-w-[460px] md:max-w-[460px] pl-5 pr-10 py-8 border-2 rounded-lg items-center gap-3  mb-5 ">
            <Avatar sx={{ width: "70px", height: "70px" }}></Avatar>
            <div className="font-splinesans text-lg ">
              <h1 className="font-splinesans  md:text-xl">
                {sellerState?.sellerInfo?.name}
              </h1>
              <div className="font-splinesans text-sm text-gray-500 flex gap-1">
                {sellerState?.sellerInfo?.skills.map((skill, index) => {
                  return (
                    <h1 key={index}>
                      {skill} <span className="text-green-500">|</span>
                    </h1>
                  );
                })}
              </div>
              <div className="flex justify-between gap-3 ">
                <div className="flex items-center text-md">
                  <StarRateRoundedIcon fontSize="small" />
                  <h1>6</h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-2 w-fit md:min-w-[460px] md:max-w-[460px] p-5 rounded-lg">
            <div className="flex gap-[30%] border-b py-5">
              <div>
                <h1 className="font-signika xl:text-xl">From</h1>
                <h1 className="xl:text-lg font-[500] text-gray-500">
                  Uzbekistan
                </h1>
              </div>
              <div>
                <h1 className="font-signika xl:text-xl">Member Since</h1>
                <h1 className="xl:text-lg font-[500] text-gray-500">
                  Feb 2014
                </h1>
              </div>
            </div>

            <div className="mt-5 font-splinesans font-[500] ">
              {sellerState?.sellerInfo?.description}
            </div>
          </div>
        </div>
      )}
      {pendingSeller ? (
        <div className="mt-[115px] flex flex-col gap-8 ">
          <Skeleton
            variant="rectangular"
            height={400}
            width={450}
            animation="wave"
            className="rounded-lg"
          />

          <Skeleton
            variant="rectangular"
            height={160}
            width={450}
            animation="wave"
            className="rounded-lg"
          />
        </div>
      ) : (
        <div className="bg-transparent flex flex-col ">
          <div
            ref={payScrollRef}
            className="pay-scroll overflow-y-hidden scrollbar-hide  min-w-[400px] mx-auto xl:w-[460px]   border-2 rounded-lg px-5 py-2 h-[410px] xl:mt-[110px] shadow-md  "
          >
            <div className="bg-transparent ">
              <h1 className="text-[100px] font-bold -mt-5 bg-transparent text-green-400">
                {" "}
                <span className="text-3xl font-jetbrains"> GHC </span>
                <span className=" bg-transparent">
                  {sellerState?.sellerInfo?.basePrice}
                </span>
              </h1>
              <div>
                <h1 className="font-splinesans font-[500] text-md">
                  {sellerState?.sellerInfo?.gigDescription}
                </h1>
              </div>

              <div className="flex justify-start gap-3 mt-1">
                <div className="flex items-center">
                  <h1 className="font-semibold font-splinesans text-sm text-gray-500">
                    {sellerState?.sellerInfo?.deliveryTime}
                    {sellerState?.sellerInfo?.deliveryTime == 1
                      ? " Day "
                      : " Days "}
                    Delivery
                  </h1>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold font-splinesans text-sm text-gray-500">
                    {sellerState?.sellerInfo?.revisions}{" "}
                    {sellerState?.sellerInfo?.revisions == "1"
                      ? " Revision "
                      : " Revisions "}
                  </h1>
                </div>
              </div>
              <div
                onSubmit={handleSubmit(submitPayment)}
                className=" bg-black rounded-[4px] my-5"
              >
                <div
                  onClick={() => scrollOnPay()}
                  onMouseEnter={allowWheel}
                  onMouseLeave={preventWheel}
                  className="flex cursor-pointer items-center justify-center  gap-2 group rounded-[4px] bg-green-400 h-10  text-white w-[100%] mx-auto"
                >
                  <h1 className="text-xl  bg-transparent  font-signika transition-all duration-100 ease-in-out">
                    Hire
                  </h1>
                  <div className="bg-transparent group-active:translate-y-2 transition-all duration-100 ease-in-out">
                  <ArrowDownwardRoundedIcon sx={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-[415px] mt-28 ">
              <div className=" flex flex-col gap-4  pl-8 py-3 rounded-[4px] h-fit mt-52 ">
                <div className="relative">
                  <select
                    {...register("provider")}
                    className="text-black font-splinesans w-[90%] px-5 border  h-14 rounded-[4px] outline-none focus:border-green-500 "
                  >
                    <option value="mtn">MTN</option>
                    <option value="tgo">AirtelTigo</option>
                    <option value="vod">Vodafone</option>
                  </select>
                  <div className="absolute -top-2 left-3">
                    <h1 className="text-sm font-splinesans text-gray-400 ">
                      Service Provider
                    </h1>
                  </div>
                </div>

                <div className="relative">
                  <input
                    {...register("tel")}
                    type="tel"
                    placeholder="Mobile money number"
                    className="h-14 w-[90%] p-1 px-5 font-splinesans  outline-none rounded-[3px]  text-black border focus:border-green-500"
                  />
                  <div className="absolute -top-2 left-3">
                    <h1 className="text-sm font-splinesans text-gray-400 ">
                      Momo number
                    </h1>
                  </div>
                </div>
                <button className=" group flex items-center justify-center gap-2  bg-green-400 h-10 rounded-sm w-[90%] mt-1">
                  <h1 className="text-white bg-transparent text-lg font-signika group-active:mr-2 transition-all duration-100 ease-in-out">
                    Pay
                  </h1>
                  <AccountBalanceWalletRoundedIcon sx={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[180px]   my-5 border-2 rounded-lg ">
            <h1 className="text-4xl bg-transparent text-white">Portfolio</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellerProfile;
