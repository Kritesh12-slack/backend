// require('dotenv').config({path : "./env"})  //not working as it is not ES6
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.on("Error", (error) => {
            console.log(error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed !!!!!!!!!", err)
    })

























// import express from "express";
// const app = express()
// (async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("Error",(error)=>{
//             console.log(error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`DB Connected at port : ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log(error)
//         throw error
//     }
// })()