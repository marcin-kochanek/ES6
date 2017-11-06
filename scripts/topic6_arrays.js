// Temat: Arrays

const boxes = document.querySelectorAll('.box');

///// metoda 'from' //////

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue';
});

// ES6
// nowa metoda 'from' obiektu Array, która tworzy nową instację tablicy z obiektu podobnego do tablicy lub obiektu iterowalnego (w tym przypadku jest to obiekt NodeList powstały po użyciu querysSelectorAll)
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');

// wykorzystanie metody 'from' na stringu
const myName = Array.from('Marcin');                      
console.log(myName); // ["M", "a", "r", "c", "i", "n"]
console.log('-------------');

// Wykorzystanie funkcji strzałkowej jako funkcji mapującej, która jest wywoływana z każdym elementem tablicy
const doubleNumber = Array.from([1, 2, 3, 4], x => x * x);      
console.log(doubleNumber);
console.log('-------------');

///// for... of loop //////

// ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    } else {
        boxesArr5[i].textContent = 'I have changed to blue!';
    }
}*/

// ES6
for (const current of boxesArr6) {
    if (current.className.includes('blue')) {
        continue;
    } else {
        current.textContent = 'I have changed to blue!';
    }
}

///// //////
// ES5
var ages = [13, 22, 14, 17, 10, 9, 2];

var full = ages.map(function(current) {
   return current >= 18; 
});

console.log(full);
console.log(full.indexOf(true));
console.log('How old is the person? ' + ages[full.indexOf(true)]);
console.log('-------------');

// ES6
// nowe metody - 'findIndex' oraz 'find'
console.log(ages.findIndex(current => current >=18));
console.log(`How old is the person? ${ages.find(current => current >=18)}`);
console.log('-------------');
