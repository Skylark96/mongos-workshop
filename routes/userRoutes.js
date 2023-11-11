const userController = require("../controllers/userController")

const Router=require("express").Router()


Router.get("/users",userController.getUsers)
Router.post("/addUser",userController.addUser)





module.exports=Router