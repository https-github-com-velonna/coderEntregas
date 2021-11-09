//Manejo de archivos
const fs = require('fs');
const path = require('path');
const ARCHIVO = 'productos.txt';

const PRODUCTO= {id:0,title: '', price: 0, thumbnail: ''};

class Contenedor{
    constructor(productos){
        this.listProducto=productos;        
    }
    //guardar un producto
    save(producto){
        console.log(producto);
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
            readProduct();

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
        if(Existe){

        let productos = readProduct();
        let id = productos.length>0? productos[productos.length-1].id:0;
        return id+1;    
        }else{
            return 0;
        }

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
        console.log("readProducto");
        console.log(data);
        return JSON.parse(data);
    }catch(error){
        console.log('No se pudo leer el archivo',error);

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
        console.log("buscando producto");
        console.log(productoIndex);
        console.log(productos[productoIndex]);
        return productos[productoIndex];
    }catch(error){
        console.log('No se pudo buscar el producto',error);
    }
}



function CrearProducto(titles, prices, thumbnails){
   let productoNuevo = PRODUCTO;
    productoNuevo.id=IncrementarId();
    productoNuevo.title=titles; 
    productoNuevo.price=prices;
    productoNuevo.thumbnail=thumbnails;
    return productoNuevo;

}
let unProducto1 = CrearProducto('manzanas01', '10', './img/manzanas.jpg');
let unProducto2 = CrearProducto('manzanas02', '50', './img/manzanas.jpg');
let unProducto3 = CrearProducto('manzanas03', '20', './img/manzanas.jpg');
let listProd=  [unProducto1,unProducto2,unProducto3];
console.log(listProd);
let contenedor = new Contenedor(listProd);
    console.log (contenedor.save(listProd[0]));
    console.log (contenedor.getById(1));
    console.log (contenedor.getAll());

  //  console.log (contenedor.deleteById(1));
    