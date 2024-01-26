import { Avatar, Skeleton } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import React, { useEffect, useState } from "react";
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

  return (
    <div className="relative flex w-[65%] px-10 border-2 rounded-lg mx-auto gap-10">
      {pendingSeller ? (
        <div>
          <div className="flex gap-2 mt-32">
            <Skeleton
              variant="circular"
              height={80}
              width={80}
              animation="wave"
              className=""
            />
            <Skeleton
              variant="rectangular"
              height={80}
              width={220}
              animation="wave"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-2 mt-5">
            <Skeleton
              variant="rectangular"
              height={80}
              width={150}
              animation="wave"
              className="rounded-lg"
            />
            <Skeleton
              variant="rectangular"
              height={80}
              width={150}
              animation="wave"
              className="rounded-lg"
            />
          </div>
          <Skeleton
            variant="rectangular"
            height={200}
            width={310}
            animation="wave"
            className="rounded-lg mt-5"
          />
        </div>
      ) : (
        <div className="w-[50%]  ">
          <h1 className="text-2xl font-splinesans mt-10 mb-10">About Seller</h1>
          <div className="flex w-[80%] pl-10 py-8 border-2 rounded-lg items-center gap-3  mb-10 ">
            <Avatar sx={{ width: "70px", height: "70px" }}></Avatar>
            <div className="font-splinesans text-lg ">
              <h1 className="font-splinesans text-xl">
                {sellerState?.sellerInfo?.name}
              </h1>
              <div className="font-splinesans text-gray-500 flex gap-1">
                {sellerState?.sellerInfo?.skills.map((skill, index) => {
                  return (
                    <h1 key={index}>
                      {skill} <span className="text-green-500">|</span>
                    </h1>
                  );
                })}
              </div>
              <div className="flex justify-between gap-3">
                <div className="flex items-center">
                  <StarRateRoundedIcon fontSize="small" />
                  <h1>6</h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-2 w-[80%] p-5 rounded-lg">
            <div className="flex gap-[30%] border-b py-5">
              <div>
                <h1 className="font-signika text-xl">From</h1>
                <h1 className="text-lg font-[500] text-gray-500">Uzbekistan</h1>
              </div>
              <div>
                <h1 className="font-signika text-xl">Member Since</h1>
                <h1 className="text-lg font-[500] text-gray-500">Feb 2014</h1>
              </div>
            </div>

            <div className="mt-5 font-splinesans font-[500] text-lg">
              {sellerState?.sellerInfo?.description}
            </div>
          </div>

          <div>
            <h1 className="text-4xl">Portfolio</h1>
          </div>
        </div>
      )}
      {pendingSeller ? (
        <div className="mt-[150px] ">
          <Skeleton
            variant="rectangular"
            height={100}
            width={150}
            animation="wave"
            className="rounded-md"
          />
          <Skeleton
            variant="rectangular"
            height={200}
            width={300}
            animation="wave"
            className="mt-2 rounded-md"
          />
          <Skeleton
            variant="rectangular"
            height={50}
            width={200}
            animation="wave"
            className="mt-2 ml-24 rounded-md"
          />
          <Skeleton
            variant="rectangular"
            height={50}
            width={292}
            animation="wave"
            className="mt-2 ml-1 rounded-md"
          />
        </div>
      ) : (
        <div className=" w-[450px]  border-2 rounded-lg px-5 py-2 h-fit mt-[110px] shadow-md  ">
          <h1 className="text-[100px] font-bold -mt-5 bg-transparent text-green-400">
            {" "}
            <span className="text-3xl font-jetbrains"> GHC </span>
            <span className="font-jetbrains">{sellerState?.sellerInfo?.basePrice}</span>
          </h1>
          <div>
            <h1 className="font-semibold text-lg">
              {sellerState?.sellerInfo?.gigDescription}
            </h1>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <div className="flex items-center">
              <AccessTimeIcon sx={{ fontSize: "18px" }} />
              <h1 className="font-semibold font-splinesans text-sm text-gray-500">
                {sellerState?.sellerInfo?.deliveryTime}
                {sellerState?.sellerInfo?.deliveryTime == 1
                  ? " Day "
                  : " Days "}
                Delivery
              </h1>
            </div>
            <div className="flex items-center">
              <RepeatRoundedIcon sx={{ fontSize: "20px" }} />
              <h1 className="font-semibold font-splinesans text-sm text-gray-500">
                {sellerState?.sellerInfo?.revisions}{" "}
                {sellerState?.sellerInfo?.revisions == "1"
                  ? " Revision "
                  : " Revisions "}
              </h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(submitPayment)}
            className=" bg-black rounded-[4px] my-5"
          >
            <div
              onClick={() => setShowPayment(!showPayment)}
              className="flex items-center justify-center my-5 gap-2 group rounded-[4px] bg-black h-10  text-white w-[100%] mx-auto"
            >
              <h1 className="text-xl bg-transparent group-active:mr-2 font-signika transition-all duration-100 ease-in-out">
                Hire
              </h1>
              <ArrowDownwardRoundedIcon sx={{ color: "#05ed5e" }} />
            </div>
            <AnimatePresence>
              {showPayment && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-black pl-8 py-3 rounded-[4px] h-fit -mt-5 "
                >
                  <label className="text-green-500 block font-signika text-lg">
                    Select Provider
                  </label>
                  <select
                    {...register("provider")}
                    className="text-white font-splinesans leading bg-black w-[90%] border  h-8 rounded-[4px] outline-none focus:border-green-500 "
                  >
                    <option value="mtn">MTN</option>
                    <option value="tgo">AirtelTigo</option>
                    <option value="vod">Vodafone</option>
                  </select>

                  <label className="text-green-500 block font-signika text-lg">
                    Momo number
                  </label>
                  <input
                    {...register("tel")}
                    type="tel"
                    className="h-8 p-1 font-splinesans  outline-none rounded-[3px] bg-black text-white border focus:border-green-500"
                  />

                  <button className=" group flex items-center justify-center gap-2 bg-[#07b042] h-10 rounded-sm w-[60%] my-2">
                    <h1 className="text-white bg-transparent text-lg font-signika group-active:mr-2 transition-all duration-100 ease-in-out">
                      Pay
                    </h1>
                    <AccountBalanceWalletRoundedIcon sx={{ color: "white" }} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      )}
    </div>
  );
}

export default SellerProfile;
