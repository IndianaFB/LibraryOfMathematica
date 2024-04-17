//#region Find My Factors
function calculateFactors(){
    //Initializes inputNumber and gives it the value of the input from numberInput, parsed as an integer
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    //Initializes the various divs involved in the function
    const resultDiv = document.getElementById('result');
    const backgroundDiv = document.getElementById('background');
    const introdiv = document.getElementById('introdiv');
    //Prints most recent result, wipes older result
    resultDiv.innerHTML = 'Factors of ' + inputNumber + ': ';
    //Defines isPrime by running a check for primes on the input number (boolean)
    const isPrime = checkPrime(inputNumber);

    //Clears the input field ready for the next calculation
    document.getElementById('numberInput').value = '';

    for (let i = 1; i <= inputNumber; i++){
        if (inputNumber % i === 0){
            if(i === inputNumber){
                resultDiv.innerHTML += `${i}`;
            }
            else{
                resultDiv.innerHTML += `${i}, `;
            }
            
        }
    }
    if(isPrime){
        day(backgroundDiv, resultDiv, introdiv);

    }
    else{
        night(backgroundDiv, resultDiv);
    }

    // const resultHeading = document.getElementById('resultHeading');
    // resultHeading.textContent = inputNumber;
}

function checkPrime(num){
    if(num <= 1){
        return false;
    }
    if(num === 0){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function day(backgroundDiv, resultDiv, introdiv){
    backgroundDiv.style.backgroundColor = 'bisque';
    resultDiv.style.color = 'brown';
    resultDiv.style.textShadow = '0 0 10px orange';
    introdiv.h1.style.color = 'brown';
    introdiv.style.textShadow = '0 0 10px orange';

}

function night(backgroundDiv, resultDiv){
    backgroundDiv.style.backgroundColor = '#0000BB';
    resultDiv.style.color = 'white';
    resultDiv.style.textShadow = '0 0 10px cyan';
}

function handleKeyPress(event){
    if(event.key === "Enter"){
        calculateFactors();
    }
}
//#endregion