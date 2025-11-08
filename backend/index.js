import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'
dotenv.config({
    path:"./.env"
});
const app = express();

app.get('/home',(req,res)=>{
    return res.status(200).json({
        message : "Coming from backend!!",
        success : true
    })
})

// middleware
app.use(express.json({limit:"16kb"}));

app.use(express.urlencoded({extended:true,limit:"16kb"}));

app.use(cookieParser());

const corsOptions = {
    origin : 'http://localhost:5173',
    credentials : true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT;

app.use('/api/v1/user',userRoute);

await connectDB();
{
    app.listen(PORT,()=>{
        console.log("Server running at port: "+ PORT);
    })
}