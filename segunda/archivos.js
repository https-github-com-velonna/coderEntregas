const { url } = require("inspector");

class Archivo {
    constructor(nombre, contenido) {
        this.nombre = nombre;
        this.contenido = contenido;
    }
    guardar() {
        fs.writeFileSync(this.nombre, this.contenido);
    }
 
    leerArchivo(){
        try{
            let archivo = fs.readFileSync("./data.json", "utf-8");
            return JSON.parse(archivo);
        }catch(error){
            return [];
        }   
    }
    crearArchivo(url){
        try{
            let contenido = fs.readFileSync(url, "utf-8");
            return contenido;
        }catch(error){  //si no existe el archivo
            return "";
        }  
    } 
}

//ejecutar con npm run start