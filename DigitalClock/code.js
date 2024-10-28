
const clock=document.querySelector("#clock")

// setInterval->to repeat action after some time 
setInterval(()=>{
    let time=new Date();
clock.innerHTML=time.toLocaleTimeString();
},1000)