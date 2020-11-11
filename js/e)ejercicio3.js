document.write("<h5>3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.</h5>")
// let dado1  = 0;
// let dado2 = 0;
// let array = [];

// for (let index = 0; index < 50; index++){
//     dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
//     dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
//     array[index] =  dado1+dado2;
// };

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// };

let Resultados = [];
for (let i = 0 ; i < 5; i++) {
    let dado1 =  Math.round((Math.random() * 5) + 1);
    document.write("<br> Resultado dado n° 1 = " + dado1);
    let dado2 = Math.round((Math.random() * 5) + 1);
    document.write("<br> Resultado dado n° 2 = " + dado2);
    let sumad1d2 = dado1 + dado2 ;
    document.write("<br> La suma de los dos = " + sumad1d2);
    Resultados.push(sumad1d2);
    }
    for (a=0; a < 5; a++){
        document.write( "<br>" + Resultados[a]);
    }