import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();
  const [input,setInput] = useState({
      email:"", password:"", role:""
    })
  
    const changeEventHandler = (e) =>{
      setInput({...input,[e.target.name]:e.target.value});
    } 
    
    const changeFileHandler = (e)=>{
      setInput({...input,file:e.target.files?.[0]});
    }
     const submitHandler = async(e)=>{
      e.preventDefault();
     try {
      const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
        headers :{
            "Content-Type":"application/json"
        },
        withCredentials : true,
      });
      if(res.data.success){
        navigate('/');
        toast.success(res.data.message);
      }

     } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      
     }
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full md:max-w-7xl mx-auto">
        <form
        onSubmit={submitHandler}
          className="w-full md:w-1/2  border border-grey-200 rounded-md p-4 my-10"
        >
          <h1 className="text-xl font-bold mb-8 ">Login</h1>
         
          <div className="my-2"> 
            <Label>Email</Label>
            <Input onChange={changeEventHandler} value={input.email} name="email" type="email" placeholder="Enter registered email" />
          </div>
         
          <div className="my-2">
            <Label>Password</Label>
            <Input onChange={changeEventHandler} value={input.password} name="password" type="password" placeholder="Enter password" />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value = "student"
                    className="cursor-pointer"
                    checked={input.role==='student'}
                    onChange ={changeEventHandler} 
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

            
          </div>

          <Button className="w-full my-2">Login</Button>
          <span className="text-sm cursor-pointer">Don't have an account? <Link className="text-blue-600" to="/login">Signup</Link></span>
        </form>
      </div>
    </>
  );
}

export default Login;
