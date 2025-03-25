let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempt = 0;
document.getElementById('submitGuess').addEventListener('click',
    function(){
        const userGuess = Number(document.getElementById('guessInput').value);
        attempt++;
        let resultText = '';

        if (userGuess === randomNumber) {
            resultText = `Congratulations! You've guessed the number 
        ${randomNumber} in ${attempt} attempts.`;
            } else if (userGuess < randomNumber){                
                resultText = 'Too Low! Try again.';
            } else {
                resultText = 'Too high! Try again.';
            }
    
    document.getElementById('result').innerText = resultText;
    document.getElementById('attempt').innerText = `Attempts:
    ${attempts}`;
});


