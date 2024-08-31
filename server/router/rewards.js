import express, { Router } from "express";
import { getCoupons, exchangeCoupon, addCoupon } from "../controller/rewards.js";

const route=express.Router();

route.delete("/coupons/:id",exchangeCoupon);
route.post("/coupons/create",addCoupon);
route.get("/coupons",getCoupons);

export default route;