//'use strict'
// - strict mode helps you detect errors

/*
// Strict Mode - a special mode that we can activate
in JS and makes it easier for us to write a secure JS code
 (It helps us introduce bugs in our code) 
 STRICT MODE has to be in the FIRST LINE of the JS file.
// Notes -
*/
 
// let hasDriversLicense = false;
// const passTest = true;
 
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log ('I can drive')
// // Reserved Words :
// //Private
// //Interface
 

 
// /*
// // Activating Strict Mode
// */
 
 
// /*
// // Functions
// // Notes -  
// */
// const age = 21;
// console.log (age);


// function logger () {
//     console.log ("My name is Lucas");
// }
// logger()




//  function fruitProcessor (appleNum, orangeNum) {
//     const juice = 'Juice with ${appleNum} apples and ${orangeNum} orange';
//     return juice;

//  }

//  const fruitJuice = fruitProcessor(5,3);
//  console.log (fruitJuice)
//Functions are just valies, or numbers or a string to return

// //Function declaration
// function calcAge1 (birthYear) {
//     const age = 2025-birthYear;
//     return age;
// }
// const age1 = calcAge1(2010)
// console.log (age1)

// //Function Expression
// const calAge2 = function(birthYear) {
//     return 2025 = birthYear;
// }
// const age2 = calcage2(2000)
// console.log (age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025- birthYear
//     const retirement = 65-age
//     return ('${firstName} retires in ${retirement' years) ;

// }

//Arrow function -  a shorter form of expression functions

const calcAge3 = birthYear => 2025 - birthYear;


// Main difference - We can call function declarations before they are defined,
// but not expression.



 //PAssing data then returning it
//appleNum or orangeNum are called parameters (they are specific in only to this function)
// The parameters are like a palceholder, holding data or value that we can pass by function
// the 5 and 3 are called arguements
// The arguements are actual values that we are passing 
/*
// Function Declarations vs. Expressions
// Notes -  
Function is a simple piece of code that we can reuse over and over again in our code.
 It is similar to a variable

 IMPORTANT : Dont repeat the same code, use functions or vairables to represent it.
*/
 
 
/*
// Arrow functions
// Notes -
*/
 
 
/*
// Functions Calling Other Functions
// Notes -
*/
function cutFruitPieces (fruit) {
    return fruit * 4

}

function fruitProcessor (apple,orange){
    const applePieces = cutFruitPieces (apple)
    const orangePieces = cutFruitPieces (orange)
    const juice = 'Juice with $(applePieces) pieces of apple and $(orangePieces) pieces of orange'
    return juice;
}
console.log(fruitProcessor(3,6))