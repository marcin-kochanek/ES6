// Temat: let oraz const

/* -- 1 --
// ES5
var name5 = 'Jane Smith';
name5 = 'Jane Miller';
console.log(name5);

// ES6
let age6 = 30;
age6 = 31;
console.log(age6);

const name6 = 'Jane Smith';
name6 = 'Jane Miller';
console.log(name6);
*/

/* -- 2 -- 
// ES5 (function-scoped)
function drivingLicence5(passedTest) {
    var firstName = 'John';
    
    if (passedTest) {
        var birthdayPresent = 'car';
    }
    
    console.log(firstName + ' will receive a ' + birthdayPresent + ' for his birthday as he has a driving license.'); // użycie zmiennej wewnątrz funkcji, w której została zadeklarowana -> ok
}

drivingLicence5(true);

// ES6 (block-scoped)
function drivingLicence6(passedTest) {
    const firstName = 'John';
    
    if (passedTest) {
        let birthdayPresent = 'car';
    }
    
    console.log(firstName + ' will receive a' + birthdayPresent +  ' his birthday as he has a driving license.'); // użycie zmiennej poza blokiem, w którym została zadeklarowana -> error
}

// ES6 (block-scoped)*
function drivingLicence6(passedTest) {
    const firstName = 'John';
    let birthdayPresent;
    
    if (passedTest) {
        birthdayPresent = 'car';
    }
    
    console.log(firstName + ' will receive a' + birthdayPresent +  ' his birthday as he has a driving license.'); // rozwiązanie poprzedniego problemu - > zadeklarowanie wcześniej
}
drivingLicence6(true);
*/

/* -- 3 -- 

// ES5
var i = 30;
for (var i = 0; i < 5; i++) { // zmienna 'i' jest ponownie zadeklarowanan z przypisaniem innej wartości
    console.log(i);
}
console.log(i);

// ES6
let j = 30;
for (let j = 0; j < 5; j++) { // zmienna 'j' jest nową zmienną w bloku
    console.log(j);
}
console.log(j);
*/

/* -- 4 --

// ES5
console.log(aVar);  // undefined -> jest dostępna z zainicjalizowaną wartością 'undefined'

var aVar;

console.log(aVar); // undefined -> jest dostępna z zainicjalizowaną wartością 'undefined'
aVar = 10;
console.log(aVar); // 10

// ES6
console.log(aLet);  // zwróci ReferenceError: aLet is not defined -> nie jest dostępna, znajduje się w temporary dead zone

let aLet;

console.log(aLet); // undefined -> jest dostępna z zainicjalizowaną wartością 'undefined'
aLet = 10;
console.log(aLet); // 10
*/