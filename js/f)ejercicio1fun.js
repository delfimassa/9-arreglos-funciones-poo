document.write("<h5>1)Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.</h5>")

function paroimpar(numero) {
    if (numero % 2 == 0) {
        document.write("El número que ud eligió es par");
    }
    else {
        document.write("El número es impar");
    }
}
paroimpar(numero = prompt("Ingrese un numero"))

