import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario una longitud expresada en metros. Convierta el valor ingresado a 
// un dato numérico utilizando la función global correspondiente y calcule su equivalente en centímetros, 
// considerando que 1 metro equivale a 100 centímetros. Muestre el resultado obtenido.

rl.question("Ingrese la longitud en metros: ",function(metros){
    let longitud = parseFloat(metros);
    let centímetros = longitud*100;

    console.log(`${longitud} metros equivale a ${centímetros} centímetros`)

    rl.close();

})