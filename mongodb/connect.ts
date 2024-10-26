import mongoose from "mongoose";

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.NEXT_MONGO_URI!)
        console.log("Connected To MongoDB");
        
    } catch (error) {
        console.log(error);
        
    }
}