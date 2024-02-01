import React from "react";
import GigCard from "./GigCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPartners, getSeller } from "../../services/users";
import { Skeleton } from "@mui/material";
import { SpinnerCircular } from "spinners-react";

function HomeBody() {
  const { data: allPartners, isLoading } = useQuery({
    queryFn: () => getAllPartners(),
    queryKey: ["allPartners"],
  });
  


  return (
   <div>
     <div className="border-2 flex 2xl:mt-5 md:mt-5  pb-12  rounded-md  w-[75%] min-h-fit  mx-auto">
      {isLoading ? (
        <>
          {" "}
          <div className="w-[75%] m-5  h-full mx-auto flex flex-wrap gap-5  items-center ">
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2"
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width={260}
                height={150}
                animation="wave"
                className="rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={50}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={260}
                height={70}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                animation="wave"
                className="mt-2 rounded-md"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="bg-transparent w-[80%] mx-auto pl-5 md:pl-0  flex flex-wrap gap-5  items-center ">
          {allPartners?.data?.map((partner) => {
            return (
              <GigCard
                
                key={partner._id}
                avatar={partner.avatar}
                description={partner.description}
                name={partner.name}
                startingPrice={partner.basePrice}
              />
            );
          })}
        </div>
      )}
    </div>


    <div className="w-[75%] h-[27vh] font-signika flex justify-center items-end mx-auto ">
      <div className="flex flex-col items-center">
        <h1> <span>©</span> <span>2024</span> Mr_Kaakyire. <span>All rights reserved.</span></h1>
        <h1>version 2024.0</h1>
      </div>

    </div>
   </div>
  );
}

export default HomeBody;
