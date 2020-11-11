document.write("<h5>4)Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.<br>Posteriormente, cree tres instancias de este objeto y guárdalas en un array.<br>Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.</h5>")
class Productos{
    constructor(codigop, nombrep, preciop){
        this.codigo = codigop;
        this.nombre = nombrep;
        this.precio = preciop;
    }
    mostrarInfo(){
        document.write(`<br>Codigo: ${this.codigo}
        Nombre: ${this.nombre} Precio: ${this.precio}`)
    };
}
let zapatillas = new Productos("ABC1", "Adidas Superstar", 3000);
// zapatillas.mostrarInfo();
let remera = new Productos("ABC2", "Remera nike blanca", 850);
// remera.mostrarInfo();
let pantalon = new Productos("ABC3", "Reebook windproof", 2000);
// pantalon.mostrarInfo();

let arregloObjetos = [];
arregloObjetos.push(zapatillas.mostrarInfo());
arregloObjetos.push(remera.mostrarInfo());
arregloObjetos.push(pantalon.mostrarInfo());


