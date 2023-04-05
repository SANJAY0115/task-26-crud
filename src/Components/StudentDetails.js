import { Button, CardActions,Card, CardContent, Typography, TextField } from "@mui/material";
import { useEffect } from "react";


import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Base from "../Base/Base";



export function StudentDetails({studentsData,setStudents}) {

  const history = useHistory();





  
  const deleteStudentData = (studId)=>{
    const removeStudent = studentsData.filter((ele,idx)=> studId !== idx)
    setStudents(removeStudent)
  }
    

  return(

    <Base
    tittle = "Batch Details"
    description= "All students details"
    >
    
    <div className="containers">

   
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

