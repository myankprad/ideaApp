const express = require("express")
const serverConfig = require("./configs/server.config.js")
const dbConfig = require("./configs/db.config.js")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
// const { init } = require("./models/user.model.js")
const app = express()
const userModel = require("./models/user.model.js")

app.listen(serverConfig.PORT ,()=>{
console.log(`server started on port ${serverConfig}`)
})

mongoose.connect(dbConfig.DB_URL).then(()=>{
    console.log("connected")
    init()
})
.catch((err)=>{
    console.log(err, "error")
})

async function  init(){
    // addmin user
// 2step 
    let admin = await userModel.findOne({
    userId: "admin"
})
 
if(admin){
    console.log("admin user alread")
    return;
}
// 1step 
     admin = await userModel.create({
        name: "Iron Man",
        userId: "admin",
        email: "tonyStark@gmail.com",
        userType: "ADMIN",
        password:"jarvis"
    })
console.log(admin)
}

// const db = mongoose.connection;

// db.on("error", ()=>{
//     console.log("error while connecting")
// })

// db.once("open", ()=>{
//     console.log("Db is connected")
// })
// 
// kcCneqQgwsLUxrEy