/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(num){
  if(num % 5 === 0 && num % 3 === 0){
  return "FizzBuzz"
  } else if (num % 5 === 0 && num% 3 !== 0){
    return 'Buzz';
  } else if (num % 3 === 0 && num % 5 !== 0){
    return 'Fizz';
  }else {
    return num;
  }

}

function getMiddleLetters(str){
  for (let i = 0; i < str.length; i ++){
    if (str.length % 2 === 0 && i === (str.length / 2)){
    return str[i-1] + str[i];
  }else if (str.length % 2 === 1 && i === (((str.length / 2)+ .5))){
    return  str [i - 2] + str[i-1] + str[i];
  }
}
}

function getNextLetter(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alphabet.length; i ++){
    if (alphabet[i] === letter && alphabet[i] !== 'z'){
  return alphabet[i + 1];
}else if (alphabet[i] === 'z'){
  return 'a';
    }
  }
}

function getAverage(numbersArray){
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i ++){
    sum = sum + numbersArray[i];
  }
  return sum / numbersArray.length;
}

function triStateAreaOnly(locationArray){
  let newArray = [];
  for (let i = 0; i < locationArray.length; i ++){
    if (locationArray[i].endsWith('NY')|| locationArray[i].endsWith('CT')|| locationArray[i].endsWith('NJ')){
      newArray.push(locationArray[i]);
    }
  }
  return newArray;
}

function removeTrolls(postsArray){
  let newArray = []
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < postsArray.length; i ++){
   
    if (postsArray[i].includes('abcdefghijklmnopqrstuvwxyz')){
      newArray.push(postsArray[i]);
    }
  }
  return newArray;
}

function cipher(str){
  let newString = ''
  for (let i = 0; i < str.length; i ++){
    newString = newString + getNextLetter(str[i]);
  }
  return newString;
}

function addToMultiDigitNumbers(num, arr){
  let newArray = [];
  const numbers = '1234567890'
  for (let i = 0; i < arr.length; i ++){
    if (arr[i].toString().length === 1){
      newArray.push(arr[i]);
    }else{
      newArray.push(arr[i] + num);
    }
  }
return newArray;
}

function hyphenateNames(namesArray){
  let newArray = [];
//   let spaces = 0;
  for (let i = 0; i < namesArray.length; i ++){
//     if (namesArray[i][i] === ' ')
    if(namesArray[i][namesArray[i].indexOf(' ')]{
      if (namesArray[i].includes(' '))
newArray.push(namesArray.join('-'))
    }
return newArray
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
