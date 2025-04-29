import mongoose from "mongoose";

const taskSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref:"users"
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        default: "ongoing",
        enum: ["ongoing","completed"],
        trim: true
    }
},
{
    timestamps: true
})

const Task = mongoose.model("tasks", taskSchema)
export default Task