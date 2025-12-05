import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
function Jobs() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-full md:max-w-7xl mt-5 mx-auto">
        <div className="flex gap-5 ">
          <div className="hidden md:block w-0 md:w-[20%] border-2">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job not Found!!</span>
          ) : (
            <div className="flex-1 md:h-[88vh]  pb-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                {jobsArray.map((item, index) => (
                  <div>
                    <Job key={index} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
