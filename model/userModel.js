import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Kindly provide name"],
    },

    email:{
        type:String,
        required:[true,"Kindly provide email"],
        validate:{
            validator:validator.isEmail,
            message:"enter valid Email",
        },
        unique: true,
    },
    password:{
        type:String,
        required:[true,"Please enter password"],
    },
    refreshToken: {
        type:String,
    },
});