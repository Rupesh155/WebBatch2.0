


let key="9f6290d6cda9a36a63755fadee71f83d"
let city="jabalpur"


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).
then((data)=>{
    return data.json()

}).then((res)=>{
    console.log(res);
    

})