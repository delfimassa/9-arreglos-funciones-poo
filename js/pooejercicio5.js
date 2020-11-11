document.write("<h5>5- Crea una clase llamada Persona que siga las siguientes condiciones:<br>Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.<br>Los métodos que se debe poder utilizar  son:<br>mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.<br>Para realizar este método tener en cuenta la siguiente tabla de generaciones:</h5>")
class Personas {
    constructor(nombrep, edadp, dnip, sexop, pesop, alturap, nacimientop) {
        this.nombre = nombrep;
        this.edad = edadp;
        this.dni = dnip;
        this.sexo = sexop;
        this.peso = pesop;
        this.altura = alturap;
        this.nacimiento = nacimientop;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write("Es mayor de edad")
        } else {
            document.write("Es menor de edad")
        }
    }
    mostrarDatos() {
        document.write(`<br>Nombre: ${this.nombre}
        Edad: ${this.edad} - DNI:${this.dni} - Sexo:${this.sexo} Peso:${this.peso} 
        Altura:${this.altura} Nacimiento:${this.nacimiento}`)
    }
    generaDNI(){
        let dni = "";
        for(let i=1 ; i>10 ; i++){
          let cifra = Math.round((Math.random() * 8) + 1); 
          dni  = dni+cifra;
          document.write(dni);
        }  
    }
}

let Pato = new Personas("Pato", 29, "34956871", "M", "75 kilos", "1.80 m", 1991);
Pato.esMayorDeEdad();
Pato.mostrarDatos();
Pato.generarDNI();
