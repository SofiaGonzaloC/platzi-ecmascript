// DEFAULT PARAMS =================================================================

// Version anterior. Era necesario establecer alores por defecto dentro de la funcion
function newFunction(name, age, country) {
    var name = name || 'sofia';
    var age = age || 20;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6. Establecemos valores por defecto al declarar los parametros
function newFunction2(name = 'Sofia', age = 20, country = 'MX') {
    console.log(name, age, country);
}

// Podemos llamar la funcion usando los default params o podemos mandarle argumentos nuevos

newFunction2();
newFunction2('Ana', '23', 'COL');

// TEMPLATE LITERALS =================================================================

// Template literals nos permite unir varios elementos sin tener que concatenar con +

let hello = "Hello"
let world = "World"

let epicPhrase = hello + ' ' + world
console.log(epicPhrase) // Hello World

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)
