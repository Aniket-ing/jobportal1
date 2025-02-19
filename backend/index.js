import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"; 
import connectDB from "./utils/db.js"
import dotenv from "dotenv"; 
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/comapny.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute  from "./routes/application.route.js";
dotenv.config({});
const app=express();

  
//middleware
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());

const corOption ={
      origin:"http://localhost:5173",
      credentials:true
}
app.use(cors(corOption));

const PORT=process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`sever is running at ${PORT}`);
    
})