// Temat: Obiekt Set (Zbiór)

let set = new Set([1, 1, 2, 3, 3, 4, 5]);
console.log(set.size); // 5, ponieważ zbiór może zawierać tylko unikalne wartości
console.log('---------');

let randomNumbers = new Set([1, 2, 3, 4]);
console.log(randomNumbers);
console.log(randomNumbers.size);
console.log('---------');

randomNumbers.add(1); // dodanie wartości, która już występuje w kolekcji (zbiorze)
console.log(randomNumbers);
console.log(randomNumbers.size);
console.log('---------');

randomNumbers.add(5); //dodanie wartości, której jeszcze nie ma w kolekcji (zbiorze)
console.log(randomNumbers);
console.log(randomNumbers.size);
console.log('---------');

randomNumbers.add('1'); // dodanie wartości, której jeszcze nie ma w kolekcji (zbiorze), jako że dodajemy stringa '1' a nie typ numbers
console.log(randomNumbers);
console.log(randomNumbers.size);
console.log('---------');

// Iterowanie po elementach kolekcji przebiega identycznie jak dla Map
randomNumbers.forEach(value => console.log(value));
console.log('---------');

for (let value of randomNumbers) {
    console.log(value);
}