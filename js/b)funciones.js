function hola(){
    document.write("<br>Hola Mundo!");
}
hola();

// funciones que reciban mas de un parametro
function saludar (nombre, edad){
    document.write(`<br>Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Johny",25);

// a su vez, los parametros pueden ser variables declaradas previamente
// y no me importa que nombre y alumno se llamen distinti, actuan igual por que lo importante es el orden de los parametros
let alumno = "Juan";
let edadj = 23;
saludar(alumno)

// crear una funcion que me devuelva un valor, en estos casos casi siempre se usa return
// return sieeempre tiene que ser la ultima linea sino lo de abajo de ella no se ejecuta
function pesosadolares(pesos){
    let resultado = pesos/68
    return resultado.toFixed(2);
    // toFixed es una funcion a la cual le pido por parentesis cuantos decimales quiero que me muestre(truncar)
}
// para almacenar el valor que me devuelva en el return, creo una variable donde guardarlo
let aireacondicionado = pesosadolares(30000)
document.write(`<br> El precio en pesos del aire acondicionado equivale a USD$ ${aireacondicionado}`);