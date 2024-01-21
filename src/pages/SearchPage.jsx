import React, { useEffect, useState } from "react";
import graphic from "../images/kata.jpg";
import programing from "../images/prog2.jpg"
import photo from "../images/photo1.jpg"
import video from "../images/video2.jpg"
import { useQuery } from "@tanstack/react-query";
import GigCard from "./HomeComponents/GigCard";
import { searchPartners } from "../services/users";

function SearchPage() {
  const gigType = window.location.pathname.split("/")[2];
  const name = window.location.pathname.split("/")[2].replace("_", " ");

  const { data: searchResults, isLoading } = useQuery({
    queryFn: () => searchPartners(name, gigType),
    queryKey: ["searchPartners"],
  });

  return (
    <div className="w-[80%] mx-auto ">
         {/* CONDITIONS FOR IMAGE */}
    {name=="graphics" && <img
        className="rounded-lg h-[240px] w-full object-cover my-10"
        src={graphic}
        alt=""
      />}
    {name=="programming" && <img
        className="rounded-lg h-[240px] w-full object-cover my-10"
        src={programing}
        alt=""
      />}
    {name=="photography" && <img
        className="rounded-lg h-[240px] w-full object-cover my-10"
        src={photo}
        alt=""
      />}
    {name=="animation" && <img
        className="rounded-lg h-[240px] w-full object-cover my-10"
        src={video}
        alt=""
      />}

      {/* CONDITIONS FOR TEXT */}

      {/* Graphics and Design */}

      {name=="graphics" && 
        <div className="absolute top-[250px] text-center left-[400px] text-white ">
          <h1 className="text-3xl font-[600] ">Graphics & Design</h1>
          <h1 className="text-xl font-splinesans">Designs to make you stand out</h1>
        </div>
      }
      {/*Programming and Tech*/}
      {name=="programming" && 
        <div className="absolute top-[250px] text-center left-[360px] text-white ">
          <h1 className="text-3xl font-[600] ">Programming & Tech</h1>
          <h1 className="text-xl font-splinesans">
            You think it. A programmer develops it.
          </h1>
        </div>
      }
      {/*Video & Animation*/}
      {name=="animation" && 
        <div className="absolute top-[250px] text-center left-[350px] text-white ">
          <h1 className="text-3xl font-[600] ">Video & Animation</h1>
          <h1 className="text-xl font-splinesans">
            Bring your story to life with creative videos.
          </h1>
        </div>
      }
      {/*Photography*/}
      {name=="photography" && 
        <div className="absolute top-[250px] text-center left-[400px] text-white ">
          <h1 className="text-3xl font-[600] ">Photography</h1>
          <h1 className="text-xl font-splinesans">
            Get the shot you need. Every time
          </h1>
        </div>
      }
      {/*Volunteering*/}
      {name=="volunteering" && 
        <div className="absolute top-[250px] text-center left-[400px] text-white ">
          <h1 className="text-3xl font-[600] ">Volunteering</h1>
          <h1 className="text-xl font-semib">
            Get the right people for you events
          </h1>
        </div>
      }

      <div className="my-8">
        <h1 className="text-3xl ">Results for <span className="italic font-semibold">{name} </span></h1>
      </div>

      <div className="w-full  h-full m flex flex-wrap gap-5 items-center justify-between">
        {searchResults?.data?.map((partner) => {
          return (
            <GigCard
              key={partner._id}
              avatar={partner.avatar}
              description={partner.description}
              name={partner.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
