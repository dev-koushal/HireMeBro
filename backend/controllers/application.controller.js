import {Application} from '../models/Application.model.js'
import {Job} from '../models/job.model.js'
export const applyJob = async (req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message : " Id is required",
                success : false
            })
        };

    
        // check if user is already applied to the job

        const existingApplication = await Application.findOne({job:jobId,Applicant:userId});

        if(existingApplication){
            return res.status(400).json({
                message : "You have already applied for this job!!",
                success : false
            })
        }
        
        // check if job exist
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(400).json({
                message : "Job does not exist!",
                success : false
            })
        }

        // create a new application
        
        const newApplication = await Application.create({
            job:jobId,
            applicant : userId
        })

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message : "Job applied succefully!!",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}; 

export const getAppliedJobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt: -1}).populate({
            path : 'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path : "company",
                options:{sort:{createdAt:-1}}, 
            }
        });

        if(!application){
            return res.status(404).json({
                message : "No application",
                success : false
            })
        }

        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

// admin can see the user applied to the job
export const getApplicants = async (req,res)=>{
    try {
        const jobId =req.params.id;

        const job = await Job.findById(jobId).populate({
            path:"applications",
            options : {sort:{createdAt:-1}},
            populate:{
                path:"applicant"
            }
        })
    } catch (error) {
        console.log(error);
    }
}