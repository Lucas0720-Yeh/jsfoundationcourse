'use strict'
const appleNum = Number(prompt("How many apples are there?"))
const orangeNum = Number(prompt("How many oranges are there?"))




function appleJuice () {
    console.log ("Fruit processor produces apple juice on Monday.")
}
function orangeJuice () {
    console.log ("Fruit processor produces orange juice on Tuesday.")
}
function appleOrangeJuice () {
    console.log ("Fruit processor produces apple juice on Wednesday.")
}

if (appleNum > 1 && orangeNum === 0) {
    appleJuice()
}
else if (orangeNum > 1 && appleNum === 0) {
    orangeJuice()
}
else if (appleNum > 1 && orangeNum > 1) {
    appleOrangeJuice()
}
else
    console.log ("You need fruits to put into the fruit processor!")




