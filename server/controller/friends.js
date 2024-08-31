import user from "../models/user.js";

export async function viewFriends(req,res){
    const Userid=req.user.id;
    if(!Userid) return res.json({message:"UnAuthorized"})
    const User=await user.findById(Userid);

    const friends=User.friends;
    
    try{
        const friendArray = await Promise.all(
            friends.map(async (friendId) => {
                return await user.findById(friendId);
            })
        );

        return res.status(200).json(friendArray);
        
    } catch(e){
        return res.json({message:'No Friends Found', error:e})
    }
}

export async function addFriend(req,res){
    const email=req.params.email;
    const Userid=req.user.id;
    const User=await user.findById(Userid);
    try{
        const friend=await user.findOne({email:email});

        if(!friend) return  res.json({message:"No User Found"});
        if(User.friends){
            if (User.friends.includes(friend.id)) {
                return res.status(400).json({ message: 'Already friends' });
            }
        }
        User.friends.push(friend.id);
        await User.save();
        
        friend.friends.push(User.id);
        await friend.save();
        
        res.json({ message: 'Friend request sent' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}