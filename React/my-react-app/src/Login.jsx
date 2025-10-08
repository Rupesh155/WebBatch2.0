

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  let [data,SetData]=    useState({
    email:"",
    passWord:""

  })

      
  let [show,SetShow]=    useState({})

  function fun1(e){
        let {name,value}=     e.target
        SetData({...data,[name]:value})
    // console.log(e.target);
    console.log(data);
    
  
  }




  function done(){
    SetShow({...data})
    console.log(show);
    

  }
  return (
    <div>
      {show.name}
      <h2>{show.email}</h2>
      <p>{show.passWord}</p>
      <fieldset>  
        <legend>Login</legend>
 
      <input type='email'  onChange={fun1}  name='email' value={data.email} placeholder='Enter your email'/>
      <br></br>
      <br></br>
      <input type='passWord'  onChange={fun1}  name='passWord' value={data.passWord} placeholder='Enter your password'/>

   <br></br>
   <br></br>
<button   onClick={done}>click</button>
</fieldset>

<Link  to={'/signup'} >  
<button>go to the SignUp page</button>
</Link>
    </div>
  )
}

export default Login
