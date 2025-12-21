import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { useSelector } from "react-redux";

const isApplied = false;
function JobDescription() {
const {allJobs} =useSelector(store=>store.job)

  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <div className="my-10 border border-gray-200 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <Avatar>
              <AvatarImage
                className="h-20 w-20"
                src="https://yt3.googleusercontent.com/t6KE44Of184R3Qmq3M7xwiss0q-16LNaTwKxSIA0bx201gJu366fBBwbriT9uEJubGXj1n6O5g=s900-c-k-c0x00ffffff-no-rj"
              />
            </Avatar>
            <div className="items-center">
              <h1 className="text-xl font-bold ">Google</h1>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                Positions
              </Badge>
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                Remote
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                25LPA
              </Badge>
            </div>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900 cursor-pointer"
            }`}
          >
            {isApplied ? "Applied" : "Apply now"}
          </Button>
        </div>
        <div className="my-4 space-y-2">
          <h1 className="text-lg font-semibold my-2 ">Details</h1>
          <div>
            <h1 className="text-md font-semibold">Description</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              soluta, dolor placeat qui doloribus ipsa aspernatur molestias. Eos
              ipsam cum at saepe inventore aspernatur blanditiis fugiat ex.
              Consequatur itaque nobis quo sapiente nulla
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Role:</h1>Frontend
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Experience:</h1>12yr
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Salary:</h1>12Lpa
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Total Applicants:</h1>1200
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-semibold  space-y-2">Website</h1>
          <a className="  text-blue-600" href="#">
            WWW.GOOGLE.COM
          </a>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-semibold  space-y-2 ">Location</h1>
          <p>Indore</p>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
