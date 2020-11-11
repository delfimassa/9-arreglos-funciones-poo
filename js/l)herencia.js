// cuando hereda una clase, hereda todas sus propiedades y todos sus metodos
// para los sistemas que tienen usuarios, en gral se utiliza la tipica "CLASE PERSONA"
// todos tienen los mismos datos, mail telefono, nombre de  usuario etc
// la diferencia podrian ser, en rolling por ej, estudiantes, comision, curso etc
class Persona {
    constructor(nombre, apellido, dni, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
    }
    // en realidad aqui tendriamos que hacer todos los set y get
    mostrarDatos() {
        document.write(`<br><br><h5>Persona</h5>
          Apellido y Nombre: ${this.apellido}, ${this.nombre}
          <br>DNI: ${this.dni}
          <br>Email: ${this.email}
          <br>Telefono: ${this.telefono}`);
    }
}
// heredar, a la izq la calse nueva, a la der el padre{}
class Alumno extends Persona{
    constructor(nombre, apellido, dni, email, telefono, legajo, curso, estado){
        // para no llamar con toodos los this, super los copia del padre
        super(nombre, apellido, dni, email, telefono);
        this.legajo = legajo;
        this.curso = curso;
        this.estado = true;
    }
    // sobreescribir un metodo
    mostrarDatos() {
        document.write(`<br><br><h5>Alumno</h5>
          Apellido y Nombre: ${this.apellido}, ${this.nombre}
          <br>DNI: ${this.dni}
          <br>Email: ${this.email}
          <br>Telefono: ${this.telefono}
          <br>Legajo: ${this.legajo}
          <br>Curso: ${this.curso}
          <br>Estado: ${this.estado}`);
    }
}

// los dni se guardan como texto
let jonardo = new Persona("Jonardo", "Plodzien", "19217391", "-", 4353587);
jonardo.mostrarDatos();
// alumno no tienen ningun metodo pero se puede usar el del padre y crear uno nuevo con lo sparametros que faltan
let jony = new Alumno("Jony", "Plodzien", "3655588", "jplodzien@gmail.com", "3816854257", 574, "Full-Stack");
jony.mostrarDatos();

class Profesor extends Persona{
    constructor(nombre, apellido, dni, email, telefono, curso, expediente, comisiones){
       super(nombre, apellido, dni, email, telefono);
       this.curso = curso;
       this.expediente = expediente; 
       this.comisiones = comisiones;
    }
    mostrarDatos() {
        document.write(`<br><br><h5>Profesor</h5>
          Apellido y Nombre: ${this.apellido}, ${this.nombre}
          <br>DNI: ${this.dni}
          <br>Email: ${this.email}
          <br>Telefono: ${this.telefono}
          <br>Curso: ${this.curso}
          <br>Expediente: ${this.expediente}
          <br>Comisiones: ${this.comisiones}`);
    }
}

let Emilse = new Profesor("Emilse","Arias","22556998","emilsearias@gmail.com","3815115637","Full-Stack",255,"1A, 2B, 7A");
Emilse.mostrarDatos();

class Administrativo extends Persona{
    constructor(nombre, apellido, dni, email, telefono, expediente, turno, area){
        super(nombre, apellido, dni, email, telefono);
        this.expediente = expediente; 
        this.turno = turno;
        this.area = area;
    }
    mostrarDatos() {
        document.write(`<br><br><h5>Administrativo</h5>
          Apellido y Nombre: ${this.apellido}, ${this.nombre}
          <br>DNI: ${this.dni}
          <br>Email: ${this.email}
          <br>Telefono: ${this.telefono}
          <br>Expediente: ${this.expediente}
          <br>Turno: ${this.turno}
          <br>Area: ${this.area}`);
    }
}

let Rocio = new Administrativo("Rocio","Sanchez","30554444","rociosanchez@hotmail.com","3816854751",344,"mañana","Recepcion")
Rocio.mostrarDatos();


