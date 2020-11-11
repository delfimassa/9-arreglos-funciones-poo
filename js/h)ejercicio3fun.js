document.write("<h5>3)Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.</h5>")
function perimetro(ladoA, ladoB){
    let formula = (ladoA*2)+(ladoB*2);
    document.write("El perimetro es igual a: " + formula);
}
perimetro(prompt("ingrese el lado A"), prompt("Ingrese el lado B"));


