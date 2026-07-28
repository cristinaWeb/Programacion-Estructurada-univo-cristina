import readline from "node:readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- Elabore un programa que solicite una cantidad de horas y muestre su equivalencia en minutos.

rl.question ("Ingrese la cantidad de horas: ",function(horas){
    const minutos = Number(horas) * 60;

    console.log(`${horas} horas equivalen a ${minutos} minutos`);

    rl.close();
})