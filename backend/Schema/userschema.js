import mongoose from "mongoose";
import validator from 'validator'

const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3

    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>validator.isEmail(value),
            message:'invalid email'
        }
    },
    password:{
        type:String,
        required:true
    }
        
})

const users=mongoose.model('users',userschema)

export default users