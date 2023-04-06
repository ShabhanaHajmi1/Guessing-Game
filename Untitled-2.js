
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
function checkGuess() {
    let guessedNumber=parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too High!!!..";
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too low!!!...";
    }
    else{
        gameResult.textContent="great Congrats..";
        gameResult.style.color="green";
    }
    
}