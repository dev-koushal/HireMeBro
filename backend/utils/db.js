import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        // await mongoose.connect(process.env.MONGO_URI);
        console.log("The mongo is: " + process.env.MONGO_URI);
        console.log("mongo db connected!!");
    }catch (error){
        console.log(error);
    }
}

export default connectDB;