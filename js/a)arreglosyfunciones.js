// formas de crear arreglos
// 1:
let personaje = ["Homero", "Bart", "Marge", "Lisa"];
// 2: armarlo y llenarlo despues(con push por ej)
let serie = [];
 
// para mostrar un valor de un arreglo
document.write("el primer elemento de mi arreglo es: " + personaje[0])

// para mostrar todo el arreglo, valor uno por uno, y no todo junto:
nombredemifuncion("Mostrar arreglo");

// agregar un item al final del arreglo
personaje.push("Maggie")
personaje.push("Moe")
nombredemifuncion("Nuevo elemento al final del arreglo");


// agregar un item a un lugar en particular, antes, o entre los elementos previos
// en la funcion splice, se sentencian 3 valores: el 1 es la posicion donde quiero mi nuevo elemento, el 2 si quiero borrar algun elemento del arreglo a partir de esta posicion, el 3 es el dato que agrego
personaje.splice(0, 0, "Flanders");
nombredemifuncion("Agregar un valor en un lugar en particular, ej: al ppio");

personaje.splice(3, 0, "Apu");
nombredemifuncion("Agregar un valor en un lugar en particular, ej: entre bart y marge");


// modificar el valor de un elemento del arreglo
personaje[6] = "Nelson";
nombredemifuncion("Modificar un valor del arreglo, ej Maggie");


// para modificar todos los valores, por ej agregarles un  asterisco(necesito un for, que recorra todo el arreglo)
for (let x = 0; x < personaje.length; x++) {
    personaje[x]= personaje[x]+"*"
}
nombredemifuncion("Modificar todos los valores, por ej agregarles un  asterisco");


// eliminar un valor (en una posicion  particular)del arreglo
personaje.splice(3,2);
nombredemifuncion("Eliminar un valor o varios a partir de un valor");


// localizar un valor dentro del arreglo
document.write("<br><h5>Buscar el elemento Bart en el arreglo</h5>");
for (let x = 0; x < personaje.length; x++) {
    if(personaje[x] == "Bart*"){
        document.write("El elemento fue encontrado el la posicion: "+ x);
    }
}

// primera funcion  y template string o bar tick o acento frances
// en este caso como es la primerafucion, deje nombredemifucion como nombre para que se entienda bien la sintaxis, en realidad esta funcion deberia llamarse buscar arreglo orque eso es lo que hace 
function nombredemifuncion(titulo){
    document.write(`<br><h5>${titulo}</h5>`);
    // mostrar todo el arreglo
for (let x = 0; x < personaje.length; x++) {
    document.write("<br>personaje: " + personaje[x]);
}
}
