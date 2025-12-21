import React from "react";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

function LatestJobCards({job}) {
  
  return (
    <div className="p-5 rounded-md hover:shadow-xl shadow-lg md:shadow-sm bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-600">{job.description}</p>
      </div>
      <div className="flex gap-2 mt-4 items-center">
        <Badge className="text-red-600 " variant="ghost">{job.position} Positions</Badge>
        <Badge className="text-blue-900 " variant="ghost">{job.jobType}</Badge>
        <Badge className="text-green-900" variant="ghost">{job.salary}LPA</Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
