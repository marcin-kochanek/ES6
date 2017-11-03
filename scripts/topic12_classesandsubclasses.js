// Temat: Klasy oraz subklasy

// ES5
function Person5 (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

function Athlete5 (name, yearOfBirth, job, olimpicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    
    this.olimpicGames = olimpicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype); // połączenie dwóch funkcji kontruujących, aby zapewnić prawidłowe działanie prototype chain

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var john5 = new Person5('John', 1991, 'teacher');
var johnAthlete5 = new Athlete5('John', 1991, 'swimmer', 3, 10);

console.log(johnAthlete5);
johnAthlete5.calcAge();
johnAthlete5.wonMedal();

// ES6
// class declaration
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);  
    }
}

// subclass declaration
// połączenie dwóch funkcji kontruujących, aby zapewnić prawidłowe działanie prototype chain
class Athlete6 extends Person6 { 
    constructor (name, yearOfBirth, job, olimpicGames, medals) {
        super(name, yearOfBirth, job); 
        
        this.olimpicGames = olimpicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const john6 = new Person5('John', 1991, 'teacher');
const johnAthlete6 = new Athlete6('John', 1991, 'swimmer', 3, 10);

console.log(johnAthlete6);
johnAthlete6.calcAge();
johnAthlete6.wonMedal();