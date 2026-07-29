import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario una cantidad de dinero en dólares y el tipo de cambio actual del euro. 
// Convierta ambos valores a datos numéricos utilizando las funciones globales correspondientes. Posteriormente, 
// calcule la cantidad de euros que recibirá el usuario y muestre el resultado en pantalla. Un $1 es equivalente a 0.88e

rl.question("Ingrese la cantidad de dólares: ", function(dolares) {
    rl.question("Ingrese el tipo de cambio del euro: ", function(tipoCambio) {
        let cantidadDolares = parseFloat(dolares);
        let valorEuro = parseFloat(tipoCambio);

        let euros = cantidadDolares * valorEuro;

        console.log(`Dólares ingresados: $${cantidadDolares.toFixed(2)}`);
        console.log(`Euros recibidos: €${euros.toFixed(2)}`);

        rl.close();
        
    });
});