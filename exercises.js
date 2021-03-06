// Callback function

function test(arr, callback) {
  arr.push(100)
  callback()
}

var myArr = [1,2,3];

test(myArr, () => console.log('Array has been modified'));



// ____________________________________________________________________________________



// Js Closures

// Get the private variable (secret code)

/* 
Explanation: You cannot access variable in the parent (hiddenCode) function from outside.
You need to create a helper function (child function) which is called nested function
which creates a closure. Child function (closure) has access to local (child), outer (parent) and global scopes.
*/

function hiddenCode() {

  let code = "You\'ve found a secret code"

  return function totallyNotSecretCode() {
    return code
  }
  
}

const getCode = hiddenCode()

console.log(getCode())



// ___________________________________________________________________________________



// Longest Word
// Find the longest word in the string

function findWord(word) {

  // Split the words in the given string
  word.replace(/[^a-z0-9]/g, '');
  
  // Return an array containing each word
  let arr = word.split(' ')

  // Sort each array index (word) by it's length
  arr.sort((a,b) => {return b.length - a.length})
  
  // Return first item in the array (after sorting longest word will be first)
  return arr[0]
  
}

console.log(findWord(' John and Mary bought 5 apples and 3 oranges '))



// ____________________________________________________________________________________



// Replace letters and capitalize vowels

function replaceLetters(word) {
  
  // replace for each letter a-z exacute a callback function
  // which cheks if letter is z if true return a
  // if false return a string from charCode method + 1
  // charCode is a number that a letter represents
  // +1 to charCode number means moving to the next letter
  let converted = word.replace(/[a-z]/gi, (char) => {
    return char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  })
  
  // Execute callback function on all provided vowels
  // Use toUpperCase method on each letter
  let capitalized = converted.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  })
 
  return capitalized
}

console.log(replaceLetters('Pizza'));



// ____________________________________________________________________________________



// String to lowercase 
// toLowerCase method returns string lowercased

var toLowerCase = function(str) {
  return str.toLowerCase()
};

toLowerCase('Hello')



// ____________________________________________________________________________________



// String to Uppercase 
// toUpperCase method returns string uppercased

var toUpperCase = function(str) {
  return str.toUpperCase()
};

toUpperCase('hello')



// ____________________________________________________________________________________



// Generate random number
// Math.random returns a number from 0 to 1 (decimal number)

function random(){
  return 1 + Math.random() * 4;
}

random()



// ____________________________________________________________________________________



// Simple slice method
// Slice method returns new array starting and ending at specific index


var shortenArray = (arr, start, end) => {
  return arr.slice(start, end)
}

shortenArray([1,true,'Pizza', undefined, null], 0, 3)



// ____________________________________________________________________________________



// Merge arrays and sort the merged array
// ES6 way of array merging (concatinating) and sorting


var arrayMerge = (arr1, arr2) => {

  return [...arr1,...arr2].sort((a, b) => a - b)
}

console.log(arrayMerge([100, 50, 1], ['a', 'b', 'c']))

// Merge array using concat method

var arrayMerge = (arr1, arr2) => {
  let mergedArr = arr1.concat(arr2)
  return mergedArr
}

console.log(arrayMerge([100, 50, 1], ['a', 'b', 'c']))


// ____________________________________________________________________________________



// Js Object
// Simple object that holds some keys and values as well as function
// Function uses string interpolation / Template strings to return a string


var car = {
  name: 'Lamborghini',
  series: 'Aventador',
  model: 'S',
  fullName: function() {
    return `${this.name} ${this.series} ${this.model}`
  },
  yearOfRelease: 2017,
  overview: 'An icon cannot be reinvented, it can only be challenged. And only Aventador could surpass itself. Following Miura, Islero, Countach, and Urraco, Lamborghini’s most iconic model now reaps the inheritance of the historic S models and evolves into the new Aventador S.'
}


car.fullName()



// ____________________________________________________________________________________



// Js return sum of two numbers
// Simple function to return sum of two numbers


function returnSum(x, y) {
  return x + y
}

returnSum(2, 2)



// ____________________________________________________________________________________



// Remove duplicates
// New Set returns a new array without duplicates


function removeDupes(arr) {
  return new Set(arr) 
}

removeDupes([1, 1,'hello', 'bye', 'hello'])



// ____________________________________________________________________________________



// Check if all letters exist in the target string
// IndexOf method checks if letters from checkString exist in the targetString
// If letter does not match it returns -1 if it does returns 0
// -1 and 0 returns different string outputs


function checkIndex(arr) {
  let targetString = arr[0].toLowerCase();
  let checkString = arr[1].toLowerCase();
  
  for (var i = 0; i < checkString.length; i++) {
    if(targetString.indexOf(checkString[i]) < 0) {
      return 'All letters are NOT in the target string'
    }
  }

  return 'All letters ARE in the target string' 
}

checkIndex(['Pizza costs 2 dollars', '2 oranges are better than one'])



// ____________________________________________________________________________________



// 2D Array
// Return value from the 2D array

function returnVal(arr) {
  return arr[0][1]
}

returnVal([['String 1','String 2'], '1D array'])



// ____________________________________________________________________________________



// Check if string is empty
// If string has empty space it is NOT considered empty since empty space is a symbol



function checkString(str) {
  if(str === "") {
    return true
  }

  return false
}

checkString(' ')



// ____________________________________________________________________________________



// Return hello if num is 1, return bye if num is 0
// Pass a name and a number into the function
// Number higher than 1 will return undefined


var returnString = (name, num) => {
  if(num === 1) {
    return `Hello ${name}`
  } else if (num === 0) {
    return `Bye ${name}`
  }
}

returnString('Joe', 1)



// ____________________________________________________________________________________



// Build class and calculate area

class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea()  {
    return this.height * this.width
  }
}

let shape = new Square(10, 10)

console.log(shape.calcArea())



// ____________________________________________________________________________________



// Remove special chars from string
// Create RegExp to define what special characters you want to remove

var removeChars = (str) => {
  // return str.replace(/!|@|#|$|%|^|&|\|*/gi, '')
  return str.replace(/[^a-zA-Z0-9 ]/g, '')

}

removeChars('He said - Stop! Then told me his email address joedoe@gmail.com')
removeChars('20% of customers bought pizza & drinks')
removeChars('%ab88$$zz1--)@!!aaab.')



// ____________________________________________________________________________________



// Reverse word with 5 characters or more
// If word has more than 5 characters reverse the word
// TODO fix long strings with multiple words not reversing


function reverseWord(arg) {
  if(arg.length >= 5) {
    return arg.split('').reverse().join('')
  }

  return 'String is shorter than 5 characters'
}

reverseWord('Pizza')



// ____________________________________________________________________________________



// Remove numbers from the string
// Use replace method and define expression to remove all numbers from the string


function removeNumbers(str) {

  return str.replace(/[0-9]/g, '')
}

removeNumbers('Paint cost 10$')



// ____________________________________________________________________________________



// Check the data type of argument
// Checks basic data types with a NaN catch since NaN is considered a number


function typeOfArg(arg){

  if(typeof arg === "string") {
    return 'Arguement data type is a string'
  } else if (typeof arg === "number" && !isNaN(arg)) {
    return 'Arguement data type is a number'
  } else if (typeof arg === "boolean") {
    return 'Arguement data type is a boolean'
  } else {
    return "Argument is either a NaN, object or undefined"
  }
}


typeOfArg(NaN)



// ____________________________________________________________________________________



// Map each index of array


function mapArray(arg) {

  arg.map(item => {
    console.log(item)
  })

}

mapArray(['John', 'Luke', 'Mike', [1, 2, 3, [true, false]]])



// ____________________________________________________________________________________



// Filter the array of numbers and return the result


function filterArray(arr) {
  return arr.filter(num => num > 3 || typeof num === 'string')
}


filterArray([1,2,3,4,5, [1, 5, 8, true], 'Hello', 'This is a string'])



// ____________________________________________________________________________________



// Is number even? Return true or false

function isEven(num) {
  if(num % 3) {
    return true
  }

  return false
}

isEven(10)































