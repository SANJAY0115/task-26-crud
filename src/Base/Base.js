import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react"
import { useHistory } from "react-router-dom";


function Base({tittle,description,children}) {

   const history = useHistory();

   const logoutMethod = ()=>{
      localStorage.removeItem("user-name")
      history.push("/dashboard")
   }

    return(

       <div className="main-component">

<AppBar position = "static">
    <Toolbar variant = "dense">

       <Button 
      color="inherit"
      onClick={()=>history.push("/dashboard")}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name"> DashBoard</span> 
      </Button>


       <Button 
       color="inherit"
       onClick={()=>history.push("/details")}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name"> Students List</span>   
      </Button>

       <Button
        color="inherit" 
       onClick={()=>history.push("/register")}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name">Login</span> 
        </Button>

       <Button 
       color="inherit" 
       onClick={()=>history.push("/aityngugh")}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name"> No Page</span> 
       </Button>

       <Button
        color="inherit" 
        onClick={()=>history.push("/add-data")}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name">  Add Data</span>
       </Button>

       <Button
        color="inherit" 
        onClick={logoutMethod}>
      <span className="icon"> 🏛 </span>
      <span className="nav-name">LogOut</span>
        </Button>

    </Toolbar>
</AppBar>
           
         <header>
            <h1 className="heading">{tittle}</h1>
         </header>


         <main className="main-segment">
            <h2>{description}</h2>
            
            <div className="children-segment">
                {children}
            </div>
         </main>


        </div> 
    )
}

export default Base;


<AppBar position = "static">
    <Toolbar variant = "dense">
       <Button>Home</Button>
       <Button>DashBoard</Button>
       <Button>Students Login</Button>
       <Button>Login</Button>
    </Toolbar>
</AppBar>
