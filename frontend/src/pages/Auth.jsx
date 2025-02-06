import React, { useState } from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const Auth = ({registerpage}) => {

    const [login,setLogin]=useState({
        email:"",
        password:""
    })
    const [register,setRegister]=useState({
        username:"",
        email:"",
        password:""
    })
  return (
    <div>
        {
            registerpage?
            <div className="container">
            <div className="row">
               <div className="col-lg-2"></div>
               <div className="col-lg-8 ">
                   <div className="row logic mt-5 ">
                   <div className="col-lg-6 text-light text-center project ">
                       <img src="https://cdn-icons-png.flaticon.com/512/8435/8435627.png" alt="" />
                       <h5 className='pt-1'>PROJECT FAIR</h5>
                       <p>Login her ipsum dolor sit amet consectetur adipidunt a tenetur fuga harum, inventore, iste aliquid dicta dolorem et? Minus, illum.</p>

                   </div>
                   <div className="col-lg-6 text-center text-white d-flex flex-column align-items-center">
                       <h1 className='py-3'>REGISTER</h1>
                       <input onChange={(e)=>setRegister({...register,username:e.target.value})} className='input form-control ' type="text" placeholder='username'/>
                       <input onChange={(e)=>setRegister({...register,email:e.target.value})} className='input form-control' type="text" placeholder='email'/>
                       <input onChange={(e)=>setRegister({...register,password:e.target.value})} className='input form-control' type="text" placeholder='password'/>
                       <button className='btn  btn-outline-light btn-sm mt-4 w-25 '>REGISTER</button>
                       <p className='mt-3'>New to project fair?<Link to={'/'}> login now</Link></p>
                   </div>
                   </div>
               </div>
               <div className="col-lg-2"></div>
            </div>
            </div>
            :
            <div className="container">
             <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 ">
                    <div className="row logic mt-5 ">
                    <div className="col-lg-6 text-light text-center project ">
                        <img src="https://cdn-icons-png.flaticon.com/512/8435/8435627.png" alt="" />
                        <h5 className='pt-1'>PROJECT FAIR</h5>
                        <p>Login her ipsum dolor sit amet consectetur adipidunt a tenetur fuga harum, inventore, iste aliquid dicta dolorem et? Minus, illum.</p>

                    </div>
                    <div className="col-lg-6 text-center text-white d-flex flex-column align-items-center">
                        <h1 className='py-3'>LOGIN</h1>
                        <input onChange={(e)=>setLogin({...login,email:e.target.value})} className='input form-control' type="text" placeholder='email'/>
                        <input onChange={(e)=>setLogin({...login,password:e.target.value})} className='input form-control' type="text" placeholder='password'/>
                        <button className='btn  btn-outline-light btn-sm mt-4 w-25'>LOGIN</button>
                        <p className='mt-3'>New to project fair?<Link to={'/register'}> Register now</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
             </div>
             </div>
        }
    </div>
  )
}

export default Auth