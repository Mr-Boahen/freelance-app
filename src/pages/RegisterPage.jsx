import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/users";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { showActions, userActions } from "../store/reducers/userReducers";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    if (userState.userInfo) {
      navigate("/home");
    }
  }, [userState.userInfo]);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ firstName, lastName, email, tel, password }) => {
      return signup({ firstName, lastName, email, tel, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      dispatch(showActions?.setShowSignin(false));
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
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { firstName, lastName, email, tel, password } = data;
    mutate({ firstName, lastName, email, tel, password });
  };

  const password = watch("password");
  return (
    <div>
     
      <div className={`fixed  z-[100] w-[100vw] h-[100vh] bg-black/10`}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className=" absolute z-[40] sm:left-[25%] sm:right-[25%] sm:top-[10%] top-[20%] right-[4px] bg-transparent    flex  flex-col  pl-20 mx-10 py-10 gap-5 items-center my-auto   rounded-md "
        >
          <div className="relative bg-white border border-black  h-[400px] w-[300px] sm:h-[500px] sm:w-[400px]  md:w-[450px] md:h-[650px]  backdrop-blur-md  rounded-lg flex flex-col gap-3 pl-5 py-5  sm:pl-10 sm:py-10 shadow-[-25px_15px_0px_8px_rgba(0,0,0,1)]">
            <div className=" flex flex-col min-w-[400px] bg-transparent">
              <div onClick={() => dispatch(showActions.setShowSignin(false))}>
                {" "}
                <CloseRoundedIcon
                  sx={{ fontSize: "35px", color: "black" }}
                  className="absolute top-[5px] right-[5px] bg-transparent cursor-pointer hover:scale-110 active:scale-75 "
                />
              </div>

              <label className="bg-transparent">
                <h1 className=" text-[28px] md:text-[40px] font-splinesans text-gray-600 bg-transparent ">
                  Create an
                  <span className="text-[#2a7e7a] sm:block bg-transparent"> Account</span>
                </h1>
              </label>
              <input
                {...register("firstName", {
                  minLength: {
                    value: 1,
                    message: "Name should be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="First Name"
                className={` p-3 md:p-5  ${
                  errors.firstName
                    ? "border-[3px] border-red-500 outline-none rounded-md"
                    : "border-2 outline-none rounded-md"
                } sm:h-4 h-5 w-[60%] sm:w-[80%] sm:text-md  md:text-lg font-splinesans`}
                type="text"
              />
              {errors.firstName?.message && (
                <p className="text-red-500 text-xs mt-1 bg-transparent">
                  {errors.firstName?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col min-w-[400px] bg-transparent">
              <input
                {...register("lastName", {
                  minLength: {
                    value: 1,
                    message: "Name should be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                })}
                placeholder="Last Name"
                className={`p-3  md:p-5  ${
                  errors.LastName
                    ? "border-[3px] border-red-500 outline-none rounded-md"
                    : "border-2 outline-none rounded-md"
                } sm:h-4 h-5 w-[60%] sm:w-[80%] sm:text-md  md:text-lg font-splinesans`}
                type="text"
              />
              {errors.lastName?.message && (
                <p className="text-red-500 text-xs mt-1 bg-transparent">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col min-w-[400px] bg-transparent">
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
                className={` md:p-5 p-3 sm:h-4 ${
                  errors.email
                    ? "border-[3px] border-red-500 outline-none rounded-md"
                    : "border-2 outline-none rounded-md"
                } h-5 w-[60%] sm:w-[80%] sm:text-md  md:text-lg font-splinesans`}
                type="email"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col min-w-[400px] bg-transparent">
              <input
                {...register("tel")}
                placeholder="Contact"
                className={`p-3 sm:h-4  md:p-5 border-2 outline-none h-5 w-[60%] sm:w-[80%] sm:text-md  md:text-lg font-splinesans rounded-md`}
                type="text"
              />
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
                className={`p-3 sm:h-4  md:p-5  ${
                  errors.password
                    ? "border-[3px] border-red-500 outline-none rounded-md"
                    : "border-2 outline-none rounded-md"
                } h-5 w-[60%] sm:w-[80%] sm:ext-md  md:text-lg font-splinesans`}
                type="password"
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col min-w-[400px] bg-transparent">
              <input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Password Confirmation is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Passwords do not match";
                    }
                  },
                })}
                placeholder="Password"
                className={` p-3 sm:h-4  md:p-5  ${
                  errors.confirmPassword
                    ? "border-[3px] border-red-500 outline-none rounded-md"
                    : "border-2 outline-none rounded-md"
                } h-5 w-[60%] sm:w-[80%]  sm:text-md md:text-lg font-splinesans`}
                type="password"
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <button
              disabled={!isValid || isLoading}
              className="disabled:cursor-not-allowed disabled:hover:text-white border border-black bg-white text-black text-lg font-splinesans w-[100px] mt-2  ml-2 h-10 rounded-lg   hover:bg-black hover:text-white   active:scale-105 transition-all duration-200 ease-in-out shadow-md  "
            >
              Register
            </button>
            <div className=" text-md font-splinesans text-center w-[250px] ">
              Already have an account?
              <span
                onClick={() => {
                  dispatch(showActions.setShowLogin(true));
                  dispatch(showActions.setShowSignin(false));
                }}
                className=" cursor-pointer  hover:underline transition-all duration-150 ease-in-out  text-[#2f948d] text-lg"
              >
                {" "}Login
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
