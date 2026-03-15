/* Here is the practise questions 
based on 01 Basics which is asked by ChatGpt*/

// 01  Variable and Datatypes

//  Q1 Create a variable to store your name, age,
//  and city and print them in the console.

const name = "Aditya Kumar"
const age = "22years"
const city = "Khalilabad"

const print = `My name is ${name},I am ${age} year old and I live in ${city}.`
//console.log(print);

// Q2 Create two variables: one number and one string,
//  then print their types using typeof.

//const number = 852
const string = "Rajan"

const printtypOF = `The value of first varible is ${number} and its Type is ${typeof number}.

 The value of second variable is ${string} and its Type is ${typeof string}. `

//console.log(printtypOF)


// Q3 Store a boolean value in a variable and print it.

const isTrue = true 

//console.log(isTrue)

// Q4 Create a variable without assigning a value 
// and check its type.

 //const variable =;       
  //const variable को declare करते समय value देना जरूरी होता है 
  //अगर आप बिना value assign किए variable बनाना चाहते हैं, तो let या var इस्तेमाल करें।

let variable;
const typ = typeof variable
//console.log(typ)

// Q5 Store an array of 5 fruits and print the third fruit.

const arrFruits = ["Apple","Banaan","Orange","Watermelon","Papaya"]
const Print3rdFruit = arrFruits[2];

//console.log(Print3rdFruit)


// 02 Operators

/*Q6 Create two numbers and print: 
their 
sum

difference

product

division */

let num1 = 45
let num2 = 20

let sumOfNumber = num1 + num2 
let differenceOfNumber = num1 - num2
let productOfNumber = num1 * num2
let divisionOfNumber = num1 / num2

let printOperator = `Sum : ${sumOfNumber}
Difference : ${differenceOfNumber}
Product : ${productOfNumber}
Division : ${divisionOfNumber}`

console.log(printOperator)

// Q7 Check if a number is even or odd 
// using the modulus operator %.

const number = 45

if(number%2===0){
 console.log("Even")
} else
{
console.log("Odd")
}

/* Q8 Create two variables and check: 
==
===
!=
*/

let firstVariable = "Hello";
let secondVarable = 745;

let check = firstVariable == secondVarable;
let check1 = firstVariable === secondVarable;
let check2 = firstVariable != secondVarable;

console.log(check,check1,check2)