import { Button, CardActions,Card, CardContent, Typography, TextField } from "@mui/material";
import { useEffect } from "react";

// import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Base from "../Base/Base";

// import {data} from "../Data/data";


export function StudentDetails({studentsData,setStudents}) {

  const history = useHistory();

//  useEffect(()=>{
//   if(! localStorage.getItem("user-name") )
//   {
//     history.replace("/register")
//   }
  
//  },[])




  // delete a data -------------------------------------------------------------------------------------------
  const deleteStudentData = (studId)=>{
    const removeStudent = studentsData.filter((ele,idx)=> studId !== idx)
    setStudents(removeStudent)
  }
    
    // setting the states

    // const[id,setId] = useState("")
    // const[name , setName] = useState("")
    // const[batch ,setBatch] = useState("")
    // const[gender , setGender] = useState("")
    // const[experience , setExperience] = useState("")

    // // to show the button (add / update ) use Ternary operator in buttons for that set the states first: 
    
    //  const[showAdd,setShowAdd] = useState(true)
    //  const[showUpdate,setShowUpdate] = useState(false)

    // // give Id for Edit globally , so that you can access it anywhere.

    // const[editId , setEditId] = useState("")

    // // import useHistory here -- to use it for viewstudent
   
    //  const history = useHistory();

    
  // add a new data ------------------------------------------------------------------------------------
    // const addNewButton = () => 
    // {
    //   const newStudent = {
    //     id,
    //     name,
    //     batch,
    //     gender,
    //     yearOfExperienece : experience
    //   }
    //   // console.log(newStudent)
    //   setStudents([...studentsData , newStudent])
    //   setId("")
    //   setName("")
    //   setBatch("")
    //   setGender("")
    //   setExperience("")
      
    // }

    

    // Update functionality -------------------------------------------------------------------------------
     // update the form

 



   //----------------------------------------------------------------------------------------------------------------

  return(

    <Base
    tittle = "Batch Details"
    description= "All students details"
    >
    
    <div className="containers">

   {/* <div className="input-session">
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


    {showAdd ? 

      <Button className="add-btn" color="success" variant="contained"
              onClick={addNewButton}>Add data</Button>

              : " "  }

     {showUpdate ? 

      <Button className="add-btn" color="secondary" variant="contained"
              onClick={updateStudentData}>Update data</Button>
             
              : " " }
             
      </div> */}

        <div className="card-containers">

     {studentsData.map(( stud , id )=>(

  
   <Card sx={{ maxWidth: 345 }} key = {id} className="card">
             
           <CardContent>

                 <Typography gutterBottom variant="h5" component="div">
                   Name : {stud.name} 
                 </Typography>

                 <Typography variant="body2" color="text.secondary">
                   Batch : {stud.batch}
                 </Typography>
                 
                 <Typography variant="body2" color="text.secondary">
                 Gender : {stud.gender}
                 </Typography>
                 
                 <Typography variant="body2" color="text.secondary">
                 yearOfExperienece : {stud.yearOfExperienece} years
                 </Typography>

          </CardContent>

           <CardActions>
                 {/* <Button onClick={()=>editAndSelectStudent(stud.id)} color="secondary">Edit</Button> */}
                 <Button onClick={()=>history.push(`/edit/${id}`)} color="secondary">Edit</Button>
                 <Button onClick={()=>deleteStudentData(id)} color="error">Delete</Button>
                 <Button onClick={()=>history.push(`/student/${id}`)} color="primary">View Student</Button>
           </CardActions>
             
  </Card>

))}

     </div>
     </div>

      </Base>
  );

}                         

