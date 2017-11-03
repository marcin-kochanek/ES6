// Temat: Parametry resztowe = 'rest'

// ES5
/*function isFullAge5() {
    var argsArray = Array.prototype.slice.call(arguments); 
    //przemianowanie na typ 'tablica'. Dlaczego? Bo obiekt arguments jest obiektem tablico-podobnym (Array-like). Można odwoływać się do jego elementów przy użyciu notacji arguments[0]. Ale nie ma żadnych właściwości obiektu Array, z wyjątkiem właściwości length. Więc chcąc użyć metody slice trzeba użyć powyższego sposobu. 
    
    argsArray.forEach(function(current) {
        console.log((2017 - current) >= 18);
    });
}

isFullAge5(2001, 1996, 2000);
console.log('----------');

// ES6
function isFullAge6(...years) {
    years.forEach(current => console.log((2017 - current) >= 18));
    console.log(years); // nowa tablica, której elementami są argumenty funkcji
}
isFullAge6(2001, 1996, 2000);*/


////////////////////// Dodanie argumentu określającego wiek, kiedy osoby osiągają pełnoletność ///////////////////////
// ES5
function isFullAge5(limit) {
    var argsArray = Array.prototype.slice.call(arguments, 1); // pominięcie pierwszego argumentu, którym akurat jest limit
    argsArray.forEach(function(current) {
        console.log((2017 - current) >= limit);
    });
}

isFullAge5(16, 2001, 1996, 2000);
console.log('----------');

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(current => console.log((2017 - current) >= limit));
    console.log(years); // nowa tablica, której elementami są argumenty funkcji OPRÓCZ elementu limit
}
isFullAge6(16, 2001, 1996, 2000);
console.log('----------');

/////////////// Inny przykład ////////////////
// ES5
function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) { // zaczynamy przeglądanie obiektu arguments od indeksu 1, aby pominąć pierwszy argument, którym akurat jest haystack (indeks 0)
    var needle = arguments[i];
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}
console.log(containsAll("banana", "b", "nan"));
console.log('----------');

// ES6
function containsAll(haystack, ...needles) {
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}
console.log(containsAll("banana", "b", "nan"));