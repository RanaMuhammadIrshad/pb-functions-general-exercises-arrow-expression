'use strict';
/* 1. Write a function that takes in one parameter and logs that parameter 3 times into the console. */

console.log(`------01-function expression----`);
let myStr = "";
const exp3Times = function (par) {
  for (let i = 1; i <= 3; i++) {
    myStr += par + " ";
  }
  console.log(myStr);
};

exp3Times(3);
console.log(`------01-arrow function----`);
let myStr1 = "";
const arr3Times = (par) => {
  for (let i = 1; i <= 3; i++) myStr1 += par + " ";
  console.log(myStr1);
};
arr3Times(3);

/* 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat" */
console.log(`------02-function expression----`);
let myStr3 = '';
const exp5Times = function (par) {
  for (let i = 1; i <= 5; i++) {

    myStr3 += par + '';
   
  }
  console.log(myStr3);
};

exp5Times("Cat");
console.log(`------02-arrow function----`);

const arr5Times = (par) => {
    let myStr4 = '';
  for (let i = 1; i <= 5; i++)
myStr4 += par + '';
   console.log(myStr4);
};
arr5Times("Cat");

/* 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`
 */
console.log(`------03-function expression----`);

const expString = function (number, str) {
    let myStr5 = '';
  for (let i = 1; i <= number; i++)
  myStr5 += str + '';
   console.log(myStr5);
};

const myString = expString(3, "Woah");

console.log(`------03-arrow function----`);
const arrString = (number, str) => {
    let myStr6 = '';
  for (let i = 1; i <= number; i++)
  myStr6 += str + '';
   console.log(myStr6);
};

const myString1 = arrString(3, "woah");

/* 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337` */
console.log(`------04-function expression----`);

const maxNum = function (arr) {
  let myNum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= myNum) {
      myNum = arr[i];
    }
  }
  return myNum;
};
let maxOfArr = maxNum([1, 6, 83, 91, 0, -4, 1337, 5]);
console.log(maxOfArr);

console.log(`------04-arrow function----`);

const arrMaxNum = (arr) => {
  let myNum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= myNum) {
      myNum = arr[i];
    }
  }
  return myNum;
};
let maxOfArr1 = arrMaxNum([1, 6, 83, 91, 0, -4, 1337, 5]);
console.log(maxOfArr1);

/* 5. This question has 2 parts

    Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

    -  printIfDivisibleByTen(1) --> no output
    -  printIfDivisibleByTen(2) --> no output
    -  printIfDivisibleByTen(32) --> no output
    -  printIfDivisibleByTen(10) --> "Even 10!" into the console
    -  printIfDivisibleByTen(30) --> "Even 10!" into the console
    -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

    Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
 */

console.log(`------05-a-function expression----`);

const printIfDivisibleByTen = function (num) {
  if (num % 10 === 0) console.log("Even 10!");
  else console.log("NOT Even 10!");
};

printIfDivisibleByTen(32);

console.log(`------05-a-arrow function----`);
const printIfDivisibleByTenArr = (num) => {
  if (num % 10 === 0) console.log("Even 10!");
  else console.log("NOT Even 10!");
};

printIfDivisibleByTenArr(30);

console.log(`------05-b-function expression----`);
const printIfDivisibleByTenIte = function (num, ite) {
  for (let i = 1; i <= ite; i++)
    if (num % 10 === 0) console.log(`Iteration (${i}) Even 10!`);
    else console.log(`Iteration (${i}) NOT Even 10!`);
};

printIfDivisibleByTenIte(10, 5);

console.log(`------05-b-arrow function----`);
const printIfDivisibleByTenArrIte = (num, ite) => {
  for (let i = 1; i <= ite; i++)
    if (num % 10 === 0) console.log(`Iteration (${i}) Even 10!`);
    else console.log(`Iteration (${i}) NOT Even 10!`);
};

printIfDivisibleByTenArrIte(30, 5);

/* 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one */

console.log(`------06-function expression----`);
const maxNumber = function (num1, num2, num3, num4, num5) {
  console.log(Math.max(num1, num2, num3, num4, num5));
};

maxNumber(1, 2, 23, 4, 15);

console.log(`------06-arrow function----`);
const maxNumberArr = (num1, num2, num3, num4, num5) =>
  console.log(Math.max(num1, num2, num3, num4, num5));

maxNumber(1, 2, 3, 4, 25);
/* 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string. */

console.log(`------07-function expression----`);

const expStringExp = function (str) {
  if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
};
const givenString = expStringExp("3");
console.log(givenString);

console.log(`------07-arrow function----`);
const arrStringArr = (str) => {
  if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
};
const myGivStr = arrStringArr(3);
console.log(myGivStr);

/* 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.
 */

console.log(`------08-function expression----`);

const twoStr = function (str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") return true;
  else return false;
};

const myTwoStr = twoStr("a", 3);
console.log(myTwoStr);

console.log(`------08-arrow function----`);

const twoStrArr = (str1, str2) => {
  if (typeof str1 === "string" && typeof str2 === "string") return true;
  else return false;
};

const bothStrArr = twoStrArr("a", "3");
console.log(bothStrArr);

/* 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
    - getFirstWord("Internetting is hard") --> "Internetting"
    - getFirstWord("Hello World") --> "Hello"
    - getFirstWord("Hello") --> "Hello" */

console.log(`------09-function expression----`);

const expFirstWord = function (str) {
  return str.split(" ")[0];
};

const myFirstWord = expFirstWord("Internetting is hard");
console.log(myFirstWord);

console.log(`------09-arrow function----`);

const arrFirstWord = (str) => {
  return str.split(" ")[0];
};

const myFirstWord1 = arrFirstWord("Internetting is hard");
console.log(myFirstWord1);

/* 10. *HARD* Write an arrow function that takes in one string.
The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
    - wordRepeater("bunny") --> "bunny"
    - wordRepeater("Cat food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?" */

console.log(`------10-function expression----`);
const expWordRepeater = function (x) {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
};
console.log(expWordRepeater("bunny"));
console.log(expWordRepeater("Cat food"));
console.log(expWordRepeater("I am groot"));
console.log(expWordRepeater("O M G ?"));

console.log(`------10-arrow function----`);

const wordRepeater = (x) => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
};
console.log(wordRepeater("bunny"));
console.log(wordRepeater("Cat food"));
console.log(wordRepeater("I am groot"));
console.log(wordRepeater("O M G ?"));

const expRepWord = function (str) {
  let myArr = [];
  myArr.push(str.split(" "));
};

const repWords = expRepWord("O M");
console.log(repWords);

/* 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q" */

console.log(`------11-function expression----`);

const firstChar = function (str) {
  return str.split("")[0];
};

const expFirstChar = firstChar("quylthulg");
console.log(expFirstChar);

console.log(`------11-arrow function----`);

const firstCharArr = (str) => {
  return str.split("")[0];
};

const arrFirstChar = firstCharArr("quylthulg");
console.log(arrFirstChar);

/* 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
    - firstLetters("cat") --> "c"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG" */

console.log(`------12-function expression----`);

const expFirstLetterWord = function (str) {
  const firstLetters = str
    .split(" ")
    .map((str) => str[0])
    .join("");

  return firstLetters;
};

const expMyFirstLetterWord = expFirstLetterWord("What You See Is What You Get");
console.log(expMyFirstLetterWord);

console.log(`------12-arrow function----`);

const arrFirstLetterWord = (str) => {
  const firstLetters = str
    .split(" ")
    .map((str) => str[0])
    .join("");

  return firstLetters;
};

const arrMyFirstLetterWord = arrFirstLetterWord("What You See Is What You Get");
console.log(arrMyFirstLetterWord);

/* 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too! */

console.log(`------13-function expression----`);

const isNumStrArr = function (input) {
  if (typeof input === "string") return `I am string and length is ${input.length}`;
  if (input instanceof Array) return `I am array and length is ${input.length}`;
  else return `null`;
};

const result = isNumStrArr([1]);
console.log(result);

console.log(`------13-arrow function----`);

const isNumStrArr1 = (input) => {
  if (typeof input === "string") return `I am string`;
  if (typeof input === "number") return `I am number`;
  if (input instanceof Array) return `I am array`;
};

const result1 = isNumStrArr1("");
console.log(result1);

/* 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"] */

console.log(`------14-function expression----`);

const explode = function (variable) {
  if (typeof variable === "string") return variable.split("");
  else return null;
};

const exploded = explode("R & D");
console.log(exploded);

console.log(`------14-arrow function----`);

const explode1 = (variable) => {
  if (typeof variable === "string") return variable.split("");
  else return null;
};

const exploded1 = explode1("R & D");
console.log(exploded1);

/* 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> true
    - foo("Cat") -> false
    - foo("Tomato") -> true
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false */

console.log(`------15-function expression----`);
const fooArr = function (x) {
  return x[x.length - 1] === "o";
};
console.log(fooArr(""));
console.log(fooArr("a"));
console.log(fooArr("o"));
console.log(fooArr("Cat"));
console.log(fooArr("Tomato"));
console.log(fooArr("Potato"));
console.log(fooArr("Blanket"));
console.log(fooArr("1"));

console.log(`------15-arrow function----`);

const foo = (x) => x[x.length - 1] === "o";
console.log(foo(""));
console.log(foo("a"));
console.log(foo("o"));
console.log(foo("Cat"));
console.log(foo("Tomato"));
console.log(foo("Potato"));
console.log(foo("Blanket"));
console.log(foo("1"));

/* 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Station") --> "Catternational Space Station" */

console.log(`------16-function expression----`);
const bar1 = function (str) {
  return "Cat" + str.substring(2);
};

console.log(bar1(""));
console.log(bar1("x"));
console.log(bar1("Cat"));
console.log(bar1("Foobar"));
console.log(bar1("Potato"));
console.log(bar1("Tomato"));
console.log(bar1("International Space Station"));

console.log(`------16-arrow function----`);

const bar = (str) => "Cat" + str.substring(2);

console.log(bar(""));
console.log(bar("x"));
console.log(bar("Cat"));
console.log(bar("Foobar"));
console.log(bar("Potato"));
console.log(bar("Tomato"));
console.log(bar("International Space Station"));
