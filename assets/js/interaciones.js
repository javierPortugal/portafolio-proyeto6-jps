console.log("entro a archivo iteraciones.js");


let nombres = [
    "Norberto",
    "Katherine",
    "Karla",
    "Daniel",
    "Alfredo",
    "Jose",
    "Daniela",
    "Berenice",
    "Adrian",
    "Jesus"
];

let platillos = [
    "Tacos",
    "Mole",
    "Paella",
    "Sushi",
    "buñelos",
    "changua"
];

console.log("Elementos arreglo:", nombres.length);

// for (let index = 0; index < nombres1.length; index++) {
//     console.log(nombres1[index]);
// }


platillos.forEach(platillo => {
    console.log(platillo);
    // platillo = platillo.toUpperCase();
});

nombres.forEach(nombre => {
    console.log(nombre);
});

//  En casos sencillos(una linea) puedes omiter el return
// let nuevoArreglo = nombres.map(nombre =>
//     nombre.toUpperCase()
// );

let nuevoArreglo = nombres.map(nombre =>{
    return "* " + nombre.toUpperCase();
});

console.log(nombres);
console.log(nuevoArreglo);

let nombreFiltrados = nombres.filter(nombre =>{
    // return nombre.startsWith("K");
    return nombre.length < 6;
});

console.log(nombreFiltrados);


let nombreFiltradosFind = nombres.find(nombre =>{
    // return nombre.startsWith("K");
    return nombre.length < 6;
});

console.log(nombreFiltradosFind);