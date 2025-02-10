import express from 'express'
import { register } from '../Controller/usercontroller.js'
import { login } from '../Controller/usercontroller.js'

const route=new express.Router()

route.post('/user/register',register)

 
route.post('/user/login',login)


export default route