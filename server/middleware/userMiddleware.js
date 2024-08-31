import user from "../models/user.js";
import jwt from "jsonwebtoken";

export async function userMiddleware(req, res, next) {
    const token = req.headers.cookie.split('token=')[1].split(';')[0];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token,'YOUR_SECRET_KEY');
        const {id}=decoded
        const User=await user.findById(id)
        if(!user) return res.json({message:"User not Found"})
        req.user=User;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', error:err });
    }
}