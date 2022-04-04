const cuadrado = function(x) {
    return x * x;
}
console.log(cuadrado(12));

const ruido = function() {
    console.log("kataplum!");
}
ruido();

const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i<exponente; i++){
        resultado *= base;
    }
    return resultado;
}
console.log(exponencial(2,10))

console.log(sumar(2,2));
function sumar(x,y) {
    return x+y;
}

const restar = (a, b) => {
    return a - b;
}
console.log(restar(4,2));

function saludar(quien){
    console.log("Hola "+ quien);
}
saludar("Explorer");
console.log("Bye");

//Excepciones

function preguntaDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: "+ result);
}

function mirar(){
    if(preguntaDirection("Which way?") == "L"){
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see ", mirar());
} catch (error) {
    console.log("Something went wrong: "+error)
}