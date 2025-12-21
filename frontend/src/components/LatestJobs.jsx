import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";


function LatestJobs() {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div className="mx-auto max-w-7xl ">
      <h1 className="md:text-4xl text-3xl  font-bold">
        <span className="text-red-900">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 p-2">
        {
        allJobs.length <= 0 ?<span>No job available</span>: allJobs.slice(0,6).map((job) => (
          <LatestJobCards key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
