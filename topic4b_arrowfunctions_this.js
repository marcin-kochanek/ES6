///////////// Lexical 'this' keyword /////////////

// ES5
// funkcja callback w metodzie clickMe jest zwykłą funkcją w zakresie obiektu global, więc słowo kluczowe 'this' wskazuje na obiekt globalny (window), a nie na obiekt box5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        alert(this.color); // tutaj słowo 'this' wskazuje na obiekt box5
        
        var self = this; // rozwiązanie problemu poprzez następującą konstrukcję, gdzie do zmiennej self przypiszemy referencję do obiketu box5, a więc teraz zmienna self wskaże na obiekt box5, gdzie już występuje właściowść color
        
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + self.color + '.';
            alert(str); // słowo 'this' przy właściwości position odnosi się do globalnego obiektu, gdzie nie ma zdefiniowanej tej właściwości, a więc zwróci nam wartość undefined
        });
    }
}
// box5.clickMe();

// ES6
// stosowanie funkcji strzałkowych nie zmienia kontektu this

let wrongBox6 = {
    color: 'green',
    position: 1,
    clickMe: () => { // zastosowanie funkcji strzałkowej nie zmienia kontekstu 'this', które dalej odnosi się do obiektu globalnego
        document.querySelector('.green').addEventListener('click', () => { // 'this' przy właściwości position odnosi się do metody obiektu globalnego, gdzie nie mamy zdefiniowanych właściwości position oraz color
            const str = `This is box number ${this.position} and it is ${this.color}.`;
            alert(str);
        });
    }
}
//wrongBox6.clickMe();

let correctBox6 = {
    color: 'green',
    position: 1,
    clickMe: function() { // tutaj nie możemy zastosować funkcji strzałkowej
        document.querySelector('.green').addEventListener('click', () => { // 'this' przy właściwości position odnosi się do metody obiektu box6, gdzie mamy zdefiniowane właściwości position oraz color
            const str = `This is box number ${this.position} and it is ${this.color}.`;
            alert(str);
        });
    }
}
correctBox6.clickMe();

// ES5
var friends = ['Mark', 'Jane', 'Bob'];

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(current) {
       return this.name + ' is friend with ' + current;
    }.bind(this)); // wykorzystanie metody bind, czyli stworzenie kopii tej funkcji z podanym argumentem 'this' - koncept 'currying'
    
    console.log(arr);
}

new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map( current => `${this.name} is friend with ${current}`); // stworzenie kopii tej funkcji z podanym argumentem 'this' - koncept 'currying'
    
    console.log(arr);
}

new Person('Mike').myFriends6(friends);

