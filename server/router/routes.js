import userRoute from "./user.js";
import testroute from "./test.js";
import rewardroute from "./rewards.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

function routes(app){
    app.use("/user",userRoute);
    app.use("/",userMiddleware,testroute);
    app.use("/rewards",userMiddleware,rewardroute);
}

export default routes