// Temat: Parametry domyślne = 'default'

// ES5
/*function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    // jeśli wartości dla parametrów lastName oraz nationality nie zostaną określone to domyślnymi wartościami będą 'Smith' oraz 'American'
    lastName === undefined ? lastName = 'Smith' : lastName; 
    nationality === undefined ? nationality = 'American' : nationality;
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}*/

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    // parametry domyślne są sztywne – wszelkie braki wartości domyślnie zapełnia się wartością undefined. W ES6 pojawia się jednak sposób na określenie dowolnej wartości parametrów domyślnych poprzez zastosowanie dla każdego parametru znaku '='
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1994, 'Diaz', 'Spanish');