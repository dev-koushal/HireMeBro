import React from "react";
import { Badge } from "./ui/badge";

function LatestJobCards() {
  return (
    <div className="p-5 rounded-md hover:shadow-xl shadow-lg md:shadow-sm bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.lor Lorem ipsum dolor sit.</p>
      </div>
      <div className="flex gap-2 mt-4 items-center">
        <Badge className="text-red-600 " variant="ghost">12 Positions</Badge>
        <Badge className="text-blue-900 " variant="ghost">part time</Badge>
        <Badge className="text-green-900" variant="ghost">6-7 lpa</Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
