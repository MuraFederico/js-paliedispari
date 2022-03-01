/////////////// CONTROLLO PALINDROMI ///////////////


function isPalindrome(wordToCheck) {
    let result = false;
    let previousResult = true;
    let indexMirror = wordToCheck.length - 1;

    for (let i = 0; i < wordToCheck.length; i++) {
        if (wordToCheck[i] == wordToCheck[indexMirror] && previousResult == true) {
            result = true;
        } else {
            result = false;
            previousResult = false;
        }
        indexMirror -= 1;    
    }
    return result;
};


const btnCheck = document.querySelector('.check');
const output = document.querySelector('#output');

const userWordInput = document.querySelector('#user-word').value.replace(/\s/g,'');

btnCheck.addEventListener('click', function(){

    //se fuori da event listener non aggiorna l'output
    //
    let userWord = userWordInput.value;

    if (isPalindrome(userWord)) {
        output.innerHTML = 'la parola e palindroma';
    }else {
        output.innerHTML = 'la parola non e palindroma';
    }

    
    
})



/////////////// PARI O DISPARI ///////////////


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(nunmberToCheck){

    if (nunmberToCheck % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


const btnCheck2 = document.querySelector('.check2');
const output2 = document.querySelector('#output2');

btnCheck2.addEventListener('click', function(){
    const userGuess = document.querySelector('#user-guess').value;
    const userNumber = parseInt(document.querySelector('#user-number').value);
    const generatedNumber = randomNumber(1, 5);

    let guessEven;
    let finalNumber = 0;

    if (userGuess == 'pari') {
        guessEven = true;
    }
    if (userGuess == 'dispari') {
        guessEven = false;
    }

    finalNumber = generatedNumber + userNumber;

    if (isEven(finalNumber) == guessEven) {
        output2.innerHTML = 'HAI INDOVINATO!'
    } else {
        output2.innerHTML = 'NON HAI INDOVINATO!'
    }

    console.log(generatedNumber);
    console.log(finalNumber);

})