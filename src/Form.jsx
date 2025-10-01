import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    number: "",
    event: "",
    date: ""
  })

  const display = () => {
    if (inputData.name || inputData.email || inputData.number || inputData.event || inputData.date) {
      alert(`Registration Successful...!\nName : ${inputData.name}\nEmail : ${inputData.email}\nNumber : ${inputData.number}\nEvent : ${inputData.event}\nDate : ${inputData.date}`)
    } else {
      alert(`Please fill the details completely...!`)
    }
  }

  const clear = () => {
    setInputData({
      name: "",
      email: "",
      number: "",
      event: "",
      date: ""
    })
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-primary mb-4">course registration Form</h1>
        
        <Box component="form" noValidate autoComplete="off">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <TextField 
                fullWidth 
                label="Enter Name" 
                variant="outlined" 
                value={inputData.name} 
                onChange={(e)=>setInputData({...inputData, name: e.target.value})} 
              />
            </div>
            <div className="col-12 col-md-6">
              <TextField 
                fullWidth 
                label="Enter Email" 
                type="email" 
                variant="outlined" 
                value={inputData.email} 
                onChange={(e)=>setInputData({...inputData, email: e.target.value})} 
              />
            </div>
            <div className="col-12 col-md-6">
              <TextField 
                fullWidth 
                label="Enter Phone Number" 
                variant="outlined" 
                value={inputData.number} 
                onChange={(e)=>setInputData({...inputData, number: e.target.value})} 
              />
            </div>
            <div className="col-12 col-md-6">
              <TextField 
                fullWidth 
                label="Enter Course Name" 
                variant="outlined" 
                value={inputData.event} 
                onChange={(e)=>setInputData({...inputData, event: e.target.value})} 
              />
            </div>
            <div className="col-12">
              <TextField 
                fullWidth 
                label="Enter Joining Date" 
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined" 
                value={inputData.date} 
                onChange={(e)=>setInputData({...inputData, date: e.target.value})} 
              />
            </div>
          </div>
        </Box>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <button onClick={display} className="btn btn-danger">Register</button>
          <button onClick={clear} className="btn btn-danger">Clear</button>
        </div>
      </div>
    </>
  )
}

export default Form

