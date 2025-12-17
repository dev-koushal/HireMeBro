import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const Skills = ["Html", "Css", "TailwindCss", "JavaScipt"];
let isResume = "kh";

function Profile() {
  const [open,setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="w-full md:max-w-4xl  mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className=" flex justify-between">
          <div className="flex gap-2 md:gap-8 items-center ">
            <Avatar className="w-12 h-12 md:h-24 md:w-24">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/137811402?v=4"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="text-md font-bold">Full Name</h1>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right cursor-pointer" variant="outline">
            <Pen />
          </Button>
        </div>
        {/* Mail contacts */}
        <div className=" md:mt-6 mt-4 space-y-2">
          <div className="flex gap-3 items-center">
            <Mail />
            <span>KoushalYadva@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <Contact />
            <span>78050426162</span>
          </div>
        </div>
        {/* Resume and badges of skills */}
        <div>
          <h1 className="font-semibold text-md mt-4 mb-2">Skills</h1>
          <div className="flex gap-2 items-center">
            {Skills.length != 0 ? (
              Skills?.map((item, index) => (
                <Badge
                  variant="destructive"
                  className="bg-green-700 px-2"
                  key={index}
                >
                  {item}
                </Badge>
              ))
            ) : (
              <h1 className="bg-red-300 px-2 rounded-full">No Skills found </h1>
            )}
          </div>
        </div>
        {/* Resume */}
        <div>
          <h1 className="font-semibold text-md mt-4 ">Resume</h1>
          {isResume ? (
            <a target="blank" href="https://www.google.com">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                Download
              </Badge>
            </a>
          ) : (
            <span className="bg-red-300 px-2 rounded-full">
              No Resume found!!
            </span>
          )}
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1  className="font-semibold text-lg mt-4 mb-2">Applied Jobs</h1>
          <AppliedJobTable/>
        </div>
          <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}
export default Profile;
