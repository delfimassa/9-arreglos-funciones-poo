document.write("<h5>4)Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.</h5>")

function tablademultiplicar(numero){
    for ( let i =1 ; i < 11 ; i++){
    let tabla = numero * i
    document.write(`<br>${numero}x ${i}=${tabla}`)
}
}
tablademultiplicar (prompt("ingrese un numero"))

