import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Person2Icon from "@mui/icons-material/Person2";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AccessTimeOutlined,
  SearchOutlined,
  TrendingUpRounded,
  ClearRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import LoginPage from "../LoginPage";
import { showActions } from "../../store/reducers/userReducers";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const showState = useSelector((state) => state.showLoginAndSignin);
  const userState = useSelector((state) => state.user);
  const [searchInput, setSearchInput] = useState("");
  const [showModalBg, setShowModalBg] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage?.getItem("recentSearches"))
  );

  const handleLogOut = () => {
    dispatch(logout());
  };

  //J A V A S C R I P T  F O R  T H E  S E A R C H  B A R
  // Handling DropDown
  document.addEventListener("click", function (event) {
    const avatar = document.querySelector(".avatar");
    if (avatar?.contains(event.target)) {
      setShowDropDown(!showDropDown);
    } else {
      setShowDropDown(false);
    }
  });

  // { Handling the onClick events  }
  document.addEventListener("click", function (event) {
    const searchbar = document.querySelector(".searchbar");
    const searchModal = document.querySelector(".searchModal");
    // Handling searchbar Focus
    if (
      searchbar?.contains(event.target) ||
      searchModal?.contains(event.target)
    ) {
      searchModal?.classList.remove("hidden");
      searchModal?.classList.add("block");
      setShowModalBg(true);
    } else if (!searchbar?.contains(event.target)) {
      searchModal?.classList.remove("block");
      searchModal?.classList.add("hidden");
      setShowModalBg(false);
    }
  });

  //REMOVES THE RECENT SEARCHES FROM THE LOCAL STORAGE
  const removeRecent = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches(null);
  };

  //SETS THE SEARCH INPUT INTO THE USESTATE
  const setRecentSearch = (e) => {
    setSearchInput(e.target.value);
  };

  //SENDS THE INPUT TO THE LOCAL STORAGE
  const handleSearchSubmit = (e) => {
    if (
      localStorage.getItem("recentSearches") &&
      searchInput !== "" &&
      searchInput !== " "
    ) {
      const search = JSON.parse(localStorage.getItem("recentSearches"));
      search?.search.unshift(searchInput);
      localStorage.setItem("recentSearches", JSON.stringify(search));
      setRecentSearches(JSON.parse(localStorage.getItem("recentSearches")));
      navigate(`/search/${searchInput.replace(" ", "_")}`);
      setSearchInput("");
    } else if (!localStorage.getItem("recentSearches")) {
      const search = { search: [searchInput] };
      localStorage.setItem("recentSearches", JSON.stringify(search));
      setRecentSearches(JSON.parse(localStorage.getItem("recentSearches")));
    }
  };

  return (
    <div className="relative  z-50  ">
      <div className=" h-fit md:h-[84px]   border-b-2 max-sm:bg-red-500 sm:bg-green-500 md:bg-blue-400 lg:bg-purple-500 xl:bg-amber-700  2xl:bg-yellow-500">
        <NavLink to="/home">
          <div>
            <h1 className="text-2xl text-green-400 text-center w-[30%] mx-auto my-5 block sm:hidden active:scale-x-[0.98] font-splinesans border-2 border-black p-1 rounded-md shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)]">
              Shadow
            </h1>
          </div>
        </NavLink>
        <div className="md:w-[90%] lg:w-[75%] m-5 pr-2 gap-3  h-full w-[70%] md:gap-5 lg:gap-10 mx-auto flex items-center justify-between ">
          <NavLink to="/home">
            <div>
              <h1 className="text-3xl font-splinesans text-green-600 hidden sm:block active:scale-x-[0.98]  border-2 border-black p-1 rounded-md shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)]">
                Shadow
              </h1>
            </div>
          </NavLink>

          <form
            onSubmit={handleSearchSubmit}
            className="w-[60%] max-w-[50%] lg:-mr-10   flex items-center rounded-lg "
          >
            <input
              ref={inputRef}
              value={searchInput}
              onChange={setRecentSearch}
              className=" searchbar  peer pl-5   h-[42px]  text-gray-600 font-splinesans border border-black w-[100%] rounded-lg  "
              type="text"
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="searchModal hidden bg-white z-40  absolute px-7 py-5  border w-[38%] top-[75px] rounded  mx-auto  h-[300px]"
              >
                <div className="flex flex-col gap-[50px]">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <AccessTimeOutlined
                          sx={{ fontSize: "18px", color: "gray" }}
                        />
                        <h1 className=" text-[13px] font-[800] font-splinesans text-gray-600 ">
                          RECENT SEARCHES
                        </h1>
                      </div>

                      <div className="group hover:text-gray-700 text-gray-500 flex items-center gap-1 cursor-pointer transition-all duration-150 ease-in-out">
                        <p
                          onClick={removeRecent}
                          className="group-hover:text-gray-700 font-[700] font-splinesans text-gray-500 transition-all duration-150 ease-in-out"
                        >
                          Clear
                        </p>
                      </div>
                    </div>
                    <div className=" ml-9">
                      {recentSearches?.search.slice(0, 3).map((search, index) =>
                        search == " " ? (
                          <p
                            key={index}
                            className="text-[16px] h-10 pt-2 cursor-pointer pl-2 rounded  hover:bg-gray-200 font-[500] text-gray-500 font-splinesans transition-all duration-300 ease-in-out"
                          >
                            ...
                          </p>
                        ) : (
                          <p
                            onClick={() => {
                              setSearchInput(search);
                            }}
                            className="text-[16px] h-10 pt-2 cursor-pointer pl-2 rounded  hover:bg-gray-200 font-[500] text-gray-500 font-splinesans transition-all duration-300 ease-in-out"
                            key={index}
                          >
                            {search}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <TrendingUpRounded sx={{ color: "gray" }} />
                      <h2 className=" text-[13px] font-[800] font-splinesans text-gray-600 ">
                        POPULAR RIGHT NOW
                      </h2>
                    </div>
                    <div>
                      <div className="cursor-pointer hover:text-[#4d4c4c] hover:bg-[#e0e0e0] ml-10 mt-2 text-[17px] text-[#6b6b6b] font-[500] rounded-xl text-center bg-[#e7e7e7] h-7 w-[130px] transition-all duration-150 ease-in-out">
                        video editing
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              {showModalBg ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className=" fixed left-0 top-[84px] h-[200vh] w-[100vw] bg-black "
                ></motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
            <button
              id="submitInput"
              className=" bg-[#222325] rounded-r w-[42px] -ml-5"
            >
              <SearchOutlined
                style={{
                  color: "white",
                  backgroundColor: "#222325",
                  height: "42px",
                  marginLeft: "8px",
                }}
              />
            </button>
          </form>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 ">
              <div className="flex font-splinesans items-center justify-center cursor-pointer active:scale-90 rounded-lg   transition-all duration-150 ease-in-out">
                <NotificationsNoneRoundedIcon
                  sx={{ fontSize: "25px", color: "black", cursor: "pointer" }}
                />
                <h1 className="mt-1">Notifications</h1>
              </div>
              <div className="flex font-splinesans items-center justify-center cursor-pointer active:scale-90 rounded-lg   transition-all duration-150 ease-in-out">
                <FavoriteBorderRoundedIcon
                  sx={{ fontSize: "25px", color: "black", cursor: "pointer" }}
                />
                <h1 className="mt-1">List</h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <Avatar
              src={
                "http://localhost:8000/uploads/" + userState?.userInfo?.avatar
              }
              sx={{
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
              className="avatar relative z-[100] lg:mr-[50px] active:scale-90"
            >
              <PersonIcon
                sx={{ color: "white", backgroundColor: "transparent" }}
              />
            </Avatar>
            <div className="absolute bg-transparent -top-[4px] -left-[4px] a shadow-[0px_5px_0px_-2px_rgba(0,0,0,1)]   border-2  border-black h-12 w-12 rounded-full"></div>

            <AnimatePresence>
              {showDropDown ? (
                <motion.div
                  initial={{ y: -50, scale: 0.5 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: -50, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="absolute shadow-[-8px_6px_0px_-2px_rgba(0,0,0,1)] p-2 -right-[30px] top-[50px] lg:right-[20px]   flex flex-col  justify-around lg:h-[100px] lg:w-[100px] rounded-lg border bg-white"
                >
                  <div className="flex items-center hover:bg-gray-200 rounded-md">
                    <Person2Icon
                      sx={{ color: "gray", backgroundColor: "transparent" }}
                    />
                    <div
                     onClick={()=>{
                      userState.userInfo?navigate("/profile"): dispatch(showActions.setShowLogin(true))
                     }}
                      to={userState.userInfo?"/profile":""}
                      className="w-24 font-splinesans cursor-pointer bg-transparent  p-1"
                    >
                      Profile
                    </div>
                  </div>
                  {userState.userInfo ? (
                    <div className="flex items-center hover:bg-gray-200 rounded-md">
                      <LogoutRoundedIcon
                        sx={{ color: "gray", backgroundColor: "transparent" }}
                      />
                      <h1
                        onClick={handleLogOut}
                        className="cursor-pointer font-splinesans  bg-transparent p-1 w-24 "
                      >
                        Logout
                      </h1>
                    </div>
                  ) : (
                    <div className="flex items-center hover:bg-gray-200 rounded-md ">
                      <LoginRoundedIcon
                        sx={{ color: "gray", backgroundColor: "transparent" }}
                      />
                      <h1
                        onClick={() => dispatch(showActions.setShowLogin(true))}
                        className="cursor-pointer font-splinesans bg-transparent   p-1 w-24 "
                      >
                        Login
                      </h1>
                    </div>
                  )}
                  <div className="flex font-splinesans items-center justify-center cursor-pointer active:scale-90 rounded-md hover:bg-gray-200 lg:hidden    transition-all duration-150 ease-in-out">
                <NotificationsNoneRoundedIcon
                  sx={{ fontSize: "25px",backgroundColor:"transparent", color: "gray", cursor: "pointer" }}
                />
                <h1 className="mt-1 ml-[3px] bg-transparent">Notifications</h1>
              </div>
              <div className="flex font-splinesans items-center  cursor-pointer active:scale-90 rounded-md hover:bg-gray-200 lg:hidden   transition-all duration-150 ease-in-out">
                <FavoriteBorderRoundedIcon
                  sx={{ fontSize: "25px", backgroundColor:"transparent", color: "gray", cursor: "pointer" }}
                />
                <h1 className="mt-1 bg-transparent ml-[3px]">List</h1>
              </div>

                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
