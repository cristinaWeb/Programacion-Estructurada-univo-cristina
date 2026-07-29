import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario el precio unitario de un producto y la cantidad que desea comprar. 
// Convierta ambos datos utilizando las funciones globales correspondientes. Posteriormente, calcule el total a pagar 
// por la compra y muestre el resultado en pantalla.

rl.question("Ingrese el precio unitario del producto: ", function(precio) {
    rl.question("Ingrese la cantidad que desea comprar: ", function(cantidad) {
        let precioUnitario = parseFloat(precio);
        let cantidadProductos = parseFloat(cantidad);

        let totalPagar = precioUnitario * cantidadProductos;

        console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
        console.log(`Cantidad: ${cantidadProductos}`);
        console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

        rl.close();
    });
});