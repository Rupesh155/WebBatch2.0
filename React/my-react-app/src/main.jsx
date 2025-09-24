import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


      //  console.log("hehehehehe");
      // fetch("https://jsonplaceholder.typicode.com/todos").
      // then((res)=>{
      //   return res.json()

      // }).then((data)=>{
      //   console.log(data);
        
      // })
