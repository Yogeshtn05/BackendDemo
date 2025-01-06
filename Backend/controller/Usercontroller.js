import User from "../Model/Usermodel.js";

export const deleteid=async(req,res)=>{
    try{
        const id=req.params.id
        const userEx=await User.find({_id:id})
        if(userEx){
            const del=await User.findByIdAndDelete(id)
            res.status(200).json({message:"Deleted Success"})
        }
        else{
            res.status(400).json({message:"Deleted Not Success"})   
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
export const check=async(req,res)=>{
    try{
        const userex=await User.find()
        if(userex){
            res.status(200).json(userex)   
        }
        else{
            res.status(400).json({message:"No users"});
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const fetch=async(req,res)=>{
    try{
        const userdata=new User(req.body);
        const {email}=userdata;
        const userExist=await User.findOne({email});
        if(userExist){
            res.status(400).json({message:"Password does not match"});
        }
        else{
            const s=await userdata.save();
            res.status(200).json({message:s})
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExit = await User.findOne({_id:id});
        if(!userExit){
            res.status(400).json({message:"User not found"});
        }
        else{
            const updateUser = await User.findByIdAndUpdate(id);
            res.status(200).json({updateUser});
        }
    } catch (error) {
        console.error("Error in update:", error);
        res.status(500).json({ error:"internal server error"});
    }
}