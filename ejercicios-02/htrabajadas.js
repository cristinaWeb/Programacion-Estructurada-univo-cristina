import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1-Elabore un programa que solicite al usuario el nombre del empleado, la cantidad de horas trabajadas durante la semana y 
// el pago recibido por cada hora de trabajo. Convierta los valores numéricos utilizando las funciones globales correspondientes. 
// Finalmente, calcule el salario semanal del empleado y muestre los resultados en pantalla.

rl.question("Ingrese el nombre del empleado: ",function(nombre){
    rl.question("Ingrese las horas trabajadas: ",function(horas){
        rl.question("Ingrese el pago por hora: ",function(pago){

            let horasTrabajadas = parseFloat(horas);
            let pagoHora = parseFloat(pago);

            let salario = horasTrabajadas * pagoHora;

            console.log("\n--Salario semanal--");
            console.log(`Empleado: ${nombre}`);
            console.log(`Salario semanal:$ ${salario.toFixed(2)}`);

            rl.close();
        })
    })
})