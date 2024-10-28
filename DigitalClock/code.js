const time=new Date();
const clock=document.querySelector("#clock")
setInterval(()=>{
clock.innerHTML=time.toLocaleTimeString;
},1000)