import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    const[inputData, setInputData] =  useState({
        name:"",
        email:"",
        number:"",
        event:"",
        date:""
    })

    const display = ()=>{
        if(inputData.name || inputData.email || inputData.number || inputData.event || inputData.date){
            alert(`Registration Successful...!\nName : ${inputData.name}\nEmail : ${inputData.email}\nNumber : ${inputData.number}\nEvent : ${inputData.event}\nDate : ${inputData.date}`)
            
        }else{
            alert(`Please fill the details completly...!`)
        }
    }

    const clear = ()=>{
        setInputData({
         name:"",
         email:"",
         number:"",
         event:"",
         date:""
        })
    }

  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
       
       <h1 style={{marginInlineStart:"550px"}} className='text-primary mt-5'>Form</h1>
       <div style={{marginLeft:"400px"}} className='row my-4 w-50 h-100'>
        <TextField onChange={(e)=>setInputData({...inputData, name: e.target.value})} value={inputData.name} className='m-3' id="outlined-basic" label="Enter  Name" variant="outlined" />
        <TextField onChange={(e)=>setInputData({...inputData, email: e.target.value})} value={inputData.email} className='m-3' id="outlined-basic" label="Enter  Email" type='mail' variant="outlined" />
        <TextField onChange={(e)=>setInputData({...inputData, number: e.target.value})} value={inputData.number} className='m-3' id="outlined-basic" label="Enter  Phone Number"  variant="outlined" />
        <TextField onChange={(e)=>setInputData({...inputData, event: e.target.value})} value={inputData.event} className='m-3' id="outlined-basic" label="Enter course Name" variant="outlined" />
        <TextField onChange={(e)=>setInputData({...inputData, date:e.target.value})} value={inputData.date} className='m-3' id="outlined-basic" label="Enter joining Date" variant="outlined" />
       </div>
      
    </Box>
    <div className="div mb-3 gap-3 d-flex justify-content-center align-items-center ">
        <button onClick={display} className='btn btn-danger'>Register</button>
        <button onClick={clear} className='btn btn-danger'>Clear</button>
        
        
    </div>
    </>
  )
}

export default Form