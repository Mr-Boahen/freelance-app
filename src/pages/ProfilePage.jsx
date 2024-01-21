import { Avatar, Skeleton } from "@mui/material";
import React, { useRef, useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { updateProfile, updateProfilePicture } from "../services/users";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/reducers/userReducers";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
function ProfilePage() {
  const [showEdit, setShowEdit] = useState({
    name: false,
    description: false,
    skills: false,
    education: false,
    certification: false,
  });

  const [showGigDescription, setShowGigDescription] = useState(false);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const shortDescription =
    userState?.userInfo?.description?.slice(0, 150) + "...";

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      description,
      skill,
      certification,
      name,
      basePrice,
      deliveryTime,
      gigDescription,
      revisions,
      gigType,
    }) => {
      return updateProfile({
        description,
        skill,
        certification,
        name,
        basePrice,
        deliveryTime,
        gigDescription,
        revisions,
        gigType,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions?.setUserInfo(data));
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
      basePrice: userState?.userInfo?.basePrice,
      deliveryTime: userState?.userInfo?.deliveryTime,
      gigDescription: userState?.userInfo?.gigDescription,
      revisions: userState?.userInfo?.revisions,
      name: userState?.userInfo?.name,
      description: userState?.userInfo.description,
      skill: "",
      certification: "",
      gigType: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const {
      description,
      skill,
      certification,
      name,
      basePrice,
      deliveryTime,
      gigDescription,
      revisions,
      gigType,
    } = data;
    mutate({
      description,
      skill,
      certification,
      name,
      basePrice,
      deliveryTime,
      gigDescription,
      revisions,
      gigType,
    });
    setShowEdit(false);
    setShowGigDescription(false);
  };

  const myProfileInputRef = useRef(null);
  const chooseProfilePicture = () => {
    myProfileInputRef.current.click();
  };

  const { mutate: mutateFormData, isLoading: LoadingFormData } = useMutation({
    mutationFn: (formData) => {
      return updateProfilePicture(formData);
    },
    onSuccess: (data) => {
      dispatch(userActions?.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const submitProfilePicture = async () => {
    const formData = new FormData();
    var profilePicture = document.getElementById("imageInput");

    if (profilePicture.files.length > 0) {
      formData.append("profilePicture", profilePicture.files[0]);
      mutateFormData(formData);
    }
  };

  return (
    <div className="mt-20 h-[100%] w-[65%] mx-auto grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-4 overflow-hidden">
      {isPending ? (
        <div>
          <div className="flex flex-col items-center justify-center">
            <Skeleton
              variant="circular"
              height={140}
              width={140}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              width={200}
              animation="wave"
              className="mt-2 rounded-md"
            />
          </div>
          <div className="flex gap-10 mt-10">
            <Skeleton
              variant="rectangular"
              height={80}
              width={150}
              animation="wave"
              className="mt-2 rounded-md"
            />
            <Skeleton
              variant="rectangular"
              height={80}
              width={150}
              animation="wave"
              className="mt-2 rounded-md"
            />
          </div>
        </div>
      ) : (
        <div className="h-[400px] w-[100%] border col-span-1 shadow-lg">
          <div className="h-[100%] flex flex-col items-center py-10">
            <div className=" flex flex-col items-center gap-3">
              {userState?.userInfo?.avatar ? (
                <form
                  encType="multipart/form-data"
                  onClick={chooseProfilePicture}
                  id="profile-picture-form"
                  className=" relative"
                >
                  <input
                    accept="image/*"
                    onChange={submitProfilePicture}
                    ref={myProfileInputRef}
                    type="file"
                    name="profilePicture"
                    id="imageInput"
                    className="hidden  z-20 h-[150px] w-[150px] rounded-full bg-black "
                  />
                  <Avatar sx={{ width: "150px", height: "150px" }}>
                    <img
                      src={
                        "http://localhost:8000/uploads/" +
                        userState?.userInfo?.avatar
                      }
                      alt=""
                    />
                    <div className="group bg-green-500/0 hover:bg-black/50 absolute z-10 rounded-full h-[150px] w-[150px] grid place-items-center transition-all duration-150 ease-in-out ">
                      <CameraAltOutlinedIcon
                        className="opacity-0 group-hover:opacity-100 "
                        sx={{ fontSize: "50px", color: "white" }}
                      />
                    </div>
                  </Avatar>
                </form>
              ) : (
                <form
                  encType="multipart/form-data"
                  onClick={chooseProfilePicture}
                  id="profile-picture-form"
                  className=" relative"
                >
                  <input
                    accept="image/*"
                    onChange={submitProfilePicture}
                    ref={myProfileInputRef}
                    type="file"
                    id="imageInput"
                    className="hidden  z-20 h-[150px] w-[150px] rounded-full bg-black "
                  />
                  <Avatar sx={{ width: "150px", height: "150px" }}>
                    a
                    <div className="group bg-green-500/0 hover:bg-black/50 absolute z-10 rounded-full h-[150px] w-[150px] grid place-items-center transition-all duration-150 ease-in-out ">
                      <CameraAltOutlinedIcon
                        className="opacity-0 group-hover:opacity-100 "
                        sx={{ fontSize: "50px", color: "white" }}
                      />
                    </div>
                  </Avatar>
                </form>
              )}
              <h1 className="font-signika text-2xl">
                {userState?.userInfo?.name} {"   "}
                <span
                  onClick={() => {
                    setShowEdit({ ...showEdit, name: true });
                  }}
                  className="relative"
                >
                  <ModeEditOutlineOutlinedIcon
                    sx={{ color: "gray", cursor: "pointer" }}
                  />
                </span>
              </h1>
              {showEdit.name ? (
                <>
                  <div className="fixed z-50 top-0 bg-black/50 h-[105vh] w-[134vw] "></div>{" "}
                  <div>
                    <form
                      onSubmit={handleSubmit(submitHandler)}
                      className="absolute top-[35%]  left-[35%] z-[60] right-[35%] border bg-[#f4f4f4] px-10 p-20 "
                      noValidate
                    >
                      <h1 className="font-splinesans text-3xl">
                        Choose your display name.
                      </h1>
                      <h1 className="mt-2">
                        To help build credible and authentic connections with
                        customers, they’ll now see your display name.
                      </h1>
                      <h1 className="mt-8 mb-6">
                        We suggest using your first name and first initial of
                        your last name.
                      </h1>

                      <input
                        {...register("name")}
                        type="text"
                        name="name"
                        id=""
                        className="h-12 w-[100%] bg-[#f4f4f4] font-[500] text-gray-500 outline-none border pl-5 "
                      />
                      <div className="flex justify-end  gap-14  h-[70px] pt-5 ">
                        <div
                          onClick={() => {
                            setShowEdit({ ...showEdit, name: false });
                          }}
                          className="border hover:bg-gray-200 text-gray-500 font-[500] rounded text-lg px-6 py-1 h-10 transition-all duration-150 ease-in-out"
                        >
                          Cancel
                        </div>
                        <button className="border text-white hover:bg-green-500/90 bg-green-500 rounded font-[500] text-lg px-6 py-1 h-10  transition-all duration-150 ease-in-out">
                          Save display name
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className=" px-3 rounded-xl border font-[500]   border-green-400 absolute right-0 -top-5 ">
                Online
              </div>
            </div>
            <div className="border  h-[1px] mt-10 w-[80%]"></div>

            <div className=" w-[100%] py-10 px-5">
              <div className="flex justify-around items-center w-[100%]">
                <div className="flex items-center">
                  <LocationOnIcon sx={{ color: "#62646a" }} />
                  <h1 className="font-signika text-gray-500">From</h1>
                </div>
                <div className="font-[500]">KNUST</div>
              </div>
              <div className="flex justify-around items-center mt-2 w-[100%] pl-8">
                <div className="flex items-center">
                  <PersonIcon sx={{ color: "#62646a" }} />
                  <h1 className="font-signika text-gray-500">Member since</h1>
                </div>
                <div className="font-[500]">March 1957</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPending ? (
        <div className="flex flex-col gap-10">
          <div>
            <Skeleton
              variant="rectangular"
              width={200}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={120}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={200}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={200}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={200}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              className="mt-2 rounded-md"
            />
          </div>
         
        
        </div>
      ) : (
        <div className="flex flex-col gap-24  w-[100%] h-[88%] shadow-lg p-10 py-16 row-span-2 border ">
          <div className="border-b h-[25%]">
            <div className="flex justify-between">
              <label className="font-[500] font-signika text-lg">
                Personal Description
              </label>
              <h1
                onClick={() => {
                  setShowEdit({ ...showEdit, description: true });
                }}
                className="description font-[500] text-md text-blue-800 cursor-pointer"
              >
                Edit Description
              </h1>
            </div>

            {showEdit.description ? (
              <form
                onSubmit={handleSubmit(submitHandler)}
                className=" border bg-[#f4f4f4]"
                noValidate
              >
                <textarea
                  {...register("description", {
                    required: { value: false },
                    minLength: {
                      value: 150,
                      message: "Description should be atleast 150 characters",
                    },
                    maxLength: {
                      value: 600,
                      message: "Maximum number of characters reached",
                    },
                  })}
                  defaultValue={userState?.userInfo?.description}
                  maxLength="600"
                  minLength="150"
                  className="resize-none border m-3 outline-none p-3 font-[500] text-lg text-gray-500 w-[95%] h-[100px] bg-[#f4f4f4] "
                  name="description"
                  id=""
                ></textarea>
                <div className="h-[1px] w-[80%] mx-auto border"></div>
                <div className="flex justify-center gap-14   bg-[#f4f4f4] h-[70px] pt-4 ">
                  <div
                    onClick={() => {
                      setShowEdit({ ...showEdit, description: false });
                    }}
                    className="border hover:bg-gray-200 text-gray-500 font-[500] rounded text-lg px-6 py-1 h-10 transition-all duration-150 ease-in-out"
                  >
                    Cancel
                  </div>
                  <button
                    type="submit"
                    className="border text-white hover:bg-green-500/90 bg-green-500 rounded font-[500] text-lg px-6 py-1 h-10  transition-all duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <h1 className="mt-10 font-[500] font-splinesans text-gray-600 ">
                {shortDescription}
              </h1>
            )}
          </div>
          <div className="border-b  h-fit py-5 ">
            <div className="flex justify-between mb-3">
              <label className="font-[500] font-signika text-lg">Skills</label>
              <h1
                onClick={() => {
                  setShowEdit({ ...showEdit, skills: true });
                }}
                className="skills font-[500]  text-md text-blue-800 cursor-pointer"
              >
                Add New
              </h1>
            </div>
            {showEdit.skills ? (
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="border bg-[#f4f4f4] p-2 pl-10 pt-3 "
                noValidate
              >
                <input
                  {...register("skill")}
                  type="text"
                  name="skill"
                  id=""
                  className="h-12 w-[265px] bg-[#f4f4f4] font-[500] text-gray-500 outline-none border pl-5 "
                />
                <div className="h-[1px] border w-[80%]  mt-5 "></div>
                <div className="flex  gap-14  h-[70px] pt-5 ">
                  <div
                    onClick={() => {
                      setShowEdit({ ...showEdit, skills: false });
                    }}
                    className="border hover:bg-gray-200 text-gray-500 font-[500] rounded text-lg px-6 py-1 h-10 transition-all duration-150 ease-in-out"
                  >
                    Cancel
                  </div>
                  <button className="border text-white hover:bg-green-500/90 bg-green-500 rounded font-[500] text-lg px-6 py-1 h-10  transition-all duration-150 ease-in-out">
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-wrap gap-2">
                {userState?.userInfo?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="border rounded-md cursor-pointer text-gray-500 bg-gray-50 hover:bg-gray-100 w-fit h-8 mt-2  px-5 font-[500] font-splinesans transition-all duration-150 ease-in-out "
                  >
                    <h1>{skill}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b pb-5 ">
            <div className="flex justify-between">
              <label className="font-[500] font-signika text-lg">
                Certifications
              </label>
              <h1
                onClick={() => {
                  setShowEdit({ ...showEdit, certification: true });
                }}
                className="certification font-[500]  text-md text-blue-800 cursor-pointer"
              >
                Add New
              </h1>
            </div>
            {showEdit.certification ? (
              <form
                onSubmit={handleSubmit(submitHandler)}
                className=" border bg-[#f4f4f4]  p-2 pl-10 pt-3"
                noValidate
              >
                <input
                  {...register("certification")}
                  type="text"
                  name="certification"
                  id=""
                  className="h-12 w-[265px] bg-[#f4f4f4] font-[500] text-gray-500 outline-none border pl-5 "
                />
                <div className="h-[1px] border w-[80%]  mt-5 "></div>
                <div className="flex  gap-14  h-[70px] pt-5 ">
                  <div
                    onClick={() => {
                      setShowEdit({ ...showEdit, certification: false });
                    }}
                    className="border hover:bg-gray-200 text-gray-500 font-[500] rounded text-lg px-6 py-1 h-10 transition-all duration-150 ease-in-out"
                  >
                    Cancel
                  </div>
                  <button className="border text-white hover:bg-green-500/90 bg-green-500 rounded font-[500] text-lg px-6 py-1 h-10  transition-all duration-150 ease-in-out">
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-wrap gap-2">
                {userState?.userInfo?.certifications?.map(
                  (certificate, index) => (
                    <div
                      key={index}
                      className="border rounded-md cursor-pointer text-gray-500 bg-gray-50 hover:bg-gray-100 w-fit h-8 mt-2  px-5 font-[500] font-splinesans transition-all duration-150 ease-in-out "
                    >
                      <h1>{certificate}</h1>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {isPending ? (
        <div>
          <div className="mt-10">
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              className="mt-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              className="rounded-sm"
            />
            <Skeleton
              variant="rectangular"
              height={30}
              className="mt-2 rounded-md"
            />
          </div>
        </div>
      ) : (
        <div className="px-32 pb-10 h-fit w-[100%] border shadow-lg ">
          <form onBlur={handleSubmit(submitHandler)} className="flex flex-col">
            <label className="text-lg text-gray-500 font-semibold">
              Base price
            </label>
            <input
              {...register("basePrice")}
              min={0}
              type="number"
              placeholder="Enter base price"
              className="border-2 rounded focus:border-gray-500 my-1  p-2  h-10 font-splinesans text-lg outline-none transition-all duration-150 ease-in-out "
            />
          </form>
          <form onBlur={handleSubmit(submitHandler)} className="flex flex-col">
            <label className="text-lg text-gray-500 font-semibold ">
              Delivery time
            </label>
            <input
              {...register("deliveryTime")}
              type="number"
              min={1}
              placeholder="Days"
              className="border-2 rounded focus:border-gray-500 my-1  p-2  h-10 font-splinesans text-lg outline-none transition-all duration-150 ease-in-out "
            />
          </form>

          <form onBlur={handleSubmit(submitHandler)} className="flex flex-col">
            <label className="text-lg text-gray-500 font-semibold ">
              Revisions
            </label>
            <select
              {...register("revisions")}
              className="border-2 rounded focus:border-gray-500 my-1  p-2  h-10 font-splinesans text-lg outline-none transition-all duration-150 ease-in-out "
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>Unlimited</option>
            </select>
          </form>
          <form onBlur={handleSubmit(submitHandler)} className="flex flex-col">
            <label className="text-lg text-gray-500 font-semibold ">
              Gig type
            </label>
            <select
              {...register("gigType")}
              className="border-2 rounded focus:border-gray-500 my-1  p-2  h-10 font-splinesans text-lg outline-none transition-all duration-150 ease-in-out "
            >
              <option>Graphics & Design</option>
              <option>Office Maintenance</option>
              <option>Photography</option>
              <option>Office Maintenance</option>
              <option>Video Editting & Animation</option>
              <option>Volunteering</option>
            </select>
          </form>
          <div className="flex flex-col">
            <label className="block text-lg text-gray-500 font-semibold">
              Gig description
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowGigDescription(true);
              }}
              className="block mt-1 h-10 border outline-green-400 text-md p-2 rounde font-semibold text-green-500"
            >
              Add Gig description
            </button>
          </div>
          {showGigDescription ? (
            <>
              {" "}
              <div className="fixed  z-[70] left-0 top-0 bg-black/50 h-[105vh] w-[134vw] "></div>{" "}
              <div>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="absolute top-[25%]   left-[35%] z-[80] right-[35%] border bg-[#f4f4f4] px-10 p-20 "
                >
                  <h1 className="font-splinesans text-3xl">
                    Choose a Gig description
                  </h1>
                  <h1 className="mt-2">
                    To help build credible and authentic connections with
                    customers, they’ll now see your Gig description
                  </h1>
                  <h1 className="mt-8 mb-6">
                    We suggest using your first name and first initial of your
                    last name.
                  </h1>

                  <textarea
                    {...register("gigDescription")}
                    type="text"
                    name="gigDescription"
                    id=""
                    className="h-32 w-[100%] bg-[#f4f4f4] font-[500] text-gray-500 outline-none border p-5 "
                  ></textarea>
                  <div className="flex justify-end  gap-14  h-[70px] pt-5 ">
                    <div
                      onClick={() => {
                        setShowGigDescription(false);
                      }}
                      className="border hover:bg-gray-200 text-gray-500 font-[500] rounded text-lg px-6 py-1 h-10 transition-all duration-150 ease-in-out"
                    >
                      Cancel
                    </div>
                    <button className="border text-white hover:bg-green-500/90 bg-green-500 rounded font-[500] text-lg px-6 py-1 h-10  transition-all duration-150 ease-in-out">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
