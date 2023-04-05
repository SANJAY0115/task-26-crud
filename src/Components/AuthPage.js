import { Button, FormControl, FormLabel, Input} from '@mui/material'
import { typography } from '@mui/system'
import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'

import Base from '../Base/Base'
import { authdata } from '../Data/authdata'

const AuthPage = () => {
  
  const [auth , setAuth] = useState(authdata)
//  console.log(auth);

  const [loginName , setLoginName] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState(false)

  const history = useHistory()
  
  const loginUser = ()=> {
    if( loginName === auth[0].name && password === auth[0].password )
    {
      //console.log("Correct name and password")

       localStorage.setItem("user-name",loginName)
       setError(false)
       history.push("/details")
    }
    else{
      //  console.log("wrong name or password")

       setError(true)
    }
  }

  return (
 <Base
 tittle= "Please login or signup"
 description = "Authentication Page"
 >

   <div className='login-page'>
      
      <br/> <br/>
          
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange = {(e)=>setLoginName(e.target.value)}
              value={loginName}
            />
          </FormControl> {" "} 
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              value = {password}
            />
          </FormControl>

           
       <br/>  <br/>
          <Button onClick={loginUser}
          sx={{ mt: 1 /* margin top */ }}>Log in</Button>

      <br/>

      { error ? 
          <typography>
           Invalid Credentials
          </typography> 

        :   ""
       
      }   
        
      </div>  
  
 </Base>

  )
}

export default AuthPage