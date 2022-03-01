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
}


const btnCheck = document.querySelector('.check');
const output = document.querySelector('#output');


btnCheck.addEventListener('click', function(){
    let userWord = document.querySelector('#user-word').value;

    if (isPalindrome(userWord)) {
        output.innerHTML = 'la parola e palindroma';
    }else {
        output.innerHTML = 'la parola non e palindroma';
    }

    userWord.value = '';
    // console.log(userWord)
})



///////////////
