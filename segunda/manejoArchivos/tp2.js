//Manejo de archivos
const fs = require('fs');
const path = require('path');
const ARCHIVO = 'productos.txt';

const PRODUCTO= {id:0,title: '', price: 0, thumbnail: ''};

class Contenedor{
    constructor(producto){
        this.producto=producto;        
    }
    //guardar un producto
    save(producto){
        if(Existe){
            writeNewProduct(producto);
            return producto.id;

        }
      
    }
    //buscar el producto por id
    getById(id){
        if(Existe){
            searchProduct(id);

        }
    }  
    //traer todos los productos 
    getAll(){   
        if(Existe){
            this.getAll();

        }
    }
    //eliminar un producto
    deleteById(id){
        if(Existe){
            deleteProduct(id);
        }
    }
    //elimiar todo los productos
    deleteAll(){
        fs.unlink(path.join(__dirname, ARCHIVO), (err) => {
            if (err) throw err;
            console.log('Archivo eliminado');
        });

    }

    //actualizar un producto
    updateById(id, producto){
        if(Existe){
 
        }
    }   
  
}

//existe el archivo
function Existe(){
    try{
        if(fs.existsSync(path.join(__dirname, ARCHIVO))){
           
        }else{
            fs.mkdirSync(path.join(__dirname, ARCHIVO));
        }
        return true;

    }catch(error){
        console.log(error);
    }
    

}

//incrementar id de producto
function IncrementarId(){
  
        let productos = readProduct();
        let id = productos[productos.length-1].id;
        return id+1;    
   
}
async function writeNewProduct(producto){
    try{  
        if(await searchProduct(producto.id)){
            console.log('El producto ya existe');
        }else{
            if(await readProduct().length == 0){
             await fs.promises.writeFile(path.join(__dirname, ARCHIVO), JSON.stringify(producto));
        console.log('Se ha creado el producto');  }
        else{
            await fs.promises.appendFile(path.join(__dirname, ARCHIVO), JSON.stringify(producto));
            console.log('Se ha creado el producto');
        }
     }

     

    }catch(error){
        console.log(error);
    }

  
}
async function readProduct(){
    try{
        const data = await fs.promises.readFile(path.join(__dirname, ARCHIVO));
        return JSON.parse(data);
    }catch(error){
        console.log('No se pudo leer el archivo',error);

    }
}
 async function modifyProduct(id, producto){
    try{
        const productos = await readProduct();
        const productoIndex = productos.findIndex(producto => producto.id === id);
        productos[productoIndex] = producto;
        await fs.promises.writeFile(path.join(__dirname, ARCHIVO), JSON.stringify(productos));
        console.log('Se ha modificado el producto');
    }catch(error){
        console.log('No se pudo modificar el producto',error);
    }
}   
async function deleteProduct(id){
    try{
        const productos = await readProduct();
        const productoIndex = productos.findIndex(producto => producto.id === id);
        productos.splice(productoIndex, 1);
        await fs.promises.writeFile(path.join(__dirname, ARCHIVO), JSON.stringify(productos));
        console.log('Se ha eliminado el producto');
    }catch(error){
        console.log('No se pudo eliminar el producto',error);
    }
}   
//existe producto
async function searchProduct(id){
    try{
        const productos = await readProduct();
        const productoIndex = productos.findIndex(producto => producto.id === id);
        return productos[productoIndex];
    }catch(error){
        console.log('No se pudo buscar el producto',error);
    }
}



function CrearProducto(titles, prices, thumbnails){
   let productoNuevo = PRODUCTO;
    productoNuevo.id=IncrementarId();
    productoNuevo.title=producto.titles; 
    productoNuevo.price=producto.prices;
    productoNuevo.thumbnail=producto.thumbnails;
    return productoNuevo;

}
let unProducto1 = new Contenedor(CrearProducto('manzanas01', '10', './img/manzanas.jpg'));
let unProducto2 = new Contenedor(CrearProducto('manzanas02', '50', './img/manzanas.jpg'));
let unProducto3 = new Contenedor(CrearProducto('manzanas03', '20', './img/manzanas.jpg'));
 console.log (unProducto1.save(unProducto1));
    console.log (unProducto2.save(unProducto2));

    console.log (unProducto3.save(unProducto3));
    console.log (unProducto1.getById(1));
    console.log (unProducto2.getById(2));
    console.log (unProducto3.getById(3));
    console.log (unProducto1.getAll());
    console.log (unProducto2.getAll());
    console.log (unProducto3.getAll());
    console.log (unProducto1.deleteById(1));
    