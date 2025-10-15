// import React, { useState } from "react"
// const App = () => {
//   console.log("hiiii");
//      let [state,SetState]=     useState("red")
//   function fun1(){
//     // SetState("green")
//     if(state=='red'){
//       SetState("gold")
//     }else{
//       SetState("red")
//     }

//   }
//   return (
//     <div style={{backgroundColor:state}}>
//       <h2> {state}</h2>
//       <button  onClick={fun1}> click</button>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//      let [input,SetInput]=      useState("")
//        let [data,SetData]=    useState([])
//   function fun1(e){
//     // console.log(e.target.value);
//     SetInput(e.target.value)
 
//   }
//   function done(){
//     SetData([...data,input])

//   }

//   function d(id){
//    let filterData=  data.filter((a,b)=>{
//       return b!=id

//     })
//     SetData(filterData)


//   }
//   return (
//     <div>

//       <input onChange={fun1}/>
//       <button onClick={done}>click</button>
//       {
//         data.map((a,index)=>{
//           return(<>
//           <h2>{a}</h2>
//           <button onClick={()=>d(index)}>delet</button>
//           </>)

//         })
//       }
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {
//     let [input,SetInput]=   useState({
//       name:"",
//       email:"",
//       passWord:""
//     })
//     function fun1(e){
//       let  {name,value}=    e.target
//       SetInput({...input,[name]:value})
//       console.log(input);
      
      
      
//       // console.log(e.target);
      
//     }
//   return (
//     <div>
//       {/* <h2>{input}</h2> */}
//       <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
//       <br></br>
//       <br></br>

//       <input  type='email' name="email" onChange={fun1}  value={input.email} placeholder='email'/>
//       <br></br>
//       <br></br>
//       <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
   


//     </div>
//   )
// }

// export default App





// let obj={
//   id:1,
//   name:"ankit"
// }
// let {id}=obj


// import React from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// // http://localhost:5173/
// const App = () => {
//   return (
//     <div>
//       {/* <SignUp/>
//       <Login/> */}
//       <Routes>
//         <Route   path='/'    element={<Home/>}/>
//         <Route   path='/signup'    element={<SignUp/>}/>
//         <Route   path='/login'    element={<Login/>}/>


// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App

// import React ,{useState}from 'react'
// import Home from './Home'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import AddToCart from './AddToCart'

// const App = () => {
//   let [apiData,SetData]=     useState([])
//   let [filteredddData,SetFilteredddData]=     useState([])

//     let [cart,SetCart]=    useState([])
//     console.log(cart,"h=dekhooooo");
    
//   return (
//     <div>
//       {/* <Home/>
//       <SignUp/>
//       <Login/> */}
//       <Routes>
//         <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         <Route   path='/signup'  element={<SignUp/>} />
//         <Route   path='/login'  element={<Login/>} />
//         <Route   path='/cart'  element={<AddToCart cart={cart}/>} />


//       </Routes>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=> SetCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useReducer } from 'react'

// const App = () => {
//   function reduser(count,action){
//     if(action.type=='inc'){
//       return count+1
//     }
//     else{
//       return count
//     }

//   }
//      let [count,dispatch]=    useReducer(reduser, 0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=> dispatch({type:"inc"})}>++</button>
    
//     </div>
//   )
// }

// export default App


// import React, { useReducer } from 'react'

// const App = () => {
//   function  reduser(color,action) {
//     if(action.type=='r'){
//       return 'red'
//     }else if(action.type=='g'){
//       return 'green'
//     }
    
//   }
//      let [color,dispatch]=    useReducer(reduser,'white')
//   return (
//     <div   style={{backgroundColor:color}}>
//       <button onClick={()=>dispatch({type:'r'})}>red</button>
//       <button onClick={()=>dispatch({type:'g'})}>green</button>

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// const App = ({a}) => {
//   let user="hello"
//   console.log(a,"kayayay");
  

//   return (
//     <div>
//       <Home  data={user}  b={a}/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import AddToCart from './AddToCart'
const App = () => {
  return (
    <div>
             <Routes>
        <Route   path='/'  element={<Home   />} />     
  
      
         <Route   path='/cart'  element={<AddToCart/>} />


//       </Routes>
    </div>
  )
}

export default App