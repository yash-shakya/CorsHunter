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
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    age:{
        type:Number
    },
    coins:{
        type:Number,
        default:0
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
},{timestamps:true});

const user=mongoose.model("user",userSchema);

export default user;