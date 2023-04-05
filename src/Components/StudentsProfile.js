import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import Base from '../Base/Base'


const StudentProfile = ({studentsData})=>{
  //console.log(studentsData)
  const {id} = useParams();   
  //console.log(id)
  const student = studentsData[id]
    return(
        <Base
        tittle = "Student Profile"
        description = "Invidiual Student Details"
        >
          <div>
            <h2>StudentName : {student.name}</h2>
            <p>Gender : {student.gender} </p>
            <p>Batch : {student.batch} </p>
            <p>Years of Experience : {student.yearOfExperienece} </p>
          </div>   
        </Base>
    )
}

export default StudentProfile