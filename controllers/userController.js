const User = require("../models/userSchema")



const userController={
    getUsers:async(req,res)=>{

        const users=await User.find()
        if(users)
        res.send(users)
    },
    addUser:async(req,res)=>{
    
     const {First_name, Email , Last_name,age}=req.body
     const user=await User.findOne({Email})
     if(user)
     res.json({message:"user already exist"})
    
    
    else{ const newUser= await User.create({First_name,Email,Last_name,age})


     // insert  w ba3d save  
     // User.insert(data)  User.save()
     res.json({newUser})}
    }
}   

module.exports=userController