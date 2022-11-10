const express = require('express')
const app=express()
app.use(express.json())
const connectDB = require('./config/connectDB')
const cors = require("cors");

require('dotenv').config({path:'./config/.env'})

const { cloudinary } = require('./utils/cloudinary');

MONGO_URI=process.env.MONGO_URI
console.log(MONGO_URI,process.env.port)

// const port=process.env.port
connectDB()
app.use(cors())



app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use('/',require("./routes/userRoutes"))

app.get('/api/images',async(req,res)=>{
    const {resources} = await cloudinary.search.expression('folder:testfolder')
    .sort_by('public_id','desc')
    .max_results(30)
    .execute()
    const publicIds = resources.map((file) => file.public_id )
    res.send(publicIds)
})
app.post('/api/upload',async(req,res)=>{
    try {
        console.log(" req ==>",req.body)
        const fileStr = req.body.data;
        console.log(fileStr)
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'wafast',
            folder:'testfolder'
        });
        console.log(uploadResponse)
        res.json({msg:"yayya"})
    } catch (error) {
        console.error(error)
        res.status(500).json({err:"Something went wrong"})
        
    }
})
app.listen(5000,()=>{
    console.log(`runing on port 5000`)
})
