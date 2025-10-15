// // import { createContext } from "react";

import { createContext, useEffect, useReducer } from "react";

let   Context=    createContext()

export default Context

const ContextP=({children})=>{
    let data={
        apiData:[],
        cart:[]
    }

    function reduser(state,action){
        
        if(action.type=="FETCH_DATA"){
            return{
               apiData:action.payload
            }

        }
        else if(action.type=="cart"){
            return {
                ...state,cart:[action.payload]
            }
        }

    }

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json()

        }).then((data)=>{
            dispatch({type:"FETCH_DATA",payload:data.recipes})

        })
    },[])

    let [state, dispatch]=    useReducer(reduser,data)
    return(<div>
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>

    </div>)
}


export {ContextP}








// // let Context=  createContext()


// // export default Context




// import { createContext, useReducer, useEffect, useState, useContext, useCallback, useMemo } from 'react'
//  export const Context= createContext()

//  const initialData={
//     data:[],
//     cartData:[]
//  }

//  function reduser(state,action){
//     if(action.type=="FETCH_DATA"){
//         return{
//             ...state,data:action.payload
//         }
//     }
//     else if(action.type==="addToCart"){
         
//         let existingItem=    state.cartData.find(item=>item.id==action.payload)

//         if(existingItem){
//             return{
//                 ...state,
//                 cartData:state.cartData.map(item=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
//             }

//         }
//         else{
//             return{
//                 ...state,
//                 cartData:[...state.cartData,{...action.payload,quantity:1}]
//             }
//         }
//         // {
//         //     cartData{
//         //         id:1,
//         //         title:"hehe",
//         //         iamge:"hehehe",
//         //         quantity:1
//         //     }
//         // }

//         // return{
//         //     ...state,
//         //     cartData:[...state.cartData,action.payload]

//         // }
//     }

//     else if(action.type==="increment"){
//         return{
//             ...state,
//             cartData:state.cartData.map(item=>item.id===action.payload?{...item,quantity:item.quantity+1}:item)
//         }

//     }

//     else if(action.type==="decrement"){
//         return{
//             ...state,
//             cartData:state.cartData.map(item=>item.id===action.payload?{...item,quantity:item.quantity-1}:item).filter(a=>a.quantity>0)
//         }
//     }





//     else if(action.type=="delet"){
//         return{
//             ...state,
//             cartData:state.cartData.filter((data,key)=>{
//                 return key!==action.payload

//             })
//         }
//     }


//     else if(action.type=="max"){
//         return{
//             ...state,
//             data:[...state.data.sort((a,b)=>b.rating-a.rating)]
//         }
//     }
//     else if(action.type=="min"){
//         return{
//             ...state,
//             data:[...state.data.sort((a,b)=>a.rating-b.rating)]
//         }
//     }
//     else{
//         return state
//     }


//  }

//  const ContextP=({children})=>{
//       const [state,dispatch] =  useReducer(reduser,initialData)

//       useEffect(()=>{
//         // console.log("hello");
//         fetch('https://dummyjson.com/recipes').
//         then((res)=>{
//             return res.json()

//         }).then((data)=>{ 
//             dispatch({type:"FETCH_DATA" ,payload:data.recipes})   
//         })
//     },[])

//     return(
//         <Context.Provider value={{state,dispatch}}>
//         {children}
//         </Context.Provider>
//     )

//  }


//  export default ContextP



// //  useEffect,useState ,useReducer,react-router-dom,props,useContext

// // useRef , useCallback,useMemo,












