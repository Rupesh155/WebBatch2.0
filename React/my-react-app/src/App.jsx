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




import React from 'react'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App