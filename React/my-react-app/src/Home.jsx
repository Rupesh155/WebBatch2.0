// import React, { useState } from 'react'

// const Home = () => {



       
//     // function fun1(){
//     //     SetCount(count+1)
//     // }
//     // function fun2(){
//     //     SetCount(count-1)
//     // }
//     // function fun3(){
//     //     SetCount(0)
//     // }
//     let [count, SetCount]=    useState()
//     setInterval(()=>{
//         SetCount(new Date().toLocaleTimeString())
//     })

//   return (
//     <div>
//         <h2> {count}</h2>
 
//         {/* <button onClick={()=>SetCount(count+1)}>++</button>
//         <button onClick={()=>SetCount(count-1)}>--</button>
//         <button onClick={()=>SetCount(0)}>reset</button> */}

//     </div>
//   )
// }

// export default Home



// import React from 'react'

// const Home = () => {
//   let arr=[{id:1,name:"ankit"}]

//   return (
//     <div>
//       {
//         arr.map((a,b,c)=>{
//           return(<div>
//             <h1>{a.name}</h1>
//           </div>)

//         })
//       }
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'
const Home = () => {
     let [ApiData,SetApiData]=useState([])
     useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{
        return res.json()

      }).then((data)=>{
        console.log(data);
        SetApiData(data)  
      })
     },[])
  

         
  return (
    <div>

{
  ApiData.map((a)=>{
    return(<>
    <p>{a.id}</p>
    <h2> {a.title}</h2>
    </>)

  })
}



      {/* <h3>{count}</h3>
      <button onClick={()=>SetCount(count+1)}>click</button>
      <h3>{city}</h3>
      <button onClick={()=>{SetCity("bhopal")}}>Change</button> */}
    </div>
  )
}

export default Home
