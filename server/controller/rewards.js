import user from "../models/user.js";
import coupon from "../models/coupons.js";
import jwt from "jsonwebtoken";

export async function getCoupons(req,res){
    const coupons=await coupon.find({});
    res.status(200).json(coupons);
}

export async function addCoupon(req,res){
    const {title,code}=req.body;
    coupon.create({
        title,
        code
    })
    res.send("coupon added succesfully");
}

export async function exchangeCoupon(req,res){
    const couponId=req.params.id;
    try {
        const User=req.user;
        if(!user) return res.json({message:"User not Found"});
        const coins=User.coins;
        if(coins<1000) return res.json({message:"Not enough coin"});
        else{
            const Coupon=await coupon.findById(couponId);
            await coupon.findByIdAndDelete(couponId);
            User.coins-=1000;
            await User.save();
            return res.json(Coupon);
        }
    } catch (err) {
        return res.status(401).json({ message: 'Error Occured', error:err });
    }
}