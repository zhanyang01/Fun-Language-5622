import mongoose, { Schema } from "mongoose";

const tokenSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users",
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600
    } // 1 hour
});

const Token = mongoose.model("token", tokenSchema);

export default Token;