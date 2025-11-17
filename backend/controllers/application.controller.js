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

        job
    } catch (error) {
        console.log(error);
    }
}