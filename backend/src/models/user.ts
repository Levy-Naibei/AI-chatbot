import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema({
    role: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    chats: [chatsSchema]
});

export default mongoose.model("User", userSchema);