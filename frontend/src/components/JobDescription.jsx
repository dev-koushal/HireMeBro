import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { useParams } from "react-router";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";

function JobDescription() {
  
  const dispatch = useDispatch();
  const params = useParams();
  const {singleJob} = useSelector(store=>store.job);
  const {user} = useSelector(store=>store.auth);
  const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);
  const jobId = params.id;
   const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
            if(res.data.success){
                setIsApplied(true); // Update the local state
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
   useEffect(()=>{
       const fetchSingleJob = async ()=>{
         try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
              console.log(res.data.job);
              dispatch(setSingleJob(res.data.job));
            }       
        } catch (error) {
            console.log(error);
        }
       }
       fetchSingleJob();
    },[jobId,dispatch,user?._id])

  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <div className="my-10 border border-gray-200 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <Avatar>
              <AvatarImage
                className="h-20 w-20"
                src="https://yt3.googleusercontent.com/t6KE44Of184R3Qmq3M7xwiss0q-16LNaTwKxSIA0bx201gJu366fBBwbriT9uEJubGXj1n6O5g=s900-c-k-c0x00ffffff-no-rj"
              />
            </Avatar>
            <div className="items-center">
              <h1 className="text-xl font-bold ">{singleJob?.title}</h1>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                {singleJob?.jobType} 
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                {singleJob?.salary}LPA
              </Badge>
            </div>
          </div>
          <Button
            onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        <div className="my-4 space-y-2">
          <h1 className="text-lg font-semibold my-2 ">Details</h1>
          <div>
            <h1 className="text-md font-semibold inline-block">Description: </h1>{" "}
            <p className="inline">
              {singleJob?.description}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Role:</h1>{singleJob?.title}
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Experience:</h1>{singleJob?.experienceLevel}yr
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Salary:</h1>{singleJob?.salary}Lpa
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-semibold ">Total Applicants:</h1>4
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-semibold  space-y-2">Website</h1>
          <a className="  text-blue-600" href="#">
            WWW.GOOGLE.COM
          </a>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-semibold  space-y-2 ">Location</h1>
          <p>{singleJob?.location}</p>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-semibold  space-y-2 ">Posted</h1>
          <p>{singleJob?.createdAt.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
