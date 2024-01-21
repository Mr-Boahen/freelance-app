import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showActions, userActions } from "../store/reducers/userReducers";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../services/users";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const showState=useSelector((state)=>state.showLoginAndSignin)

  
  

  useEffect(() => {
    if (userState?.userInfo) {
      navigate("/home");
    }
  }, [userState?.userInfo]);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions?.setUserInfo(data));
      dispatch(showActions?.setShowLogin(false))
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <div>
      <div className={`fixed top-0 z-[100] w-[100vw] h-[100vh] bg-black/10`}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          action=""
          className=" absolute z-[40] left-[25%] right-[25%] top-[25%] bg-transparent   flex  flex-col  pl-20 mx-10 py-10 gap-5 items-center my-auto   rounded-md "
        >
          <div className="relative bg-white border border-black h-[470px] w-[450px] backdrop-blur-md  rounded-lg flex flex-col  pl-14 py-10 shadow-[-25px_15px_0px_8px_rgba(0,0,0,1)]">
            <div onClick={()=>dispatch(showActions.setShowLogin(false))}>
              {" "}
              <CloseRoundedIcon
                sx={{ fontSize: "35px", color: "black" }}
                className="absolute top-[5px] right-[5px] cursor-pointer hover:scale-110 active:scale-75 "
              />
            </div>
            <label>
              <h1 className="text-[50px] font-splinesans text-gray-600 ">
                Sign-in to your{" "}
                <span className="text-[#2a7e7a] block">Account</span>
              </h1>
            </label>

            <div className="flex flex-col  min-w-[400px] bg-transparent">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid Email address",
                  },
                })}
                placeholder="Email"
                className={`  p-5  ${
                  errors.email
                    ? "border-2 mt-5 rounded-lg  border-red-500 outline-none"
                    : "border-2 mt-5 rounded-lg  outline-none"
                } h-5 w-[80%] text-xl bg-white/50 backdrop-blur-md font-splinesans`}
                type="email"
              />
              {errors.email?.message && (
                <p className="text-black text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col min-w-[400px] bg-transparent">
              <input
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters",
                  },
                  required: {
                    value: true,
                    message: "Password in required",
                  },
                })}
                placeholder="Password"
                className={`  p-5  ${
                  errors.password
                    ? "border-2 mt-5 rounded-lg  border-red-500 outline-none "
                    : "border-2 mt-5 rounded-lg  outline-none"
                } h-5 w-[80%] text-xl text-black  bg-white/50 backdrop-blur-md font-splinesans`}
                type="password"
              />
              {errors.password?.message && (
                <p className="text-black text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="mr-16 text-lg text-black/50 font-splinesans mt-8 ml-2">
              Don't have an account?
              <span
                onClick={()=>{dispatch(showActions.setShowSignin(true))
                  dispatch(showActions.setShowLogin(false))}} 
                className=" relative cursor-pointer ml-1 hover:underline transition-all duration-150 ease-in-out  text-[#2f948d] text-large"
                
              >
                Register
              </span>{" "}
            </div>

            <button
              disabled={!isValid}
              className="disabled:cursor-not-allowed disabled:hover:text-white border border-black bg-white text-black text-lg font-splinesans w-[100px] h-10 rounded-lg  mr-[75px] ml-28 mt-2 hover:bg-black hover:text-white   active:scale-105 transition-all duration-200 ease-in-out shadow-md  "
            >
              Login
            </button>
          </div>
        </form> 
      </div>
    </div>
  );
}

export default LoginPage;
