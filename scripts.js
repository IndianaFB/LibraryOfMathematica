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
    //Defines isPrime by running a check for primes on the input number (boolean result: either T or F)
    const isPrime = checkPrime(inputNumber);
    //Clears the input field ready for the next calculation
    document.getElementById('numberInput').value = '';

    //Loops from 1 until i === inputNumber
    for (let i = 1; i <= inputNumber; i++){
        //Checks if there are any remainders after dividing inputNumber by i. If there are any remainders, then the current value of i cannot be a factor of inputNumber
        if (inputNumber % i === 0){
            //This if-else is for the purpose of string presentation
            //If i === inputNumber it means we've reached the end of our string, so no commas are printed.
            if(i === inputNumber){
                resultDiv.innerHTML += `${i}`;
            }
            //Else it means we are still printing factors and so we add a comma to the string for proper presentation
            else{
                resultDiv.innerHTML += `${i}, `;
            }
            
        }
    }
    //This if-else uses isPrime, which runs checkPrime on the input number
    //If our input is prime, the background colours change to a "day" theme
    if(isPrime){
        day(backgroundDiv, resultDiv, introdiv);

    }
    //Otherwise they change to a "night" theme
    else{
        night(backgroundDiv, resultDiv);
    }
}
//This function checks if the inputNumber is prime - by default it returns true but returns false if other statements are met first
function checkPrime(num){
    //This if statement checks to make sure the number is above 0
    if(num <= 1){
        return false;
    }
    //This if statement checks to make sure the number is not 0
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