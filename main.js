// JAVASCRIPT EXERCISES
//
// 1. Variables and Expressions
//
// Exercise 1

let myName = "John"
console.log("My name is " + myName)


// Excercise 2

let myAge = 39
console.log("I am " + myAge + " years old")


// Exercise 3

let juliaAge = 32
let ageDiff = myAge - juliaAge
console.log("John is " + ageDiff + " years older than Julia")

// 2. Conditional statements
//
// Exercise 4

if (myAge > 21) {
    console.log("John is older than 21.")
} else {
    console.log("John is younger than 21.")
}


// Exercise 5

if (myAge > juliaAge) {
    console.log("John is older than Julia.")
} else if (myAge == juliaAge) {
    console.log("John and Julia share the same age.")
} else {
    console.log("Julia is older than John.")
}

// 3. Sorting an Array
//
// Exercise 1

let quokkas = ["ottavia", "raul", "marta", "karolina", "jess", "alex", "angelina", "arno", "john"]
let quokkasSorted = quokkas.sort()
console.log("The first quokka is " + quokkasSorted[0])
let lastParticipant = quokkasSorted.length - 1
console.log("The last quokka is " + quokkasSorted[lastParticipant])

for (let i = 0; i < quokkasSorted.length; i++) {
    console.log(i + " " + quokkasSorted[i])
}


// Exercise 2

let classAges = [31, 34, 29, 25, 39, 46, 79, 65]
let x = 0

while (x <= classAges.length) {
    console.log("while loop: " + classAges[x])
    x++
}

while (x <= classAges.length) {
    if (classAges[x] % 2 == 0)
        console.log("While loop even numbers: " + classAges[x])
    x++
}

for (let i = 0; i < classAges.length; i++) {
    console.log("for loop: " + classAges[i])
}


// Arrays and Functions
//
// Exercise 3