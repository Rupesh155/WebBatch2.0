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




import React, { useState } from 'react'

const App = () => {
    let [input,SetInput]=   useState({
      name:"",
      email:"",
      passWord:""
    })
    function fun1(e){
      let  {name,value}=    e.target
      SetInput({...input,[name]:value})
      console.log(input);
      
      
      
      // console.log(e.target);
      
    }
  return (
    <div>
      {/* <h2>{input}</h2> */}
      <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
      <br></br>
      <br></br>
      <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
      <br></br>
      <input  type='email' name="email" onChange={fun1}  value={input.email}/>

    </div>
  )
}

export default App