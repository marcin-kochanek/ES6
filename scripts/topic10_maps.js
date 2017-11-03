// Temat 10: Obiekt Map (Słowniki)

const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Great, you are right!');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question')); // pobiera wartość z kolekcji na podstawie klucza
console.log('---------');
console.log(question.size); // sprawdza liczbę pozycji w słowniku
console.log('---------');

if (question.has(4)) { // sprawdza czy dany klucz znajduje się w naszej kolekcji 
    //question.delete(4) // usuwa daną pozycję
    console.log('Answer 4 is here.');
    console.log('---------');
}

// question.clear(); // usuwa wszystkie pozycje kolekcji

console.log(question.entries()); // zwraca iterator przeglądający wszystkie pozycje kolekcji
console.log('---------');

// By iterować po elementach kolekcji, możemy użyć dobrze znanej metody 'forEach' lub posłużyć się pętlą 'for-of', z racji tego, że klasa Map udostępnia nam swój wbudowany iterator.

question.forEach((value, key) => console.log(`This is the key: "${key}" and it's set to "${value}".`));
console.log('---------');

console.log(question.get('question'));
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`This is the key nr ${key}: "${value}".`);
    }
}
const ans = parseInt(prompt('Write the correct answer as an integer number.'));
console.log(question.get((ans === question.get('correct'))));
console.log('---------'); 