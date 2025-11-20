import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-grey-200 rounded-md p-4 my-10"
        >
          <h1 className="text-xl font-bold mb-8 ">SignUp</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter fullname" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone number</Label>
            <Input type="text" placeholder="78050xxxx" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="" />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value = "student"
                    className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value = "recruiter"
                    className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              
            </RadioGroup>

            <div className="flex items-center gap-2 ml-2">
                <Label>Profile</Label>
                <Input 
                accept="image/*"
                type="file"
                className="cursor-pointer"
                />
            </div>
          </div>

          <Button className="w-full my-2">Signup</Button>
          <span className="text-sm cursor-pointer">Already have account? <Link className="text-blue-600" to="/login">Login</Link></span>
        </form>
      </div>
    </>
  );
}

export default Signup;
