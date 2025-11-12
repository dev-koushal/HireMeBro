export const postJob = async (req,res)=>{
    try {
        const {title,description,requirments,salary,location,position,jobType,experience,companyId} = req.body;
        const userId = await req.id;
        
    } catch (error) {
        console.log(error);
    }
}