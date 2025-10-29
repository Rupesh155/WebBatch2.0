import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from './Context'

const OnePage = () => {
 let [showData,SetShowData]=  useState()

let {id}=   useParams()

   let {state}=   useContext(Context)
  //  console.log(state,"heheh");
    // let data=    state.apiData.find((a,b)=>{
    //       return id==a.id

    //     })
        // console.log(data,"hehe");
        // SetShowData(data)
        
   

console.log(id);

  return (
    <div>
    <h2>onepage</h2>
    </div>
  )
}

export default OnePage