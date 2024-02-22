let arreglo1 = [
    "Chilaquiles",
    "Tacos",
    "Tostadas",
    "Flautas",
    "Enomoladas"
];

console.log(arreglo1[0], "-Posicion 0");
console.log(arreglo1[1], "-Posicion 1");
console.log(arreglo1[2], "-Posicion 2");
console.log(arreglo1[3], "-Posicion 3");
console.log(arreglo1[4], "-Posicion 4");


// console.log("La comida del dia es:" + arreglo1[3]);
console.log(`La comida del dia es: ${arreglo1[3]}`);

// mutar(cambiar) de valor un elemento del arreglo
arreglo1[4] = "Quesadilla";
console.log(arreglo1[4], " Nueva posicion 4");
console.log("Mutacion de arreglo", arreglo1);

// let nombreUsuario = prompt("Cual es tu nombre?");
// let apellidoUsuario = prompt("Cual es tu apellidoDaniela?");

// console.log(`El nombre del usuario es: ${nombreUsuario} ${apellidoUsuario}`);

// arreglo1[5] = nombreUsuario +" "+ apellidoUsuario;
arreglo1[5] = "burrito";

console.log(arreglo1, "hay un nombre en lugar de comida");

console.log("El largo del arreglo es:", arreglo1.length);

// arreglo1.push("Sopa Tortilla");

// el ultio fue burrit0
// arreglo1.pop();
// el ultimo fue quesadilla
// arreglo1.pop();

// Lo amnda al principio del arreglo
// arreglo1.shift();
let largoArreglo = arreglo1.length;
let posicionMenosDos = largoArreglo - 2;
console.log(arreglo1[posicionMenosDos]);

// arreglo1.splice(2,1);
// Primer parametro es el index(posicion) segundo es la cantidad de elementos
// arreglo1.splice(1,1);

arreglo1.splice(6,1,"Sopes")

console.log(arreglo1);







