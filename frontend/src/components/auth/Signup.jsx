import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router";
function Signup() {
  const [input,setInput] = useState({
    fullname:"", email:"", phoneNumber:"", password:"", role:"",file:""
  })

  const changeEventHandler = (e) =>{
    setInput({...input,[e.target.name]:e.target.value});
  } 
  
  const changeFileHandler = (e)=>{
    setInput({...input,file:e.target.files?.[0]});
  }

  const submitHandler = async(e)=>{
      e.preventDefault();
      console.log(input);
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 border border-grey-200 rounded-md p-4 my-10"
        >
          <h1 className="text-xl font-bold mb-8 ">SignUp</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input onChange={changeEventHandler} value={input.fullname} name="fullname" type="text" placeholder="Enter fullname" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input onChange={changeEventHandler} value={input.email} name="email" type="email" placeholder="example@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone number</Label>
            <Input onChange={changeEventHandler} value={input.phoneNumber} name="phoneNumber" type="text" placeholder="78050xxxx" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input onChange={changeEventHandler} value={input.password} name="password" type="password" placeholder="" />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value = "student"
                    checked={input.role==='student'}
                    onChange ={changeEventHandler}
                    className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value = "recruiter"
                    checked={input.role==='recruiter'}
                    onChange ={changeEventHandler}
                    className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              
            </RadioGroup>

            <div className="flex items-center gap-2 ml-2">
                <Label >Profile </Label>
                <Input 
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer w-22"
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
