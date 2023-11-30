import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    content : {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model("Notes", notesSchema); 