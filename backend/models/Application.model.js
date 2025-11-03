import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({


},{timestamps:true})

const Application = mongoose.model("Application",applicationSchema) 