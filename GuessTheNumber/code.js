let userInput=document.querySelector("#guessField");
let form=document.querySelector(".form");
let privousG=document.querySelector(".guesses");
let remainingG=document.querySelector(".lastResult");
let count=0;
let previousguess='';
let info=document.querySelector(".lowOrHi");
let randomN=parseInt(Math.random()*100+1);

//form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value=(userInput.value);
   validatingF(value);
})


//validating the user input->function
function validatingF(value){
    if(isNaN(value) || value==='' || value<1 || value>100){
        alert("Give a valid number")
        refresh();
    }
    else if(count===11){
        alert("you lose");
        endGame();

    }
    else{
        count+=1;
        checkGuess(value);
    }
}

//refresh function
function refresh(){
    userInput.value='';
    info.value='';
}

//check the input value ->function
function checkGuess(value){
    if(value==randomN){
        alert("You won the game congrats");
        endGame();
    }
    else if(value<randomN){
        privousG.innerHTML+=`${value},`;
        remainingG.innerHTML=`${10-count}`;
info.innerHTML="Your input is lower than the value";

    }
    else if(value>randomN){
        privousG.innerHTML+=`${value},`;
        remainingG.innerHTML=`${10-count}`
        info.innerHTML="Your input is larger than the value";
       
    }
}

//endgame function
function endGame(){
    randomN=parseInt(Math.random()*100+1);
    remainingG.innerHTML=`${10}`;
    privousG.innerHTML='';
    count=0;
    info.innerHTML='';
    refresh();

}