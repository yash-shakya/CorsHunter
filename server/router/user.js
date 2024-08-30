import express from "express"
import { handleLogin,handleSignup } from "../controller/user.js";

const route=express.Router();

route.post("/signup",handleSignup);
route.post("/login",handleLogin);

export default route