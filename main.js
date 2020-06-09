/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(str) {
  return str + "!";
}
const yells = yell('more')
yells;


function getFirstCharacter(firstCharacter) {
  return firstCharacter[0]
}
const one = getFirstCharacter('whenever')
one;


function getLastCharacter(lastCharacter) {
  return lastCharacter[lastCharacter.length -1]
}
const last = getLastCharacter('Daniel')
last;

function getOneCharacter(aString, aNumber) {
  return aString[aNumber]
}
const character = getOneCharacter('daniel' , 5)
character;

function getTwoCharacters(phrase, numeral1, numeral2) {
  return phrase[numeral1] + phrase[numeral2];
}
const two_time = getTwoCharacters('roger', 1,2)
two_time;

function makeCapitalized(term) {
  return term.toUpperCase();
}
const capitalize = makeCapitalized('blue')
capitalize;

function yellLouder(expression) {
  return expression.toUpperCase() + '!!!';
}

// function getInitials(name) {
//   return name.split(" ")
//   .map((word) => {
//     return word[0] + '.';
//   })
//   .join('');
// } 

function getInitials(name) {
  return name[0];

const initials = getInitials('figure me')
initials;





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
