import { Job } from "../models/job.model.js";

export const postJob = async (req,res)=>{
    try {
        const {title,description,requirments,salary,location,position,jobType,experience,companyId} = req.body;
        const userId = await req.id;
        if(!title ||!description || !requirments ||!salary || !location || !position || !jobType || !experience ||!companyId){
            return res.status(404).json({
                message:"Something is missing!",
                success: false
            })
        }
        const job = await Job.create({
            title,description,requirments: requirments.split(","),salary: Number(salary),location,position,jobType,experienceLevel: experience,company : companyId, created_by : userId
        })
        return res.status(201).json({
                message:"New Job created!",
                job,
                success: false
            })
    } catch (error) {
        console.log(error);
    }
}


export const getJob = async (req,res)=>{
    try {
        const keyword = req.query.keyword ||  "";
        const query  ={
            $or:[
                {title : {$regex:keyword,$option:"i"}},
                {description: {$regex:keyword,$option:"i"}}
            ]
        };
        const jobs = await Job.find(query);

        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success : false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const getJobById = async (req,res) =>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
             return res.status(404).json({
                message:"Job not found",
                success : false
            })
        };

         return res.status(200).json({
                job,
                success :true
            })
    } catch (error) {
        console.log(error);
    }
}

export const getAdminJobs = async (req,res)=>{
    try {
        const adminId = req.id;

        const jobs = await Job.find({created_by:adminId})

        if(!jobs){
             return res.status(404).json({
                message:"Job not found",
                success : false
            })
        };
         return res.status(200).json({
                jobs,
                success :true
            })
    } catch (error) {
        console.log(error);
    }
}