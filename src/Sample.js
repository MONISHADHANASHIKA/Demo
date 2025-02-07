import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import './Sample.css';



function Sample() {

  const [show,setshow]=useState(true)
  const handlebar=() =>{
    setshow(!show)
  }
  useEffect(() =>{
      let a =localStorage.getItem("username")
      toast.success("weclome to react!!!!"+a)
    },[])

   


  return (
    <div>
       
        <ToastContainer/>
        <IoIosArrowDroprightCircle class="ic" onClick={handlebar}/>
        {show?
        <div class="cn1">
        <label>home</label>
        <label>content</label>
        <label>about</label>
        <label>next</label>
        <label>climax</label></div>
        :null}

       

        
        
      
    </div>
  )
}

export default Sample
