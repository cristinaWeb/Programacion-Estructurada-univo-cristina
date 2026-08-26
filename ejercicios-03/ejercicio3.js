//Elabore un programa que trabaje con un código numérico de ocho dígitos. Convierta el código a una cadena de texto y 
//posteriormente muestre únicamente los primeros cuatro dígitos utilizando el método .slice().

let codigo = 20260059;
let codigoTexto = codigo.toString();
let resultado = codigoTexto.slice(0, 4);

console.log(resultado);