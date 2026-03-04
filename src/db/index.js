import mongoose from "mongoose";
import { ENV } from "../config/env.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${ENV.MONGODB_URI}`)
        console.log("MongoDB Connected Successfully 🚀")
        console.log("DB Host:", connectionInstance.connection.host)
    } catch (err) {
        console.log("MongoDB Connection Failled !!! ", err)
        process.exit(1)
    }
}

export default connectDB;