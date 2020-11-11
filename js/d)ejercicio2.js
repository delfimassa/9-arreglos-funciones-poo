document.write("<h5>2) Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:<br>Mostrar la longitud del arreglo.<br>Mostrar en el documento web los ítems de las posiciones primera, tercera y última.<br>Añade en última posición la ciudad de París.<br>Escribe por pantalla el elemento que ocupa la segunda posición.<br>Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.</h5>")
//DECLARAMOS UNA ARREGLO DONDE VAMOS A GUARDAR CIUDADES
let arregloCiudades = [];
let ciudad = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CIUDADES
do {
    //PEDIMOS LA CADENA POR TECLADO
    ciudad = prompt("Introduce una ciudad");
    console.log(ciudad);
    if (ciudad!="0"&&ciudad!=null){
        arregloCiudades.push(ciudad);
    }
} while (ciudad!="0"&& ciudad!=null);
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO, porque vimos por consla que null es el valor que devuelve cuando se apreta cancelar
document.write(arregloCiudades);
document.write("<br>La cantidad ciudades ingresadas es: "+arregloCiudades.length);
document.write("<br>El primer elemento del arreglo es: "+arregloCiudades[0]
+"<br>El tercer elemento del arreglo es: "+arregloCiudades[2]+
"<br>El ultimo elemento del arreglo es: "+arregloCiudades[arregloCiudades.length-1]);

arregloCiudades.push("París")
document.write("<br>Le agregamos Paris al final del arreglo: " + arregloCiudades);

// imprimo el segundo elemento del array
document.write("<br> El elemento de la segunda posicion es :" + arregloCiudades[1]);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
arregloCiudades.splice(1, 1, "Barcelona");
document.write("<br>"+arregloCiudades);

arregloCiudades[3] = "delfi";
document.write("<br> "  + arregloCiudades);




