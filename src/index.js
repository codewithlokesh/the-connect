import express from "express";
import 'dotenv/config'
import { ENV } from "./config/env.js";
import connectDB from "./db/index.js";
const app = express()


connectDB().then(()=>{
    app.listen(ENV.PORT || 5000, ()=>{
        console.log(`⚙️ Server is running at port : ${ENV.PORT}`)
    })
}).catch((err)=>{
    console.log("MongoDB Connection Failled !!",err)
})