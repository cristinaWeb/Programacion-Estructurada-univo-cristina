import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario un dato cualquiera. Convierta el valor ingresado utilizando la función global parseFloat().
//Posteriormente, utilice la función global isNan() para verificar si el dato ingresado corresponde a un número.
//Finalmente, muestre en pantalla:
//El dato ingresado por el usuario.
//El resultado obtenido al utilizar parseFloat(). 
//El valor retornado por isNan().

rl.question("Ingrese cualquier dato: ", function(dato) {
    let datoConvertido = parseFloat(dato);
    let esNoNumero = isNaN(datoConvertido);

    console.log(`Dato ingresado: ${dato}`);
    console.log(`Resultado de parseFloat(): ${datoConvertido}`);
    console.log(`Valor retornado por isNaN(): ${esNoNumero}`);

    rl.close();
    
});