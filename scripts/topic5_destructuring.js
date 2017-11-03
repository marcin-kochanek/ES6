// Temat: Destrukturyzacja

// destrukturyzacja tablic
//ES5
var john = ['John', 26];

var name5 = john[0];
var age5 = john[1];

//ES6
const mary = ['Mary', 30];

const [name6, age6] = mary;
console.log(name6);
console.log(age6);
console.log('----------------------------');

const mike = ['Mike', 'Smith', 30, true];

const [firstName, lastName, , isMarried] = mike; // nie musimy przypisywać do zmiennej każdego z elementów tablicy
console.log(firstName);
console.log(isMarried);
console.log('----------------------------');

// destrukturyzacja obiektów
const car = {
    make: 'Audi',
    model: 'A3',
    mileage: 20000
};

const {make, model, mileage} = car;

console.log(make);
console.log(model);
console.log(mileage);
console.log('----------------------------');

// dodanie kolejnej właściwości za pomoca klucza
const key = 'passengers';
car[key] = 4;
console.log(car);
console.log('----------------------------');

//nadanie zmiennej dla danej właściwości
const {make: marka, mileage: przebieg} = car; // nie musimy odwoływać się do każdej właściwości obiektu
console.log(marka);
console.log(przebieg);
console.log('----------------------------');

/////////////////////

function calcAgeRetiremenet(year) {
    const personAge = new Date().getFullYear() - year;
    return [personAge, 65 - personAge]
}

const [personAge, retirement] = calcAgeRetiremenet(1991);
console.log(personAge);
console.log(retirement);
console.log('----------------------------');
