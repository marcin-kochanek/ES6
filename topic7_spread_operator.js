// Temat: Operator rozwijania = 'spread'

function addFourAges (a, b, c, d) {
     return (a + b + c + d);
 }
var ages = [20, 26, 46, 43];

var sum1 = addFourAges(20, 26, 46, 43);
console.log(sum1 + '\n-------------');

// ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2 + '\n-------------');

// ES6
const sum3 = addFourAges(...ages);
console.log(`${sum3}
-------------`);

// łączenie dwóch tabel
const familySmith = ['Mark', 'Jane', 'Sara'];
const familyMiller = ['John', 'Grace', 'Joe'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
console.log('-----------');

const paragraph = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [paragraph, ...boxes];

// Metoda forEach() w starych przeglądarkach nie wspierała obiektów NodeList, więc trzeba przemianować ten obiekt na tablice
Array.from(all).forEach(current => current.style.color = 'purple');

// Ostatnie wersje przeglądarek również już wspierają metodę forEach() dla obiektów NodeList
all.forEach(current => current.style.color = 'purple');

// Zamiana NodeList na tablicę
const newArray = [...document.querySelectorAll('.box')];
console.log(newArray);

