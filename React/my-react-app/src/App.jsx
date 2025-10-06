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

import React, { useState } from 'react'

const App = () => {
     let [input,SetInput]=      useState("")
       let [data,SetData]=    useState([])
  function fun1(e){
    // console.log(e.target.value);
    SetInput(e.target.value)
 
  }
  function done(){
    SetData([...data,input])

  }
  return (
    <div>

      <input onChange={fun1}/>
      <button onClick={done}>click</button>
      {
        data.map((a)=>{
          return(<>
          <h2>{a}</h2>
          </>)

        })
      }
    </div>
  )
}

export default App