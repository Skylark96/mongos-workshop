const mongoose=require("mongoose")


const connect=()=>{
  
mongoose.connect("mongodb://0.0.0.0:27017/contactList").then(console.log("connection done"))
  
}


module.exports=connect