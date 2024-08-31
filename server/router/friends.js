import express from "express";
import { viewFriends,addFriend } from "../controller/friends.js";

const route=express.Router();

route.get("/",viewFriends);
route.post("/request/:email",addFriend);

export default route;