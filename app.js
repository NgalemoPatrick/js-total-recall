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

console.log('-----------------------');
// D The farm

const animal = 'cow'

if( animal === 'co') {
    console.log('mooooo')
}else{
    console.log('Hey! You\'re not a cow');
}

console.log('-----------------------');

// E. Driver's Ed

let personAge = 16;

if(personAge >= 16) {
    console.log('Here are the keys!')
}else{
    console.log('Sorry, you\'re too young');
}

console.log('-----------------------');
//   II Loops

// 

// A. The basics

// 1. Write a loop that will print out the number from 0 to 10
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('-----------------------');

// 2. Write a loop that will print out the number 10 up to and including 400

for(let i = 10; i <= 400; i++) {
    console.log(i);
}
console.log('-----------------------');

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 400

for(let i = 12; i <= 400; i+=3) {
    console.log(i);
}
console.log('-----------------------');
// B. Get even
// 1. Print out the number that are betweenn the range of 1 - 100
for(let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log('-----------------------');

// 2. Adjust your code to add a message next to even number only thst syas <-- is event number

for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0){
        console.log(`${i} is an even number`);
    }else{
        console.log(i);
    }
}

console.log('-----------------------');

// . Give me five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a numtiple of five
for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        console.log(`I found a ${i}. Hi five!`);
    }
}

console.log('-----------------------');

// 2. Add to the code from above to print out 

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        console.log(`I found a ${i}. Hi five!`);
    }else if(i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }

}

console.log('-----------------------');

// D. Saving account
// 1. Write code that will save the sum aff all the number between 1 - 100 to a variable called bank_account

let bank_account = 0;

for(let i = 0; i <=10; i++) {
    bank_account += i; 
}
console.log(`$${bank_account}`)

console.log('-----------------------');

// 2. You got a bonus!

let bank_accountBonus = 0;
for(let i = 0; i <= 100; i++) {
    bank_accountBonus += i*2; 
}
console.log(`$${bank_accountBonus}`)

console.log('-----------------------');

// III. Array & Control flow

// A. 
/*
    1. data type
    2. No
    3. person information

*/

// B. Easy Does it
const quotes = ['quote 1','quote 2','quote 3']

// C. Accessing element
const randomThings = [1, 10, 'Hello', true];

// 1. rendomThings[0]
randomThings[0];
randomThings[2] = 'World';

console.log(randomThings);


// E. Mix It Up
const myArray = [5, 10, 500, 20];

// 1. Add string to the end
myArray.push('Aegon');

// 2. remove first element
myArray.shift();

// 3. Add string Bob Marley to the begining
myArray.unshift('Bob Marley')

// 4. remove the stringof your choice from the end of the array
myArray.pop();


console.log(myArray);

// 5. Reserve this array yes the reverse return a reverse array
const arr = myArray.reverse();
console.log(arr)


console.log('-----------------------');

// F. Biggie Small
const input = 10;
if(input < 100) {
    console.log('The number entered is less tha 100');
}else{
    console.log('The number entered is greater tha 100');
}

console.log('-----------------------');

// H. What's in Your Closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   1. 
console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`)
console.log('-----------------------');

// 2.
kristynsCloset.splice(6,0,'raybans');
console.log(kristynsCloset)
console.log('-----------------------');

// 3. Krystyn spilled coffee on her hat modify this item to read "stained hnit hat" instead of yellow

kristynsCloset.splice(5,1, "stained hnit hat");

console.log(kristynsCloset);
console.log('-----------------------');

// 4. put together an outfit for Thom! Using bracket notation, access the first element in thom's sfirts array
console.log(thomsCloset[0][0]);
console.log('-----------------------');

// 5. in the same way, access one item from thom'pants array
console.log(thomsCloset[1][0]);
console.log('-----------------------');

// 6. Access one item from Thom' accessories
console.log(thomsCloset[2][0]);
console.log('-----------------------');

// 7. Log a senctence about what Thom's wearin.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}.`);
console.log('-----------------------');

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of this PJs pants to Footie Pajmas 
thomsCloset[1].splice(2, 1, "Footie Pajmas");
console.log(thomsCloset);
console.log('-----------------------');


// IV. Functions
// A. printGreeting
// B. printCool

function printCool(name) {

    return `${name} is cool.`
}

console.log(printCool('Captain Reynolds'));
console.log('-----------------------');

// C. calculateCube
function calculateCube(number) {
    return Math.pow(number, 3);
}

console.log(calculateCube(5));
console.log('-----------------------');

// D. isVowel
function isVowel(ch) {
    if(ch === 'a' ||ch === 'e' || ch === 'o' || ch === 'e' || ch === 'u' || ch === 'y' || ch === 'i' ){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel('i'));
console.log('-----------------------');

// E. getTwoLengths
function getTwoLengths(input1, input2) {
    let arr = [];
    arr.push(input1.length);
    arr.push(input2.length);

    return arr;

}

console.log(getTwoLengths('Hank', 'Hippopopalous'));
console.log('-----------------------');

// F. getMultipleLengths
const r = [];

function getMultipleLengths(arr) {
    for(let i = 0; i < arr.length; i++){
        r.push(arr[i].length);
    }
    return r;
}

console.log(getMultipleLengths(['Hello', 'what','is','up','dude']));
console.log('-----------------------');

// G. maxOfThree

function maxOfThree(input1, input2, input3) {

    if(input1 >= input2 && input2 >= input3) {
        return input1;
    }else if(input2 >= input1 && input2 >= input3) {
        return input2;
    }else{
        return input3;
    }

}

console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(6, 1, 9));
console.log(maxOfThree(1, 9, 6));
console.log(maxOfThree(100, 100, 100));
console.log(maxOfThree(9, 9, 1));
console.log('-----------------------');

// printLongestWord

// function printLongestWord(input) {

//     const a = (getMultipleLengths(input).toString());

//     console.log(Math.max(a));

//     return input[index];
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
console.log('-----------------------');

//  Objects

// A. Make a user object

let user = {
    name: "Pat",
    email: "pat@email.com",
    age: 5,
    purchased : []
};

// B. Update the user 
// 1. Our user has changed his email address. Update the email
user.email = 'fab@email.com';

console.log(user)
console.log('-----------------------');
// 2. increment age++
user.age++;
console.log(user);
console.log('-----------------------');

// C. Adding keys and values

user.location = 'Dallas';
console.log(user);
console.log('-----------------------');

// D. Shopholic
// 1. Our user purchased an items

user.purchased.push('carbohydrates');
console.log(user);
console.log('-----------------------');

// 2. 
user.purchased.push('Peace of mind');
console.log(user);
console.log('-----------------------');

// 3.
user.purchased.push('Merino jodhpurs');
console.log(user);
console.log('-----------------------');

// 4.
console.log(user.purchased[2]);
console.log('-----------------------');

// E. Object-within-object

user.friend = {
    name: 'Jean',
    age: 10,
    location: 'Keller',
    purchased: []
}

console.log(user);
console.log('-----------------------');

// 2. console friend name
console.log(user.friend.name);
console.log('-----------------------');

// 3. console friend location
console.log(user.friend.location);
console.log('-----------------------');

// 4. change friend age to 55
user.friend.age = 55;
console.log(user);
console.log('-----------------------');

// 5. and 6. push into friend
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');

// 7. console friend purchased array

console.log(user.friend.purchased);
console.log('-----------------------');


// Loops
// 1. write a loop that iterates over the user's purchased

for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

console.log('-----------------------');

// 2. write a loop that iterates over the user friend 's purchased
for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

console.log('-----------------------');

// Function can oparate on objects
// 1. Write a single function updateUser

function updateUser(user) {
    return user.name.toUpperCase();
}

console.log(updateUser(user));
console.log('-----------------------');















