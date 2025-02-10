import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/route.js'
import './Db/connection.js'

dotenv.config()
const server=express()
server.use(cors())
server.use(express.json()) 
server.use(route)
const port=process.env.PORT



server.listen(port,()=>{
    console.log('server running on port ',port)
})


server.get('/',(req,res)=>{
    res.send('authentication server started')
})