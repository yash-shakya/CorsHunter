import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    weight:{
        type:Number,
    },
    height:{
        type:Number
    },
    coins:{
        type:Number,
        default:0
    }
},{timestamps:true});

const user=mongoose.model("user",userSchema);

export default user;