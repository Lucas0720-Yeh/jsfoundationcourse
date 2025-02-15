const calcAverage = (num1, num2, num3) => (num1 + num2 +num3) / 3

let scoreDolphins1 = Number(calcAverage(44,23,71))
let scoreDolphins2 = Number(calcAverage(85,54,41))
let scoreKoala1 = Number(calcAverage(65, 54, 49))
let scoreKoala2 = Number(calcAverage(23, 34, 27))

console.log ("The average score for Dolphins1 is " + scoreDolphins1)
console.log ("The average score for Dolphins2 is " + scoreDolphins2)
console.log ("The average score for Koala1 is " + scoreKoala1)
console.log ("The average score for Koala2 is " + scoreKoala2)

function checkwinner (dolphinScore, koalaScore) {
    if (dolphinScore > 2 * koalaScore) {
        return ("Team Dolphins has won, and the score is" + dolphinScore + " : " + koalaScore)
    }
    else if (koalaScore > 2 * dolphinScore) {
        return ("Team Koala has won, and the score is "+  dolphinScore + " : " + koalaScore)
    }
    else 
        return ("The competition ended in a draw.")
}

console.log ("For the first game, " + checkwinner(scoreDolphins1, scoreKoala1))
console.log ("For the second game, " + checkwinner(scoreDolphins2, scoreKoala2))
