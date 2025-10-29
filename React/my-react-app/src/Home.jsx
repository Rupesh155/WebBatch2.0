// // import React, { useState } from 'react'

// // const Home = () => {



       
// //     // function fun1(){
// //     //     SetCount(count+1)
// //     // }
// // //     // function fun2(){
// // //     //     SetCount(count-1)
// // //     // }
// // //     // function fun3(){
// // //     //     SetCount(0)
// // //     // }
// // //     let [count, SetCount]=    useState()
// // //     setInterval(()=>{
// // //         SetCount(new Date().toLocaleTimeString())
// // //     })

// // //   return (
// // //     <div>
// // //         <h2> {count}</h2>
 
// // //         {/* <button onClick={()=>SetCount(count+1)}>++</button>
// // //         <button onClick={()=>SetCount(count-1)}>--</button>
// // //         <button onClick={()=>SetCount(0)}>reset</button> */}

// // //     </div>
// // //   )
// // // }

// // // export default Home



// // // import React from 'react'

// // // const Home = () => {
// // //   let arr=[{id:1,name:"ankit"}]

// // //   return (
// // //     <div>
// // //       {
// // //         arr.map((a,b,c)=>{
// // //           return(<div>
// // //             <h1>{a.name}</h1>
// // //           </div>)

// // //         })
// // //       }
// // //     </div>
// // //   )
// // // }

// // // export default Home


// // import React, { useEffect, useState } from 'react'
// // import   './App.css'
// // const Home = () => {
// //      let [ApiData,SetApiData]=useState([])
// //      useEffect(()=>{
// //       fetch('https://jsonplaceholder.typicode.com/todos')
// //       .then((res)=>{
// //         return res.json()

// //       }).then((data)=>{
// //         console.log(data);
// //         SetApiData(data)  
// //       })
// //      },[])       
// //   return (
// //     <div>

// // {
// //   ApiData.map((a)=>{
// //     return(<>
// //     <p id='one'>{a.id}</p>
// //     <h2> {a.title}</h2>
// //     </>)

// //   })
// // }

// //       {/* <h3>{count}</h3>
// //       <button onClick={()=>SetCount(count+1)}>click</button>
// //       <h3>{city}</h3>
// //       <button onClick={()=>{SetCity("bhopal")}}>Change</button> */}
// //     </div>
// //   )
// // }

// // export default Home

// // https://dummyjson.com/recipes

// // import React, { useEffect, useState } from 'react'
// // import './App.css'
// // import { Link } from 'react-router-dom'
// // const Home = ({cart,SetCart,  apiData,SetData,filteredddData,SetFilteredddData}) => {


// //       let arr=[1,2,3,4,5]
// //       let arr1=[6,7,8,...arr]
// //       console.log(arr1,"rrrr");
      

      







// //      console.log("heheheheh");
     
// //   useEffect(()=>{
// //     fetch("https://dummyjson.com/recipes").then((res)=>{
// //       return res.json()

// //     }).then((data)=>{
// //       console.log(data.recipes);
// //       SetData(data.recipes)
// //       SetFilteredddData(data.recipes)
      

// //     })

// //   },[])

// //   function deletee(id){
// //     // console.log(id);
// //   let newArrr=   apiData.filter((a,b)=>{
// //       return  b!==id

// //     })
// //     SetData(newArrr)

    
// //   }
// //   function fun1(){
// //    let Data1=  [...apiData].sort((a,b)=>{
// //       return a.rating-b.rating
      
// //     })
// //     console.log(Data1,"SORTEDDDDD");
    
// //     SetData(Data1)


// //   }
// //   function fun2(){
// //     let Data1=  [...apiData].sort((a,b)=>{
// //       return b.rating-a.rating
      
// //     })
// //     console.log(Data1,"SORTEDDDDD");
    
// //     SetData(Data1)

// //   }

// //   function lunch(searchValue){
// //    let filtereddData=   apiData.filter((a)=>{
// //       return a.mealType[0]==searchValue

// //     })
// //     SetFilteredddData(filtereddData)

// //   }

// //   function dinner(a){
// //     let filtereddData=   apiData.filter((a)=>{
// //       return a.mealType[0]==a

// //     })
// //     SetFilteredddData(filtereddData)


// //   }
// //   return (
// //       <> 
// //       <Link  to={'/cart'}>  
// //        <button>add to Cart {cart.length}</button>
// //        </Link>
// //     <div>
     
// //       <button onClick={fun1}>acs</button>
// //       <button onClick={fun2}>des</button>
// //       <button onClick={()=>lunch("Lunch")}>lunch</button>
// //       <button onClick={()=>dinner("Dinner")}>dinner</button>
// //       <button>breakfast</button>


// //       {
// //         filteredddData.map((a,index)=>{
// //           return(<>
// //           <div id='card'>
// //           <img  src={a.image}/>
// //             <p>{a.name}</p>
// //             <p> Rating: {a.rating}</p>
// //          <button  onClick={()=> SetCart([...cart,a])}>add </button>
           
// //           </div>
// //           </>)
// //         })
// //       }
// //     </div>
// //     </>
// //   )
// // }

// // export default Home





// //   // let data="      hello hiii"
// //   // console.log(data);
  




// //   let [input,SetInput]=useState("")
// //       let [searchData,SetSearchData]=     useState([])

// //       function fun1(){
// //         if(!input.trim()){
// //           alert("emptyyyy")
// //           return;

// //         }
// //         fetch(`https://dummyjson.com/products/search?q=${input}`).
// //         then((res)=>{
// //           return res.json()

// //         }).then((data)=>{
// //           console.log(data);
          

// //         })



  
// //       }
// //   return (

// //     <div>
// //       <input   type='text' onChange={(e)=>SetInput(e.target.value)}/>
// //       <button   onClick={fun1}>search</button>
      
// //     </div>
// //   )
// // }

// // export default Home


// // // import React from 'react'

// // // const Home = ({data}) => {
   
  
// // //   // a={
// // //   //   data:"ankit"
// // //   // }
  
// // //   return (
// // //     <div>{data}</div>
// // //   )
// // // }

// // // export default Home



// import React, { useContext } from 'react'
// import Context from './Context'
// import './App.css'
// import { Link, useNavigate } from 'react-router-dom'



// const Home = () => {
//      let {dispatch,state}=   useContext(Context)

//      console.log(state.apiData,"heheh");


//    let navigate=    useNavigate()
     
    



     

//      function newPage(id){
//       // console.log(id,"hehe");
//       navigate(`/onepage/${id}`)
      
//       // console.log("heheh");
//       // http://localhost:5173/onepage/1
      
//      }
  
     
   

//   return (
//     <div> 
//       <div> 
//         <Link to={'/cart'}> 
//     <button>Cart</button> 
//     </Link> 
//     </div> 
//    <>
//    {
//         state.apiData.map((a,index)=>{
//            return(<>
//            <div id='card'   onClick={()=>newPage(index)}>
//           <img  src={a.image}/>
//              <p>{a.name}</p>
//             <p> Rating: {a.rating}</p>        
//               <button onClick={()=>dispatch({type:"cart",payload:a})} >add </button>
           
//           </div>
//           </>)
//          })
//       } 
//    </>
//    </div>
//   )
// }

// export default Home
// // https://www.zomato.com/goa/restaurants


// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }
// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export {About}

// export default Home

// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prev) => prev + 1);
//         // console.log("hello");
        
//       }, 100);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>⏱ Stopwatch</h1>
//       <h2>{formatTime(time)}</h2>
//       <div>
//         <button onClick={() => setIsRunning(true)}>Start</button>
//         <button onClick={() => setIsRunning(false)}>Stop</button>
//         <button onClick={() => setTime(0)}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react'

// const Home = () => {
//  let [count,SetCount]=  useState(0)

// //  console.log("hello");
// useEffect(()=>{
//   console.log("hiiii");
  
// },[])
 
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>SetCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default Home


  


import React, { useReducer } from 'react'

const Home = () => {
  function reduser(count,action){
    if(action.type=="++"){
      return count+1;
    }else if(action.type=='--'){
      return count-1
    }else if(action.type=='reset'){
      return 0
    }
    else{
      return count
    }

  }
    let [count,dispatch]=     useReducer(reduser,0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type:"++"})}>++</button>
      <button onClick={()=>dispatch({type:"--"})}>--</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>


    </div>
  )
}

export default Home