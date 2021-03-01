//Declaring a function
function sumTwoDigits(digitOne, digitTwo) {
    return digitOne + digitTwo
}


// // Run the function
console.log(sumTwoDigits(8,2));


function greeting() {
    console.log('hello world');

}

greeting();


function sumNumbers(numOne = 4, numTwo = 5, b, c) {
    let add = b + c;
    console.log(add);
    return numOne + numTwo + add;
}

console.log(sumNumbers(1,2,10, 20));

function add() {
    // declaring a new variable thats holding a 0
    let sum = 0;

    // for loop - loop through our list of arguments
    for (let i = 0; i < arguments.length; i++) {
        console.log('currently at loop #' + i);
        sum += arguments[i];
        console.log(sum);
    }

}

sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);