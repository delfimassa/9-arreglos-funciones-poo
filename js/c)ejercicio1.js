document.write("<h5>1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.</h5>")
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
for (let x = 0; x < meses.length; x++) {
    document.write("<br> " + meses[x]);
}