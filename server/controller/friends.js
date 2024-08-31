import user from "../models/user.js";

export async function viewFriends(req,res){
    const User=req.user;
    if(!User) return res.json({message:"UnAuthorized"})

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
    const User=req.user;
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

export async function viewLeaderboard(req,res){
    const leaderboard=[];
    const User = req.user;

    leaderboard.push({name:User.name,coins:User.coins});
    const friends=User.friends;

    try{
        const friendArray = await Promise.all(
            friends.map(async (friendId) => {
                return await user.findById(friendId);
            })
        );
        
        friendArray.forEach((e)=>{
            leaderboard.push({name:e.name,coins:e.coins});
        })


        leaderboard.sort((a, b)=> {
            if (a.coins > b.coins)
                return -1;
            if (a.coins < b.coins)
                return 1;
            return 0;
        })

        return res.json(leaderboard);

        
    } catch(e){
        return res.json({message:'No Friends Found', error:e})
    }
}