import users from "../Schema/userschema.js"
import bcrypt from 'bcrypt'

const register= async(req,res)=>{
   try {
     const {username,email,password}= req.body

     const existinguser=await users.findOne({email})
     if(existinguser){
        res.status(404).json('user already registered')
     }
     else{
      const saltround=10
      const hashedpassword= await bcrypt.hash(password,saltround)
      const newuser= new users({
        username,
        email,
        password:hashedpassword
      })
      await newuser.save()
      res.status(201).json('user registered successfully')
     }
   } catch (error) {
    res.status(500).json('internal server error')
    console.log(error)
   }
}

const login= async(req,res)=>{
 try {
    const {email,password}=req.body
    console.log(email,password)
    
 } catch (error) {
    console.log(error)
 }
}



export{register,login}