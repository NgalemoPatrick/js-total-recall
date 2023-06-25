/* A.
 1. How do we assign a vakue to a variable? A. With the assignment operator
 2. How do we change the of a variable? A. By declaring the variable with the keyword let.
 3. How do we assign an existing variable to a new variable? A. By using the assign operator to between the two variables
 4. Remind me, what are declare, assign , and define? A. Declare allocate a memory space for an object, assign pass a value to the object declare a
 define 
 5. What is pseaudocoding and why should you do it? A. pseudocoding is the human expression of our program, we use it to 
 define all the step to write our code.
 6. What percentage of time should be spent thinking about how you are going to solve a problem vs actually typing in code to solve? A. I think 60%

 */

//  B. 
let firstVariable;
firstVariable = 'Helo World';
firstVariable = 78;
let secondVariable = firstVariable;
secondVariable = 'Fabrice Ngalemo';

// A. 78

let yourName = 'Fabrice Ngalemo';
let variable = 'Hello, name is ';

let answer = variable + yourName;

// C Boolean
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false);
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a == d);
console.log(48 !== '48');

// D The farm

const animal = 'cow'

if( animal === 'co') {
    console.log('mooooo')
}else{
    console.log('Hey! You\'re not a cow');
}


