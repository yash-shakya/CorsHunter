import mongoose from "mongoose";

const couponSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    code:{
        type:String,
        require:true,
        unique:true
    }
})

const coupon=mongoose.model("coupon",couponSchema);

export default coupon;