// la notacion literal no se usa cuando necesito crear multiples objetos, se usan las CLASES
// en javascript, por convencion (no obligacion) el nombre de la calse va con mayuccula
// veremos el metodo constructor, los metodos son funciones tambien, en los parentesis van los parametros
class Personajes { 
    constructor(nombreparam, edadparam, razaparam, transformacionparam, poderparam){
        // 
        this.nombre = nombreparam;
        this.edad = edadparam;
        this.raza = razaparam;
        this.transformacion = transformacionparam;
        this.poder = poderparam;
        this.estado = true;
        // true en estado significa que esta vivo. Estas son propiedades cuyo valor ponemos por defecto
        // no viene de una variable por parametro. 
        this.plotArmor = false;
        // falso = no tiene armadura = se puede morir
    };
    // Metodos
    mostrarInfo(){
        document.write(`<br><h2>Personaje: ${this.nombre}</h2><br>
        Edad: ${this.edad} - Raza:${this.raza} - Poder:${this.poder} - Estado:${this.estado}`)
    };
    modificarVida(golpe){
        this.poder = this.poder - golpe;
    }
    // set y get nunca se nombran igual, se trabajan como si fueran propiedades
    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarRaza(){
        return this.raza;
    }
    set modificarNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    // no hay return porque el set no muestra nada sino que accede al nombre y lo cambia
};


// crear objeto a partir de la clase
let goku = new Personajes("kakaroto", 48, "alienigena", true, 100);
let vegeta = new Personajes("vegeta", 50, "alienigena", true, 100);
let bills = new Personajes("bills", 1000, "dios", false, 100000);

goku.mostrarInfo();
bills.mostrarInfo();

goku.modificarVida(15);
goku.mostrarInfo();

// COMO UTILIZAR GET Y SET
// no es necesario abrir los parentesis aca como mostrar info por ej
document.write("<br>Nombre "+goku.mostrarNombre);
document.write("<br>Raza: "+goku.mostrarRaza);

goku.modificarNombre = "Son Goku"

