const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})
MONGO_URI=process.env.MONGO_URI
console.log(MONGO_URI,process.env.port)

const connectDB=()=>{
    mongoose.connect("mongodb+srv://mongodb-user:rootroot@cluster0.ckjkp.mongodb.net/workshopmern?retryWrites=true&w=majority",(err)=>{
        if(err) throw err
        else console.log("database is connected")
    })
}
module.exports=connectDB