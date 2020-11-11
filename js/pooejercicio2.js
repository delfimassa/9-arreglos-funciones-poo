document.write("<h5>2)Escribe un programa que cree un objeto -cuenta- con las siguientes propiedades:<br>Una propiedad titular con el valor -Alex-.<br>Una propiedad saldo, teniendo como valor inicial 0.<br>Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro<br>Un método extraer() que permita retirar la cantidad pasada como parámetro.<br>Un método informar() que retorne la información del estado de la cuenta. <br>Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.</h5>")
class Personas{
    constructor(titularp, saldop){
        this.titular = titularp;
        this.saldo = saldop;
    }
    mostrarInfo(){
        document.write(`<br>Titular: ${this.titular}
        Saldo: ${this.saldo}`)
    };
    depositarPlata(deposito){
        this.saldo = this.saldo + deposito;
    }
    extraerPlata(extraccion){
        this.saldo = this.saldo - extraccion;
    }
    informarEstado(){
        document.write(`<br>El saldo de tu cuenta es: ${this.saldo}`)
    }
}

let Alex = new Personas("Alex", 0)
Alex.mostrarInfo();
Alex.depositarPlata(4000);
Alex.mostrarInfo();
Alex.extraerPlata(500);
Alex.mostrarInfo();
Alex.informarEstado();