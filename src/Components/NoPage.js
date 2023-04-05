import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import Base from '../Base/Base'

const NoPage = () => {
  const history = useHistory(); 
  return (
 <Base
 tittle= "You Lost Your Way"
 description = "Click The Link Below To Home Page"
 >
  <Button onClick = {()=>history.push("/dashboard")}
  variant="contained" color="primary">
    Home 
  </Button>
 </Base>
  )
}

export default NoPage