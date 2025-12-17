import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
function Profile() {
  return (
    <div>
      <Navbar />
      <div className="w-full md:max-w-7xl  mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex gap-2 md:gap-8 items-center">
          <Avatar className="w-12 h-12 md:h-24 md:w-24">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/137811402?v=4"
              alt="profile"
            />
          </Avatar>
          <div>
            <h1>Full Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
