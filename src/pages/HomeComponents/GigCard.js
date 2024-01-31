import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { color } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showActions } from "../../store/reducers/userReducers";



function GigCard({
  thumbnail,
  avatar,
  name,
  description,
  startingPrice,
  rating,
}) {
  

  
  const shortDescription = description.slice(0, 80) + "...";
  const sellerState = useSelector((state) => state.seller);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  return (
    <div
      onClick={() =>userState.userInfo? navigate(`/profile/${userState.userInfo._id}`):dispatch(showActions.setShowLogin(true)) }
      className="bg-white  mt-12 hover:bg-gray-100/70 transition-all duration-100 ease-in-out"
    >
      <div className="relative active:scale-90 shadow-xl  transition-all duration-150 ease-in border-2 w-[250px] h-[360px] rounded-lg p-2">
        {/* //T H U M B N A I L */}
        <img
          src={"http://localhost:8000/uploads/" + avatar}
          className="aspect-video  object-cover rounded cursor-pointer "
        />
        {/* // PROFILE PICTURE AND NAME*/}
        <div className="flex gap-2 items-center my-4  rounded p-1 cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out">
          <img
            src={"http://localhost:8000/uploads/" + avatar}
            className="aspect-square object-cover rounded-full h-10 w-10 border-4 p-[1px] cursor-pointer"
          />
          <h1 className="font-splinesans cursor-pointer">{name}</h1>
        </div>
        <div className=" font-splinesans border overflow-hidden rounded p-1 cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out">
          <h1 className="text-gray-500 text-sm">{shortDescription}</h1>
        </div>
        <div className="flex items-center mt-3 absolute bottom-7">
          <StarRateRoundedIcon sx={{ color: "#2a2b2b", cursor: "pointer" }} />
          <h1 className="cursor-pointer font-splinesans mt-1">5</h1>
        </div>
        <div className="cursor-pointer absolute bottom-2 text-green-500">
          <h1 className="font-splinesans  text-sm ">
            From <span className="font-[600]">GHC {startingPrice}</span>
          </h1>
        </div>
        
      </div>
    </div>
  );
}

export default GigCard;
