import React from "react";
import LatestJobCards from "./LatestJobCards";

const demoJobs = [1, 2, 3, 4, 5, 6, 7, 8];
function LatestJobs() {
  return (
    <div className="mx-auto max-w-7xl ">
      <h1 className="md:text-4xl text-3xl  font-bold">
        <span className="text-red-900">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 p-2">
        {demoJobs.slice(0,6).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
