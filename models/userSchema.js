const mongoose=require("mongoose")



const userSchema=mongoose.Schema({
     
     Last_name:String,
     First_name:String,
     Email:String,
     age:Number,

})



const User=mongoose.model('contactList',userSchema)


module.exports=User