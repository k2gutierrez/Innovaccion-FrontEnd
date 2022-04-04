console.log("-----------------Integers------------------------");

var numero1;
numero1 = 4;
var numero2;
numero2 = 2;
console.log("Número 1 es: "+numero1+" Número 2 es: "+numero2);

console.log("-----------------Strings------------------------");

var frase1;
frase1 = "Ejemplo comillas dobles";
var frase2;
frase2 = 'Ejemplo comillas simples';
var frase3;
frase3 = `Ejemplo comillas invertidas ${numero2}`
console.log(frase1);
console.log(frase3);

console.log("-----------------Condicionales------------------------");

console.log(numero1 > numero2);

console.log("-----------------Operador lógico AND------------------------");

console.log(true && false);

console.log("-----------------Operador lógico OR------------------------");

console.log(true || false);

console.log("-----------------Arreglos / Vectores------------------------");

let listaDeNumeros = [2, 3, 5, 7, 11, 234];
console.log(listaDeNumeros[0]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);

let listaDePalabras = ["carlos", "pedro", "paco", "luis"];
console.log(listaDePalabras);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("-----------------Objetos------------------------");

let explorer = {
    nombre: "carlos",
    email: "carlos@explorer.com",
    numReg: 12345678910,
    mision: "FrontEnd",
    proyectos: ["abogabot", "taqueria", "pastelería", "vacunación"],
    proPer: {
        escolar: "master",
        profesional: "developer",
        personal: "deportes a mis hijos"
    }
}

console.log(explorer);
console.log(explorer.email);
console.log(explorer.proPer);

// comentario
/* Asi va otro tipo de comentario*/

console.log("-----------------Flujo Condicional------------------------");

let number1 = 4;
let number2 = 6;

// if else

if (number1 > number2 && number2 > 5) {
    console.log("El numero 1 es mayor que el numero 2")
}
else if (number1 == number2 || number1 < 3){
    console.log("Ambos son iguales")
}
else {
    console.log("El numero 2 es mayor al numero 1")
}

// Ciclo condicional
// While
let numberWhile = 0;
while (numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Ya salió del While "+numberWhile);

//Do While
let numeroDoWhile = 10;
do{
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Ya salió del do While "+numeroDoWhile);

// For  (inicio, final, que haré)
let numeroFor=0
for (numeroFor; numeroFor<=12; numeroFor=numeroFor+1){
    console.log(numeroFor);
}
console.log("Ya salió del for "+numeroFor);

//Switch - Opciones sin anidar
switch (prompt("¿Cómo está el clima")){
    case "lluvioso":
        console.log("no te vayas a mojar");
        break;
    case "soleado":
        console.log("ponte bloqueador");
        break;
    case "nublado":
        console.log("tapate bien");
        break;
    default:
        console.log("No sé cómo está el clima");
        break;
}
console.log("Aquí nos salimos del switch");