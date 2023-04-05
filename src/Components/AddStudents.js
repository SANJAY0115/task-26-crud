import { TextField , Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";


const AddStudents = ({studentsData,setStudents})=>{


    const history = useHistory();

    const[id,setId] = useState("")
    const[name , setName] = useState("")
    const[batch ,setBatch] = useState("")
    const[gender , setGender] = useState("")
    const[experience , setExperience] = useState("")
    

    

    const addNewButton = () => 
    {
      const newStudent = {
        id,
        name,
        batch,
        gender,
        yearOfExperienece : experience
      }
      // console.log(newStudent)
      setStudents([...studentsData , newStudent])
      setId("")
      setName("")
      setBatch("")
      setGender("")
      setExperience("")

      history.push("/details")
      
    };

    return(
        <Base
        tittle= "Add a Student"
        description= "You Can Add a Studend Here"
        >
             <div className="input-session">
      <TextField
       fullWidth label="Enter the Id"
       onChange={(event)=>setId(event.target.value)} 
       value = {id}
       id="fullWidth" />

      <TextField 
      fullWidth label="Enter the Name"
      onChange={(event)=>setName(event.target.value)} 
      value = {name}
      id="fullWidth" />

      <TextField fullWidth label="Enter the Batch" onChange={(event)=>setBatch(event.target.value)} value = {batch}  id="fullWidth" />
      
      <TextField 
      fullWidth label="Enter the Gender"
      onChange={(event)=>setGender(event.target.value)} 
      value = {gender}
      id="fullWidth" />

      <TextField 
      fullWidth label="Enter the Experience"
      onChange={(event)=>setExperience(event.target.value)} 
      value = {experience}
      id="fullWidth" />


   

      <Button className="add-btn" color="success" variant="contained"
              onClick={addNewButton}>Add data</Button>


             </div>
        </Base>
    )

}

export default AddStudents; 


