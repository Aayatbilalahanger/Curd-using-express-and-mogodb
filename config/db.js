const mongoose = require("mongoose")
const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/school")
        console.log("connect to databse")
    }catch(err){
        console.error("not connected to databse",err.message)
    }
}

module.exports = connectDb;