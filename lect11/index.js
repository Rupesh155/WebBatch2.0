//   let h2=  document.querySelector("h2")
//  function fun1(){
//     // console.log("hello");
//     h2.innerText="hello"

    
// }

//  let btn=  document.querySelector("button")
//  let body=   document.querySelector("body")
      
//  btn.addEventListener("click",()=>{
//     body.style.backgroundColor="red"

//  })

//  btn.onclick=function(){
//     console.log("hello");
//     body.style.backgroundColor="red"
    
//  }



// let inp=  document.querySelector("input")
//  let h2=   document.querySelector("h2")
// inp.addEventListener("input",(e)=>{
//     // console.log("hello");
//     // console.log(e.target.value);
//     h2.innerText=e.target.value
    
    

// })




 let formEl=  document.querySelector("form")
 formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:formEl[0].value,
        email:formEl[1].value,
        pass:formEl[2].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))
    // localStorage.removeItem("formData")
    
    // console.log(formEl[0].value);
    // console.log(formEl[1].value);
    // console.log(formEl[2].value);  
 })


// localStorage.setItem("key","data")
    
//  let data= localStorage.getItem("key")
//  console.log(data);
 





  
let form2=  document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
   let saveData=    localStorage.getItem("formData")
        let dataObj=  JSON.parse(saveData)
//    console.log(dataObj,"hehehe");
let loginobj={
    email:form2[0].value,
    pass:form2[1].value
}
if(dataObj.email==loginobj.email && dataObj.pass==loginobj.pass){
    prompt("login doneeeee")
}else{
    prompt("errrrrr ")
}
   

})


   