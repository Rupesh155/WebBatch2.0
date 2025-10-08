

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  let [data,SetData]=    useState({
    name:"",
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
        <legend>SignUp</legend>
      <input type='text'  onChange={fun1}  name='name' value={data.name} placeholder='Enter your name'/>
      <br></br>
      <br></br>
      <input type='email'  onChange={fun1}  name='email' value={data.email} placeholder='Enter your email'/>
      <br></br>
      <br></br>
      <input type='passWord'  onChange={fun1}  name='passWord' value={data.passWord} placeholder='Enter your password'/>

   <br></br>
   <br></br>
<button   onClick={done}>click</button>
</fieldset>

<Link  to={'/login'}>  
<button>Login</button>
</Link>
    </div>
  )
}

export default SignUp
