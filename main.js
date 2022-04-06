// JAVASCRIPT EXERCISES
//
// 1. Variables and Expressions
//
// Exercise 1
console.log("");
console.log("1. VARIABLES AND EXPRESSIONS");
console.log("");

let myName = "John";
console.log("Exercise 1: My name is " + myName);

// Excercise 2

let myAge = 39;
console.log("Exercise 2: I am " + myAge + " years old");

// Exercise 3

let juliaAge = 32;
let ageDiff = myAge - juliaAge;
console.log("Exercise 3: John is " + ageDiff + " years older than Julia");

// 2. Conditional statements
//
// Exercise 4

console.log("");
console.log("2. CONDITIONAL STATEMENTS");
console.log("");

if (myAge > 21) {
  console.log("Exercise 4: John is older than 21.");
} else {
  console.log("Exercise 4: John is younger than 21.");
}

// Exercise 5

if (myAge > juliaAge) {
  console.log("Exercise 5: John is older than Julia.");
} else if (myAge == juliaAge) {
  console.log("John and Julia share the same age.");
} else {
  console.log("Julia is older than John.");
}

// 3. Sorting an Array
//
// Exercise 1

console.log("");
console.log("3. SORTING AN ARRAY");
console.log("");

let quokkas = [
  "ottavia",
  "raul",
  "marta",
  "karolina",
  "jess",
  "alex",
  "angelina",
  "arno",
  "john",
];
let quokkasSorted = quokkas.sort();
console.log("Exercise 1: The first quokka is " + quokkasSorted[0]);
let lastParticipant = quokkasSorted.length - 1;
console.log("Exercise 1: The last quokka is " + quokkasSorted[lastParticipant]);

for (let i = 0; i < quokkasSorted.length; i++) {
  console.log("Exercise 1: " + i + " " + quokkasSorted[i]);
}

// Exercise 2

let classAges = [31, 34, 29, 25, 39, 46, 79, 65];
var x = 0;

while (x < classAges.length) {
  console.log("Exercise 2: while loop: " + classAges[x]);
  x++;
}

var x = 0;

while (x < classAges.length) {
  if (classAges[x] % 2 == 0)
    console.log("Exercise 2: While loop even numbers: " + classAges[x]);
  x++;
}

for (let i = 0; i < classAges.length; i++) {
  console.log("Exercise 2: for loop: " + classAges[i]);
}

// 4. Arrays and Functions
//
// Exercise 3 - Find the lowest number of an array (Math.min())

console.log("");
console.log("4. ARRAYS AND FUNCTIONS");
console.log("");

function lowestNumber(myParameter) {
  console.log(
    "Exercise 3: Lowest number of all ages: " + Math.min(...myParameter)
  ); // If we send an array to Math.min or Math.max methods we will get NaN. That is because Math.min or Math.max functions expect distinct variables and not an array. With ES6/ES2016 destructuring assignment it becomes easier: The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. … in front of an array will convert array to distinct variables and send them to the function, which is equivalent to Math.min(1, 2, 3). https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
}

lowestNumber(classAges);

// Exercise 3: Without the use of Math.min()

var myResult = classAges[0];

function findLowestNumber(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    if (myResult > myParameter[i]) {
      myResult = myParameter[i];
    }
  }
  return myResult;
}

myResult = findLowestNumber(classAges);
console.log("Exercise 3: Lowest number without Math.min(): " + myResult);

// Exercise 4 - Find the largest number of an array (Math.max())

function highestNumber(myParameter) {
  console.log(
    "Exercise 4: Highest number of all ages: " + Math.max(...myParameter)
  );
}

highestNumber(classAges);

// Exercise 4 - Find largest number without Math.max()

var myResult = 0;

function findLargestNumber(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    if (myResult < myParameter[i]) {
      myResult = myParameter[i];
    }
  }
  return myResult;
}

myResult = findLargestNumber(classAges);
console.log("Exercise 4: Largest number without Math.max(): " + myResult);

// Exercise 5 - Pass two parameters through a function and return a specific index item

var index = 1;

function findIndexitem(myParameter1, myParameter2) {
  console.log(
    "Exercise 5: Return index item " +
      myParameter2 +
      ": " +
      myParameter1[myParameter2]
  );
}

findIndexitem(classAges, index);

// Exercise 6 - Find doubles in an array

let arrayNumbers = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10];
var arrayDoubles = [];

function findDoubles(myParameter) {
  for (i = 0; i < arrayNumbers.length; i++) {
    if (myParameter[i] == myParameter[i + 1]) {
      arrayDoubles.push(myParameter[i]);
    }
  }
  console.log("Exercise 6: Return doubles from array: " + arrayDoubles);
}

findDoubles(arrayNumbers);

// Exercise 7 - toString()

let myColor = ["Red", "Green", "White", "Black"];

function elementsToString() {
  console.log(
    "Exercise 7: Join array elements to string: " + myColor.toString()
  );
}

elementsToString();

// 5. JAVASCRIPT STRING
//
// Exercise 1 - Reverse a number

console.log("");
console.log("5. JAVASCRIPT STRING");
console.log("");

let number = 32443;
let reversedString = "";

function reverseNumber() {
  console.log("Exercise 1: Original number: " + number);
  let numberString = number.toString();
  for (i = numberString.length - 1; i >= 0; i--) {
    // be sure to reduce the length of the string by one as the length is always one unit higher than the indexed length, which starts at 0, not at 1.
    reversedString += numberString[i];
  }

  console.log("Exercise 1: Reversed number: " + reversedString);
}

reverseNumber();

// Exercise 2 - Order a string in alphabetical order

let webmaster = "webmaster";
let arrayWebmaster = [];

function orderAlphabetical(myParameter) {
  for (i = 0; i < webmaster.length; i++) {
    arrayWebmaster.push(myParameter[i]);
    arrayWebmaster.sort();
  }
  console.log("Exercise 2: Order string alphabetically: " + arrayWebmaster);
}

orderAlphabetical(webmaster);

// Exercise 3 - Convert first letter of word to uppercase

let lowerCaseString = "prince of persia";
let spaces = [];

function stringUppercase(myParameter) {
  //First, we search for spaces in the string and store the indexes thereof in the array SPACEs
  for (i = 0; i < myParameter.length; i++) {
    if (myParameter[i] == " ") {
      spaces.push(i);
    }
  }

  var firstWord = myParameter.slice(0, spaces[0]);
  var firstCharacter = firstWord.charAt(0);
  var UpperCaseFirstWord =
    firstCharacter.toUpperCase() + firstWord.slice(1, spaces[0]);

  var secondWord = myParameter.slice(spaces[0], spaces[1]);
  var firstCharacter = secondWord.charAt(1);
  var UpperCaseSecondWord =
    firstCharacter.toUpperCase() + myParameter.slice(spaces[0] + 2, spaces[1]);

  var lastWord = myParameter.slice(spaces[1], myParameter.length);
  var firstCharacter = lastWord.charAt(1);
  var UpperCaseLastWord =
    firstCharacter.toUpperCase() +
    myParameter.slice(spaces[1] + 2, myParameter.length);

  console.log("Exercise 3: These are the indexes of the spaces: " + spaces);
  console.log(
    "Exercise 3: First letter is uppercase: " +
      UpperCaseFirstWord +
      " " +
      UpperCaseSecondWord +
      " " +
      UpperCaseLastWord
  );
}

stringUppercase(lowerCaseString);

// Exercise 4 - Find the longest word in a string

let wordSpaces = [];
function wortListe(word, number) {
  this.wordString = word;
  this.numberString = number;
}

function findLongestWord(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    if (myParameter[i] == " ") {
      wordSpaces.push(i);
    }
  }

  var wordOne = new wortListe(
    myParameter.slice(0, wordSpaces[0]),
    wordSpaces[0]
  );

  var wordTwo = new wortListe(
    myParameter.slice(wordSpaces[0] + 1, wordSpaces[1]),
    wordSpaces[1] - wordSpaces[0] - 1
  );

  var wordThree = new wortListe(
    myParameter.slice(wordSpaces[1] + 1, myParameter.length),
    myParameter.length - wordSpaces[1] - 1
  );

  console.log(wordOne.wordString, wordTwo.wordString, wordThree.wordString);

  let wordNumberArray = [
    wordOne.numberString,
    wordTwo.numberString,
    wordThree.numberString,
  ];

  wordNumberArray.sort((a, b) => a - b);
  console.log(wordNumberArray);

  if (wordNumberArray[2] == wordOne.numberString) {
    console.log("The longest word is " + wordOne.wordString);
  } else if (wordNumberArray[2] == wordTwo.numberString) {
    console.log("The longest word is " + wordTwo.wordString);
  } else if (wordNumberArray[2] == wordThree.numberString) {
    console.log("The longest word is " + wordThree.wordString);
  }
}

findLongestWord("web developer tutorial");

// 6. DOM Manipulation Exercises
console.log("");
console.log("6. DOM MANIPULATION EXERCISES");
console.log("");

// Exercise 1 - Create HTML list elements with JS
let myBandList = ["Foo Fighters", "Tame Impala", "Nick Drake"];

function addBands(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    const ulTag = document.querySelector("ul");
    const listItem = document.createElement("li");
    listItem.textContent = myParameter[i];
    ulTag.appendChild(listItem);
  }
  console.log("Exercise 1: List items of bands generated.");
}

addBands(myBandList);

// Exercise 2 - Auto-generate a table using JS

function addMultTable(rows, cols) {
  let pTag = document.querySelector("p");

  let createTable = document.createElement("table");
  pTag.appendChild(createTable);

  for (i = 0; i < rows; i++) {
    let tableTag = document.querySelector("table");
    let createRow = document.createElement("tr");
    tableTag.appendChild(createRow);
  }

  const getTrTags = document.querySelectorAll("tr");

  for (i = 0; i < getTrTags.length; i++) {
    for (x = 0; x < cols; x++) {
      const createCols = document.createElement("td");
      getTrTags[i].appendChild(createCols);
    }
  }

  const getTdTag = document.querySelectorAll("td");

  for (i = 0; i < getTdTag.length; i++) {
    const tdText = document.createTextNode("\u2713");
    getTdTag[i].appendChild(tdText);
  }

  console.log(
    "Exercise 2: Table with " +
      rows +
      " rows and with " +
      cols +
      " columns generated."
  );
}

addMultTable(4, 8);

// 7. EXTRA: FUNCTION EXERCISES

console.log("");
console.log("7. EXTRA: FUNCTION EXERCISES");
console.log("");

// Exercise 1 - Use result variable within function

function resultMultiplication() {
  let result = 2 * 4;
  console.log(
    "Exercise 1: Using variable inside function. The multiplication of 2 * 4 is " +
      result
  );
}

resultMultiplication();

// Exercise 2 - Use result variable outside function

function resultMultiplicationOutside() {
  let result = 2 * 4;
  return result;
}

myResult = resultMultiplicationOutside();
console.log(
  "Exercise 2: Using variable outside function. The result of 2 * 4 is " +
    myResult
);

// Exercise 3 - Passing parameters through functions

function passingParameters(a, b) {
  let result = a * b;
  return result;
}

myResult = passingParameters(2, 4);
console.log(
  "Exercise 3: Passing parameters through functions. Result of 2 * 4 is " +
    myResult
);

// Exercise 4 - Type of triangle according to side length

let sidesOfTriangle = [12, 14, 1];

function checkTriangle(sidesOfTriangle) {
  if (
    sidesOfTriangle[0] === sidesOfTriangle[1] &&
    sidesOfTriangle[1] === sidesOfTriangle[2]
  ) {
    console.log("Exercise 4: The triangle is equilateral (all sides)");
  } else if (
    sidesOfTriangle[0] === sidesOfTriangle[1] &&
    sidesOfTriangle[0] != sidesOfTriangle[2]
  ) {
    console.log("Exercise 4: The triangle is isosceles (two equal sides)");
  } else if (
    sidesOfTriangle[1] === sidesOfTriangle[2] &&
    sidesOfTriangle[1] != sidesOfTriangle[0]
  ) {
    console.log("Exercise 4: The triangle is isosceles (two equal sides)");
  } else if (
    sidesOfTriangle[0] === sidesOfTriangle[2] &&
    sidesOfTriangle[1] != sidesOfTriangle[0]
  ) {
    console.log("Exercise 4: The triangle is isosceles (two equal sides)");
  } else if (
    sidesOfTriangle[0] != sidesOfTriangle[1] &&
    sidesOfTriangle[0] != sidesOfTriangle[2] &&
    sidesOfTriangle[1] != sidesOfTriangle[2]
  ) {
    console.log("Exercise 4: The triangle is scalene (no equal sides)");
  }
}

checkTriangle(sidesOfTriangle);

// Exercise 5 - Replace letters in a string

var myArray = [
  "M",
  "a",
  "s",
  "s",
  "a",
  "c",
  "h",
  "u",
  "s",
  "s",
  "e",
  "t",
  "t",
  "s",
];

function replaceSCharacters(myArray) {
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] == "s") {
      myArray.splice(i, 1, "5");
    }
  }
  console.log("Exercise 5: Replacing array elements with splice(): " + myArray);
}

replaceSCharacters(myArray);

// Exercise 6 - Sum of array elements and smallest number from array, using sort compare function

var myArray = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10];
var sum = 0;

function returnSumOfElements(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    sum = sum + myParameter[i];
  }
  return sum;
}

function smallestNumber(myParameter) {
  myParameter.sort((a, b) => a - b);
  return myParameter[0];
}

var mySmallestNumber = smallestNumber(myArray);
myResult = returnSumOfElements(myArray);
console.log(
  "Exercise 6: The sum of all array elements is " +
    myResult +
    " and the smallest number is " +
    mySmallestNumber
);

// Exercise 7 - Return the sum of even numbers from an array

var myNumbers = [2, 3, 8, 6, 9, 3, 8, 2];
var evenNumbers = 0;

function evenNumbersOnly(myNumbers) {
  for (i = 0; i < myNumbers.length; i++) {
    let rest = myNumbers[i] % 2;
    if (rest === 0) {
      evenNumbers = evenNumbers + myNumbers[i];
    }
  }
  return evenNumbers;
}
myResult = evenNumbersOnly(myNumbers);
console.log("Exercise 7: The sum of the even numbers is: " + myResult);

// Exercise 8 - Return the sum of an array's elements even positions

var myNumbers = [1, 2, 8, 3, 2, 3, 4];
let evenPosition = 0;

function addEvenPositions() {
  for (i = 0; i < myNumbers.length; i++) {
    var rest = i % 2;
    if (rest === 0) {
      evenPosition = evenPosition + myNumbers[i];
    }
  }
  return evenPosition;
}

myResult = addEvenPositions(myNumbers);
console.log("Exercise 8: The sum of even positioned elements is: " + myResult);

// Exercise 9 - Name all even numbers before a number passed as a parameter into a function

myNumber = 27;
myNumbers = [];
evenNumbers = [];

function findEvenNumbers() {
  for (i = 1; i < myNumber; i++) {
    myNumbers.push(i);
  }
  for (i = 0; i < myNumbers.length; i++) {
    var rest = myNumbers[i] % 2;
    if (rest === 0) {
      evenNumbers.push(myNumbers[i]);
    }
  }
  return evenNumbers;
}

myResult = findEvenNumbers(myNumber);
console.log(
  "Exercise 9: All even numbers before " + myNumber + " are: " + evenNumbers
);

// Exercise 10 - Name all odd numbers from two parameters passed into a function

myNumbers = [];
myNumbersBetween = [];
var myOddNumbersBetween = [];

function findOddNumbers(x, y) {
  myNumbers.push(x, y);
  myNumbers.sort((a, b) => a - b);

  for (i = myNumbers[0] + 1; i < myNumbers[1]; i++) {
    myNumbersBetween.push(i);
    var rest = i % 2;
    if (rest != 0) {
      myOddNumbersBetween.push(i);
    }
  }
  return myOddNumbersBetween;
}

myResult = findOddNumbers(5, 56);
console.log(
  "Exercise 10: All odd numbers between " +
    myNumbers[0] +
    " and " +
    myNumbers[1] +
    " are: " +
    myOddNumbersBetween
);
