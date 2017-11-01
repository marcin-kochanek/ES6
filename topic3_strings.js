// Temat: Strings

const firstName = 'Mary';
let lastName = 'Smith';
const yearOfBirth = 1990;
let a = 10;
let b = 15;

function calcAge(year) {
    return 2017 - year;
}

console.log(`Hi, I'm ${firstName} ${lastName}.`);
console.log(`Wynik działania: ${a + b}.`);

// MULTI-LINE STRINGS
// ES5 - używano '\n' do przejścia do nowej linii
console.log('This is ' + firstName + ' ' + lastName + '.\nShe was born in ' + yearOfBirth + ', so today she is ' + calcAge(yearOfBirth) + ' years old.')

// ES6 - użyj po prostu entera
console.log(`This is ${firstName} ${lastName}. 
She was born in ${yearOfBirth}, so today she is ${calcAge(yearOfBirth)} years old.`);

// NEW METHODS
const fullName = `${firstName} ${lastName}`;

// metoda startsWith
console.log(fullName.startsWith('M')); //true
console.log(fullName.startsWith('mar')); //false, bo wielkość liter ma znaczenie

//metoda endsWith
console.log(fullName.endsWith('Smith')); //true

// metoda includes
console.log(fullName.includes(' ')); //true
console.log(fullName.includes('Marry')); //false

// metoda repeat
console.log(firstName.repeat(5)); //MaryMaryMaryMaryMary
console.log(`${firstName} `.repeat(5)); //Mary Mary Mary Mary Mary
console.log(`${firstName} 
`.repeat(5));
/*
Mary 
Mary 
Mary 
Mary 
Mary 
*/