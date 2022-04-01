// JAVASCRIPT EXERCISES
//
// 1. Variables and Expressions
//
// Exercise 1
console.log("1. VARIABLES AND EXPRESSIONS")

let myName = "John"
console.log("Exercise 1: My name is " + myName)


// Excercise 2

let myAge = 39
console.log("Exercise 2: I am " + myAge + " years old")


// Exercise 3

let juliaAge = 32
let ageDiff = myAge - juliaAge
console.log("Exercise 3: John is " + ageDiff + " years older than Julia")

// 2. Conditional statements
//
// Exercise 4
console.log("2. CONDITIONAL STATEMENTS")

if (myAge > 21) {
    console.log("Exercise 4: John is older than 21.")
} else {
    console.log("Exercise 4: John is younger than 21.")
}


// Exercise 5

if (myAge > juliaAge) {
    console.log("Exercise 5: John is older than Julia.")
} else if (myAge == juliaAge) {
    console.log("John and Julia share the same age.")
} else {
    console.log("Julia is older than John.")
}

// 3. Sorting an Array
//
// Exercise 1
console.log("3. SORTING AN ARRAY")

let quokkas = ["ottavia", "raul", "marta", "karolina", "jess", "alex", "angelina", "arno", "john"]
let quokkasSorted = quokkas.sort()
console.log("Exercise 1: The first quokka is " + quokkasSorted[0])
let lastParticipant = quokkasSorted.length - 1
console.log("Exercise 1: The last quokka is " + quokkasSorted[lastParticipant])

for (let i = 0; i < quokkasSorted.length; i++) {
    console.log("Exercise 1: " + i + " " + quokkasSorted[i])
}


// Exercise 2

let classAges = [31, 34, 29, 25, 39, 46, 79, 65]
var x = 0;

while (x < classAges.length) {
    console.log("Exercise 2: while loop: " + classAges[x])
    x++
}

var x = 0

while (x < classAges.length) {
    if (classAges[x] % 2 == 0)
        console.log("Exercise 2: While loop even numbers: " + classAges[x])
    x++
}

for (let i = 0; i < classAges.length; i++) {
    console.log("Exercise 2: for loop: " + classAges[i])
}


// 4. Arrays and Functions
//
// Exercise 3 - Find the lowest number of an array (Math.min())
console.log("4. ARRAYS AND FUNCTIONS")

function lowestNumber(myParameter) {
    console.log("Exercise 3: Lowest number of all ages: " + Math.min(...myParameter)); // If we send an array to Math.min or Math.max methods we will get NaN. That is because Math.min or Math.max functions expect distinct variables and not an array. With ES6/ES2016 destructuring assignment it becomes easier: The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. … in front of an array will convert array to distinct variables and send them to the function, which is equivalent to Math.min(1, 2, 3). https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
}

lowestNumber(classAges)


// Exercise 4 - Find the largest number of an array (Math.max())

function highestNumber(myParameter) {
    console.log("Exercise 4: Highest number of all ages: " + Math.max(...myParameter));
}

highestNumber(classAges);


// Exercise 5 - Pass two parameters through a function and return a specific index item

var index = 1

function findIndexitem (myParameter1, myParameter2) {
    console.log("Exercise 5: Return index item " + myParameter2 + ": " + myParameter1[myParameter2]);
}

findIndexitem(classAges, index);


// Exercise 6 - Find doubles in an array

let arrayNumbers = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10]
var arrayDoubles = []

function findDoubles (myParameter) {
    for (i = 0; i < arrayNumbers.length; i++) {
        if (myParameter[i] == myParameter[i + 1]) {
            arrayDoubles.push(myParameter[i])
        }
    }
    console.log("Exercise 6: Return doubles from array: " + arrayDoubles)
}

findDoubles(arrayNumbers)
    

// Exercise 7 - toString()


let myColor = ["Red", "Green", "White", "Black"]

function elementsToString () {
    console.log("Exercise 7: Join array elements to string: " + myColor.toString())
}

elementsToString ()


// 5. JAVASCRIPT STRING
//
// Exercise 1 - Reverse a number
console.log("5. JAVASCRIPT STRING")

let number = 32443
let reversedString = ""

function reverseNumber() {
    console.log("Exercise 1: Original number: " + number)
    let numberString = number.toString()
    for (i = numberString.length - 1; i >= 0; i--) { // be sure to reduce the length of the string by one as the length is always one unit higher than the indexed length, which starts at 0, not at 1.
       reversedString += numberString[i]
    }

    console.log("Exercise 1: Reversed number: " + reversedString)
}

reverseNumber()


// Exercise 2 - Order a string in alphabetical order

let webmaster = "webmaster"
let arrayWebmaster = []

function orderAlphabetical(myParameter) {
    for (i = 0; i < webmaster.length; i++) {
        arrayWebmaster.push(myParameter[i])
        arrayWebmaster.sort()

            }
    console.log("Exercise 2: Order string alphabetically: " + arrayWebmaster)
}

orderAlphabetical(webmaster)


// Exercise 3 - Convert first letter of word to uppercase

