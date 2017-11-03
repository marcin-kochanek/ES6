// Temat: Arrow functions

///////////// Basics /////////////
const yearsOfBirth = [1991, 1994, 1997, 1973, 1971];

//ES5
var ages5 = yearsOfBirth.map(function(current) {
   return 2017 - current; 
});
console.log(ages5);

//ES6
// jeśli jest 1 argument oraz 1 linia kodu to możesz pominąć nawiasy dla argumentów oraz nawiasy klamrowe i słowo return dla kodu
let ages6 = yearsOfBirth.map(current => 2017 - current);
console.log(ages6);

// jeśli są 2 argumenty to nie pomijaj nawiasów dla nich w funkcji
ages6 = yearsOfBirth.map((current, index) => `The age of ${index + 1} person: ${2017 - current}.`);
console.log(ages6);

// jeśli są 2 argumenty oraz więcej linii kodu to nie pomijaj nawiasów oraz nawiasów i słowa return w ciele funkcji
ages6 = yearsOfBirth.map((current, index) => {
    const now = new Date().getFullYear();
    const age = now - current;
    
    return `The age of ${index + 1} person: ${age}.`;
})
console.log(ages6);