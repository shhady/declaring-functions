/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }


const welcome = () => {
    const welcome ='Welcome to Appleseeds Bootcamp!';
    return welcome;
}
console.log(welcome());              

// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

const power = (a) =>{
    const My = a;
    const power = Math.pow(My, 2);
    return power;
}

console.log (power(5));                                                       


// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }

const sum = (a, b = 5) =>{
    let myNumber = a;
    // const b = 5;
    let sum = myNumber + b;
    return sum;
}

console.log(sum(5));

// // From function expressions to function declarations
// const hello = () => "Hello!";

function hello (){
    return '"Hello!"';
}
console.log(hello());

// const squareRoot = a => Math.sqrt(a);

function squareRoot (a){
    return Math.sqrt(a)
}
console.log(squareRoot(3));
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers (a,b) {
    return Math.random() * (a - b) + b;
}
console.log(randomNumbers(1,6));


