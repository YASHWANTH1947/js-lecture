const keys=document.querySelectorAll(".button");
keys.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        const body=document.querySelector("body");
        body.style.backgroundColor=e.target.id;
    })
})