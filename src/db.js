import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://migue:mianboga@cluster0.okin2pk.mongodb.net/");
        console.log(">> DB connect");
    } catch (error) {
        console.log(error)
    }
}