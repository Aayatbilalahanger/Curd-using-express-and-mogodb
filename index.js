const express = require("express")
const connectDB = require("./config/db")
const userRoute = require("./routes/userRoutes")

const app = express()
const PORT = 3000;
connectDB()
app.use(express.json())
app.use('/users',userRoute);

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})
