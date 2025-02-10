import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connectionstring=process.env.DATABASE
mongoose.connect(connectionstring)
.then(()=>{
    console.log('mongodb connection established')
})
.catch((error)=>{
 console.log(error)
})