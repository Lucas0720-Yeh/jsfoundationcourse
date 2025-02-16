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

// const calcAge3 = birthYear => 2025 - birthYear;


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
// function cutFruitPieces (fruit) {
//     return fruit * 4

// }

// // function fruitProcessor (apple,orange){
// //     const applePieces = cutFruitPieces (apple)
// //     const orangePieces = cutFruitPieces (orange)
// //     const juice = 'Juice with $(applePieces) pieces of apple and $(orangePieces) pieces of orange'
// //     return juice;
// // }
// // console.log(fruitProcessor(3,6))
// //.





// // 16/02/2025

// //Arrays - Data structure

// // const friend1 = 'Kingsley'
// // const friend2 = 'Avalon'
// // const friend3 = 'Adrian'

// // const friends = friend1 + ', ' + friend2 + ', '+ friend3
// // console.log friends
// const friends = ['Kingsley', 'Avalon', 'Adrian']
// // console.log(friends)
// // // console.log(friends[0])
// // // console.log(friends[1])
// // // console.log(friends[2])
// // // //Array is zero based. (Starts on zero)
// // // console.log (friends.length)
// // //Get the number of elements of the array.
// // //Get the last element of the array.
// // console.log(friends[friends.length-1])
// // friends[2] = 'Massa'

// //We can't change the whole array, only the elements inside.

// //add an element at the end of an array.
// const newFriends = friends.push ('Massa')
// console.log (friends)
// //Adding an element at the start of the array:
// friends.unshift('Lucas')
// console.log(friends)

// //Removing an element at the end of array:
// friends.pop()
// console.log (friends)

// //Removing an element at the beginning of array:
 
// friends.shift()
// console.log(friends)

// //Telling the position in the array:
// console.log(friends.indexOf ('Kingsley'))
// console.log(friends.indexOf('Lucas')) //Not in array, so returns -1.

// // Includes - it will return a true or false value to check if the element is in the array or not.

// console.log (friends.includes('Lucas'))
// console.log (friends.includes('Kingsley'))
// console.log (friends.includes('Avalon'))
// console.log (friends.includes('Massa'))

// if (friends.includes('Kingsley')) {
//     console.log ('You have a friend called Kingsley.')
// }



// OBJECTS - Another data structure

const lucas = {
    firstName: 'Lucas',
    lastName: 'Yeh',
    age: 2025-2010,
    job: 'Student',
    friends: ['Kingsley','Avalon','Adrian']
}

// console.log (lucas)

// const nameKey = 'Name'
// console.log (lucas ['first' + nameKey])

// const interestedIn = prompt('What do you want to know about Lucas? Choose between firstname, last name, jobs and friends.')

// console.log (lucas.interestedIn) //Doesnt work, as interestedIn isnt in the object key.
// UNDEFINED
// console.log (lucas[interestedIn])

console.log (lucas.firstName + ' has ' + lucas.friends.length + ' friends, and his best friend is ' + lucas.friends[0])