
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

let userWord = prompt('inserisci una parola').replace(/\s/g,'');

if (isPalindrome(userWord)) {
    alert('la parola e palindroma');
}else {
    alert('la parola non e palindroma')
}