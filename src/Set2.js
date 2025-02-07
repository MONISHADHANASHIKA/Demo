import React, { useState } from 'react'

function Set2() {
  const[data,setData]=useState(0)
  const[Name,setName]=useState('HTML')
  const handleincrement=()=>{
    setData(data+1)
    }
    const handleDecrement=()=>{
    setData(data-1)
    }
  return (
    <div>
      <h1>i love java</h1>
      <label>{data}</label>
      <button onClick={handleincrement}>Add</button>
      <button onClick={handleDecrement}>sub</button>
    </div>
  )
}

export default Set2
