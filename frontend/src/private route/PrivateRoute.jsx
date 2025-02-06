import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const PrivateRoute=({children})=>{
    let navigate = useNavigate();
    const islogged=false
   
    if(islogged){
        return children
    }
    else{
        useEffect(()=>{
            navigate('/')
        },[])
        
    }
}

export default PrivateRoute