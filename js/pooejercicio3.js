document.write("<h5>3)Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área</h5>")
class Rectangulos{
    constructor(altop, anchop){
        this.alto = altop;
        this.ancho = anchop;
    }
    mostrarInfo(){
        document.write(`<br>Alto: ${this.alto}
        Ancho: ${this.ancho}`)
    };
    perimetro(){
        document.write(" El perimetro es: " + (this.alto*2+this.ancho*2));
    };
    area(){
        document.write(" El area es: " + (this.alto*this.ancho));
    }
    set modificarAlto(altoNuevo){
        this.alto = altoNuevo;
    };
    set modificarAncho(anchoNuevo){
        this.ancho = anchoNuevo;
    };
}

let rectangulo1 = new Rectangulos(20, 30);
rectangulo1.mostrarInfo();
rectangulo1.perimetro();
rectangulo1.modificarAlto = 5;
rectangulo1.mostrarInfo();
rectangulo1.perimetro();

rectangulo1.modificarAncho = 7;
rectangulo1.mostrarInfo();
rectangulo1.perimetro();

rectangulo1.modificarAlto = 5;
rectangulo1.modificarAncho = 3;
rectangulo1.mostrarInfo();
rectangulo1.perimetro();
rectangulo1.area();

