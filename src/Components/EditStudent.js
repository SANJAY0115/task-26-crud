import { Button, TextField } from '@mui/material';
import React , {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import Base from '../Base/Base';

const EditStudent = ({studentsData , setStudents})=>{

    const {id} = useParams()
    const[editId , setEditId] = useState("")
    const[idx , setIdx] = useState("")
    const[name , setName] = useState("")
    const[batch ,setBatch] = useState("")
    const[gender , setGender] = useState("")
    const[experience , setExperience] = useState("")

    const history = useHistory();

    const student = studentsData[id]

    useEffect(()=>{
      setIdx(student.id);
      setEditId(student.id)
      setName(student.name)
      setBatch(student.batch)
      setGender(student.gender)
      setExperience(student.yearOfExperienece)
     },[])

  // console.log(idx);
  // const student = studentsData[id];
  //  console.log(student)


  // useEffect 
  // initial things and mounting happening place.

    //  useEffect(()=>{
    //    console.log("effcets calleed")
    //  } , [idx])
    
   
  
        const updateStudentData = ()=>{
  
          //  console.log(editId);
  
         // 1. select and find our student
          const editStudentsIndex = studentsData.findIndex((ele)=> ele.id === editId )
          // console.log(editStudentsIndex)
  
        // 2. change the updated object in the soecific array of data  
        const updatedStudObj = {
          idx,
          name,
          batch,
          gender,
          yearOfExperienece : experience
        } 
        // console.log(updatedStudObj);
  
        // 3. change the updated object in the specific array of data
        studentsData[editStudentsIndex]=updatedStudObj;
        
        // 4.set the students data
        setStudents([...studentsData])
  
        // Update panna vudanae data's aee input field la emmpty aka , add la pana madharie set func pottu empty pani vittru
        setIdx("")
        setName("")
        setBatch("")
        setGender("")
        setExperience("")
        history.push('/details')
      }
        

    return(

    //  <div> EditStudent {id} studid {studid} </div>
    
      <Base 
        tittle= "Edit a Student"
        description= "You Can Edit a Studend Here"
        >
             <div className="input-session">
      <TextField
       fullWidth label="Enter the Id"
       onChange={(event)=>setIdx(event.target.value)}
       value = {idx}
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


     <Button className="add-btn" color="secondary" variant="contained"
              onClick={updateStudentData}>Update data</Button>

             </div>
        </Base>


    );
}
export default EditStudent