//Manejo de archivos
const fs = require('fs');
const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const ARCHIVO = 'productos.txt';

//const PRODUCTO= {id:0,title: '', price: 0, thumbnail: ''};

class Contenedor{
    constructor(productos){
        this.listProducto=productos;        
    }
    //guardar un producto
    save(producto){
       
          //  writeFiles(producto);
        appendFiles(producto);
    }
    //buscar el producto por id
    getById(id){
      fs.readFile(ARCHIVO, (err, data) => {
            if (err) throw err;
            console.log(data);
            let prods = JSON.parse(data);
            console.log(prods);
            let productos = JSON.stringify(prods).split(',');
           console.log(productos);
            let producto = productos.find(prod => prod.id == id);
         
        });
    }  
    //traer todos los productos 
    getAll(){   
        readFiles();
    }
    //eliminar un producto
    deleteById(id){
       
    }
    //elimiar todo los productos
    deleteAll(){
        fs.unlink(path.join(__dirname, ARCHIVO), (err) => {
            if (err) throw err;
            console.log('Archivo eliminado');
        });

    }
 
  
}

async function writeFiles(producto){
    try{
        await fs.promises.writeFile(ARCHIVO, JSON.stringify(producto));
        console.log(`Archivo guardado ${producto.id}`);
    }catch(error){
        console.log(error);
    }   
}

async function appendFiles(producto){
    try{
        await fs.promises.appendFile(ARCHIVO, JSON.stringify(producto));
        console.log(`Archivo guardado ${producto.id}`);
    }catch(error){
        console.log(error);
    }   
}
async function readFiles(){
    try{
        console.log("Leyendo");
        await fs.promises.readFile(ARCHIVO, (err, data) => {
            if (err) throw err;
          //  console.log(data);
            let prods = JSON.parse(data);
            console.log(prods);
          
        });
    }catch(error){
        console.log(error);
    }
}

let producto1 = {};
producto1.id = 1;
producto1.title = 'Laptop';
producto1.price = 20000;
producto1.thumbnail = 'laptop.jpg';

let producto2 = {};
producto2.id = 2;
producto2.title = 'Television';
producto2.price = 30000;
producto2.thumbnail = 'tv.jpg';

let contenedor = new Contenedor([producto1, producto2]);
//contenedor.save(producto1);
//contenedor.save(producto2);
//contenedor.getById(2);
contenedor.getAll();