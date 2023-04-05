import { Button } from "@mui/material";

import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import Base from "../Base/Base";



const DashBoard = ()=> {
  const history = useHistory()
    return (
        <Base
        tittle = "Batch Welcome To Students App"
        description="Please Click The Below Button To Navigate To Home Page "
      >
       
       <Button onClick={()=>(history.push("/details"))}
        variant="contained">Student Page</Button>

      </Base>
    )
}
export default DashBoard

