// Crear un objeto, notacion literal
// las propiedades van con dos puntos y se separan con coma, son un par  de valores, una clave,nombre, 
// y el valor de la clave
let goku = {
    nombre: "kakaroto",
    edad: 48,
    raza: "alienigena",
    transformacion: true,
    // hijos: [{
    //     nombre: "goten",
    //     edad: 7
    // }, {
    //     nombre: "gohan",
    //     edad: 25
    // }] se pueden hacer arreglos con objetos adentro
};

// mostrar objeto
document.write(`Personaje Goku: ${goku.nombre}`);
document.write(`<br>Personaje Goku: ${goku.edad}`);
document.write(`<br>Personaje Goku: ${goku["edad"]}`);
// las ultimas dos muestran lo mismo, son simplemente dos formas distintas de hacer lo mismo.

// agregar porpiedades
goku.poder = 100;
document.write(`<br>Personaje poder: ${goku.poder}`);

// mostrar o recorrer todas las porpiedades del objeto (hay varias formas, esta es una)
// antes de hacer el for, creo una variable
let llaves = Object.keys(goku) // llaves = ["nombre", "edad", "raza", "transformacion", "poder"] 
for(let i = 0; i<llaves.length; i++){
    let clave = llaves[i];
    document.write(`<br>Objeto Goku-${clave}: ${goku[clave]}`)
    // document.write(`Objeto Goku-${clave}: ${goku[llaves[i]]}`)
}        

let vegeta = {
    nombre: "vegeta",
    edad: 50,
    raza: "alienigena",
    transformacion: true,
}

// esta forma de crear otro objeto con las mismas propiedades se llama notacion literal.
// Se usa cuando hay que hacer uno o dos objetos solamente
// La notacion literal no se usa cuando necesito crear multiples objetos, se usan las CLASES 
// que estan en el sig archivo (J)
