import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import { useSelector } from "react-redux";

function Jobs() {
  const {allJobs} = useSelector(store=>store.job); 
  return (
    <div>
      <Navbar />
      <div className=" max-w-full md:max-w-7xl mt-5 mx-auto">
        <div className="flex gap-5 ">
          <div className="hidden md:block w-0 md:w-[20%] border-2">
            <FilterCard />
          </div>

          {allJobs.length <= 0 ? (
            <span>Job not Found!!</span>
          ) : (
            <div className="flex-1 md:h-[88vh]  pb-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                {allJobs.map((job) => (
                  <div>
                    <Job key={job._id} job={job} />
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
