import readline from "node:readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//2- Elabore un programa que solicite la base y la altura de un rectángulo y calcule su área.
rl.question ("Ingrese la base del retángulo: ",function(base){
    rl.question ("Ingrese la altura del rectángulo: ",function(altura){

        const area= Number(base) * Number(altura);

        console.log(`El área del rectángulo es: ${area}`);

        rl.close();
    })
})