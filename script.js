console.log("I'm javascript")

let admin, name = "John";
admin = name ;
console.log(admin);
 
let ourPlanetName = "Earth";
let currentUserName = "Rakhesh"

let result = prompt("Enter your name",'');
console.log(`Hi  ${result} welcome`);

let a = true;
console.log (typeof a);
a = String(a);
console.log(typeof a);

let b = '250';
console.log(typeof b)
b = Number(b);
console.log(b);

//functions

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  checkAge(16);

  function checkTheAge(age){
    return (age > 18) ? true : confirm('Did your parents allow you?');
  }
    checkTheAge(20);

  function num(a, b) {
    return a < b ? a : b;
  }
 console.log(num(10, 8));

 let c = prompt("Enter first number",'');
 let d = prompt("Enter the number of times you need to multiply a",'');
 function powerOfNumber(c, d) {
    let result = c;
    for(i = 1; i < d; i++){
        result *= c;
    }
    console.log(result);
 }
 if(d < 1){
    console.log("Please give a positive integer")
 }else{
    powerOfNumber(c, d);
 }

//concat of array
 let arr1 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr1.concat(arrayLike) ); // 1,2,something,else

function compareNumeric(a, b) {
  console.log(a,b)
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr2 = [ 1, 2, 15 , 6];
arr2.sort(compareNumeric);

//array methods split,map,join 

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("oh-my-god"));

//array decreasing order
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr );

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
console.log( Math.random() - 0.5)








