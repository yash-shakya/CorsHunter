import user from "../models/user.js";
import jwt from "jsonwebtoken";

export async function handleSignup(req,res){
    const {name,email,password}=req.body;
    try{
        user.create({
            name,
            email,
            password
        })
        res.send("Signup successfull");
    }catch(err){
        res.send("Error in signup:",err);
    }
}

export async function handleLogin(req,res){
    const {email,password}=req.body;
    const User= await user.findOne({
        email,
        password
    })
    if(!User) return res.send("Invalid email or password");
    const id=User.id;
    const name=User.name;
    const token = jwt.sign({
        id,
        name,
        email,
        password
    },'YOUR_SECRET_KEY');
    res.cookie('token',token);
    return res.send('Login successfull')
}