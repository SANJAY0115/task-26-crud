import { useState } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import Base from './Base/Base';
import AuthPage from './Components/AuthPage';
import DashBoard from './Components/DashBoard';
import NoPage from './Components/NoPage';
import StudentProfile from './Components/StudentsProfile';
import { StudentDetails } from './Components/StudentDetails';
import WelcomePage from './Components/WelcomePage';
import { data } from './Data/data';
import AddStudents from './Components/AddStudents';
import EditStudent from './Components/EditStudent';




function App() {
   // keep the useState which holds the data - globally , so that we can noww send it to multiple component (routers)
   const [studentsData , setStudents] = useState(data)

  return (
    <div className="App">

   <Switch>

      <Route exact path = "/">
         <WelcomePage/> 
      </Route>

      <Route path="/dashboard">
         <DashBoard/>
      </Route>

      <Route path = "/register">
         <AuthPage/>
      </Route>

      <Route path = "/details">
         <StudentDetails 
           studentsData = {studentsData}
           setStudents = {setStudents}
         />
      </Route>

      <Route path = "/students">
         <Redirect to = "/details"/> 
      </Route>

      <Route path = "/student/:id">
       <StudentProfile
         studentsData = {studentsData}
       />
      </Route>

      <Route path = "/add-data">
        <AddStudents
        studentsData = {studentsData}
        setStudents = {setStudents}
        />
      </Route>

      <Route path = "/edit/:id">
       <EditStudent
       studentsData = {studentsData}
       setStudents = {setStudents}
       />
      </Route>
    
      <Route path = "**">
         <NoPage/>
      </Route>

  



   </Switch>
   

    </div>
  );
}

export default App;
