document.write("<h5>1)Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto..</h5>")
class Auto{
    constructor(colorp, marcap, modelop, estadop){
        this.color = colorp;
        this.marca = marcap;
        this.modelo = modelop;
        this.estado = estadop;
    }
    mostrarInfo(){
        document.write(`<br>Auto: ${this.color}
        Marca: ${this.marca} - Modelo:${this.modelo} - Estado:${this.estado}`)
    };
    encenderVehiculo(onoff){
        if (onoff == true){
            this.estado = " Encendido"
            // document.write(`<br>Este auto se encuentra encendido`)
        }else{
            this.estado = " Apagado"
            // document.write(`<br>Este auto se encuentra apagado`)
        }
    }
}

let auto1 = new Auto("rojo", "ford", "Fiesta 2009", "---");
auto1.mostrarInfo();
auto1.encenderVehiculo(true);
auto1.mostrarInfo();

