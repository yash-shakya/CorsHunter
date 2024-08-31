import express from "express";
import { viewFriends,addFriend, viewLeaderboard } from "../controller/friends.js";

const route=express.Router();

route.get("/",viewFriends);
route.post("/request/:email",addFriend);
route.get("/leaderboard",viewLeaderboard);

export default route;