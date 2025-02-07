import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './Moni.css';



function Moni() {
  useEffect(() =>{
    let a =localStorage.getItem("username")
    toast.success("weclome to react!!!!"+a)
  },[])
    



    const[inputvalue1,setInputvalue1]=useState("")
    const[inputvalue2,setInputvalue2]=useState("")
    const handlesubmit =() =>{
      console.log(inputvalue1,inputvalue2);
                if(inputvalue1===''){
                    toast.error("please enter your username")
                  }
                  else{
                    localStorage.setItem("username",inputvalue1)
                    toast.success("username saved successfully")
                  }
                  if(inputvalue2===''){
                      toast.error("please enter your password")
                    }
                    else if(inputvalue2.length<=6)
                    {
                      toast.error("the password must be atleast lessthan 6 characters")
                    }
                    else{
                      localStorage.setItem("password",inputvalue2)
                      toast.success("password saved successfully")
                    }
                                      
            }
        
    return (
    <div>
    <ToastContainer />
    <IoIosArrowDroprightCircle class="icon"/>

    <label>user name</label>
    <input type="text"
    value={inputvalue1}
    onChange={(e)=>setInputvalue1(e.target.value)}/><br/>

    <label>password</label>
    <input type="password"
    value={inputvalue2}
    onChange={(e)=>setInputvalue2(e.target.value)}/><br/>
    
    <Link to="/home">
    <button onClick={handlesubmit}>submit</button>
    </Link>
  
      
    
    <label>{inputvalue1}</label>
    <label>{inputvalue2}</label>
    
    </div>
  )
}

export default Moni
