import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
function Jobs() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-full md:max-w-7xl mt-5 mx-auto">
        <div className="flex gap-5 ">
          <div className="w-[20%] border-2">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job not Found!!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
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
