const form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#results");
    if(height<=0 || isNaN(height) || height===''){
        result.innerHTML=`please give out a valid input height: ${height}`;
    }
    else  if(weight<=0 || isNaN(weight) || weight===''){
        result.innerHTML=`please give out a valid input weight: ${weight}`;
    }
    else{
        const bmi=((weight)/ ((height*height) / 10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML=`bmi-><span>${bmi}</span> (Under Weight)`;
        }
        else   if(bmi >=18.6 && bmi< 24.9){
            result.innerHTML=`bmi-><span>${bmi}</span> (Normal Range)`;
        }
        else   if(bmi > 24.9){
            result.innerHTML=`bmi-><span>${bmi}</span> (Greater Weight)`;
        }
    }
});
