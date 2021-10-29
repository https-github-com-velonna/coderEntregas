class Persona {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    saludar() {
        return `Hola, me llamo ${this.nombre} ${this.apellido} `;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor){
       this.libros.push({nombre, autor});
    } 
    getBookNames(){
        return this.libros.map(book => book.nombre);
    }

   
}
let listaMascotas = ["Milo","Carmelito","Pelusa"];
let listaLibros = [{nombre: 'El señor de los anillos', autor: 'J.R.R. Tolkien'},{nombre: 'El señor de los anillos 2', autor: 'J.R.R. Tolkien'},{nombre: 'El señor de los anillos 3', autor: 'J.R.R. Tolkien'}];
let usuario = new Persona('Juan', 'Perez', listaLibros,listaMascotas);

console.log(usuario.saludar());
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());
usuario.addMascota("chinchon");
usuario.addBook('El Hobbit', 'J.R.R. Tolkien');
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());

