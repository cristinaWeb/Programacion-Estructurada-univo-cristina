import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//2-Elabore un programa que solicite al usuario el precio de un producto y el porcentaje de descuento que se aplicará. 
// Convierta ambos valores a datos numéricos utilizando las funciones globales correspondientes. Posteriormente, 
// calcule el valor del descuento y el precio final que deberá pagar el cliente, mostrando ambos resultados en pantalla.

rl.question("Ingrese el precio del producto: ",function(precio){
    rl.question("Ingrese el porcentaje de descuento: ",function(descuento){

        let precioProducto = parseFloat(precio);
        let porcentaje = parseFloat(descuento);

        let valorDescuento = precioProducto * porcentaje/100;
        let precioFinal = precioProducto - valorDescuento;

        console.log(`Precio original: $${precioProducto.toFixed(2)}`);
        console.log(`Valor del descuento: $${valorDescuento.toFixed(2)}`);
        console.log(`Precio del final: $${precioFinal.toFixed(2)}`);

        rl.close();

    })
})