import React from 'react'

const AddToCart = ({cart}) => {
  return (
    <div>
        {
            cart.map((a)=>{
                return (<>
                <div id='card'> 
                    <img  src={a.image}/>
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
         <button  onClick={()=> SetCart([...cart,a])}>add </button>
         </div>
                </>)

            })
        }
    </div>
  )
}

export default AddToCart