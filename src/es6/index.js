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

// MULTILINEA =====================================================================

    // Versión inicial. Es necesario usar \n para hacer saltos de linea
    let lorem = "lorem \n"
    + "frase epica."

    // ES6. Usamos `` para poner saltos de linea
    let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase épica
    `;

    console.log(lorem)
    console.log(lorem2)

// DESESTRUTURACION =================================================================

    // Desestructurizar un array
    let person = ['Sofia', 'MX'];
    
    // Versión anterior
    console.log(person[0], person[0])
    
    // ES6
    let [name, country] = person;
    
    console.log(name, country)
    
    // Desestructurizar un objeto
    let person = {
        'name': 'sofia',
        'age': 20,
        'country': 'MX'
    }

    // Versión inicial
    console.log(person.name, person.age, person.country)

    // ES6. asigna a una constante los elementos del objeto person
    let { name, age, country } = person;

    console.log(name, age, country)

// SPREAD OPERATOR ====================================================================

    let team1 = ['Oscar', 'Julian', 'Ricardo']
    let team2 = ['Valeria', 'Jessica', 'Camila']

    // Crea un nuevo elemento con elementos ya creados
    let education = ['David', ...team1, ...team2]

    console.log(education)

// LET Y CONST =========================================================================

    // let solo esta disponible en el scope en el que es creado

    {
        var globalVar = "Global var";
    }

    {
        let globalLet = 'Global Let';
    }
    
    console.log(globalVar);
    console.log(globalLet); // Retorna un error, es necesario llamarlo desde su scope

    // Const no permite reasignar el valor

    const a = "b";

    a = "a"; // Retorna error

    console.log(a)

