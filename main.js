//1. Declarar dos variables con la palabra reservada "var", imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" 
//en la consola. Las variables pueden ser estáticas.

//Variables
var num1 = 10;
var num2 = 5;

console.log("#Problema No.1 \n\nVariable No.1: "+ num1 + "\nVariable No.2: " + num2);
//Suma
console.log("\nLa suma de las variables es igual a: " + (num1 + num2));
//Resta
console.log("La resta de las variables es igual a: " + (num1 - num2));
//Multiplicación
console.log("La multiplicación de las variables es igual a: " + (num1 * num2));
//División
console.log("La división de las variables es igual a: " + (num1 / num2));

//2. Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.

//Variables
let myvar1 = "Laboratorio"
let myvar2 = " No.5"

//Concatenación
console.log("\n#Problema No.2 \n\n" + myvar1 + myvar2);

//3. Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.
const lab = "a";
const num = 1;
console.log("\n#Problema No.3 \n\n" +"Tipo de variable lab: " + (typeof lab) + "\nTipo de variable num: " + (typeof num));


//4. Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
//un string, un booleano y un objeto vacío, en ese mismo orden.
let myobj = {
    Llave1: 1,       
    Llave2: "entero",
    Llave3: true,
    Llave4: {},
}

console.log("\n#Problema No.4 \n\n" 
+ "Llave1 valor: "+ (typeof myobj.Llave1)  
+ " \nLlave2 valor: "+ (typeof myobj.Llave2)  
+ " \nLlave3 valor: "+ (typeof myobj.Llave3)  
+ " \nLlave4 valor: "+ (typeof myobj.Llave4)  
);
