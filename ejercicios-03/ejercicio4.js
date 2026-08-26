//Elabore un programa que solicite el nombre del estudiante, apellido, año de ingreso y cuota mensual. 
//Muestre el nombre y apellido en mayúsculas, obtenga las primeras tres letras del apellido, convierta el año a texto y 
//muestre los últimos dos dígitos. Finalmente, presente la cuota mensual utilizando dos cifras decimales.

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
  rl.question("Ingrese su apellido: ", (apellido) => {
    rl.question("Ingrese el año de ingreso: ", (añoIngreso) => {
      rl.question("Ingrese la cuota mensual: ", (cuotaMensual) => {

        const nombreCompleto = `${nombre} ${apellido}`.toUpperCase();
        const primerasTres = apellido.slice(0, 3).toUpperCase();
        const añoTexto = añoIngreso.toString();
        const ultimosDos = añoTexto.slice(-2);
        const cuota = parseFloat(cuotaMensual).toFixed(2);

        console.log(`Nombre y apellido: ${nombreCompleto}`);
        console.log(`Primeras tres letras del apellido: ${primerasTres}`);
        console.log(`Año de ingreso: ${añoTexto}`);
        console.log(`Últimos dos dígitos del año: ${ultimosDos}`);
        console.log(`Cuota mensual: $${cuota}`);

        rl.close();
      });
    });
  });
});