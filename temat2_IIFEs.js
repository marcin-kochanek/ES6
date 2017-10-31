// Temat: IIFEs

// ES5
(function () {
    var a = 5;
})

console.log(a); // a nie jest zadeklarowana, ponieważ jest function-scoped

//ES6
{
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a + b); // a i b nie są zadeklarowane ze względu na fakt, że są block-scoped
console.log(c); // c jest zadeklarowana, ponieważ jest function-scoped