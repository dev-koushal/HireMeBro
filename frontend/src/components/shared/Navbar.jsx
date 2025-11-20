import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
function Navbar() {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold md:ml-0 ml-4">
            <Link to="/">HireMe<span className="text-[#F83002]">Bro</span></Link>
          </h1>
        </div>
        <div className="flex item-center gap-12">
          <ul className="hidden md:flex font-medium items-center gap-8 ">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
            {/* <li><Link>Home</Link></li>
          <li><Link>Jobs</Link></li>
          <li><Link>Browse</Link></li> */}
          </ul>

          {
            !user?(
              <div className="flex items-center gap-2 md:mr-0 mr-2 ">
               <Link to="/login"> <Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5916cd]">SignUp</Button></Link>
              </div>
            ):(
               <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/137811402?v=4"
                  alt="profile"
                />
                <AvatarFallback>Pf</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 border-2 shadow-sm">
              <div className="flex items-center space-y-2 gap-4 ">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/137811402?v=4"
                    alt="profile"
                  />
                  <AvatarFallback>Pfp</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium ">Koushal Yadav</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col text-gray-600">
                <div className="cursor-pointer flex gap-2 items-center w-fit">
                  <User2/>
                  <Button variant="link" >View Profile</Button>
                </div>
                <div className="cursor-pointer flex gap-2 items-center w-fit">
                  <LogOut/>
                <Button variant="link" className="cursor-pointer">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
