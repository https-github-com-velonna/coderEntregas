//clase 03/01/2021
//clouser una funcion dentro de otra
//cloback helps to call the function again and again
//callback, function inside function
//return inplicito y no se puede usar return

function mostrarLetras(string, timer) {
    let mifuncion = setInterval(letras,timer);//recibe dos parametros, una funcion  y el timer, no se invoca la funcin
    let counter = 0;
    function letras() {
        if (counter != string.length) {
            console.log(string.slice(counter, counter + 1));
            console.log(string[counter]);
            counter++;
        } else {
            fin();
            clearInterval(mifuncion);
        }
    }
  

}
let fin = () =>console.log("fin");

let string = "hola";
// mostrarLetras(string, 250);
// mostrarLetras("cacho", 500);
// mostrarLetras("nina", 1000);

////////////fs--file system
let fs = require("fs"); //file system
let archivo = fs.readFileSync("index.js", "utf-8");
let leerArchivo = () => console.log(archivo);
let escribirArchivo = fs.writeFileSync("C:/Users/v_nin/Desktop/mensajes.txt", "hola munditoljljlhhho");
let agregarArchivo = fs.appendFileSync("C:/Users/v_nin/Desktop/mensajes.txt", " hola mundppdsitoljljlhhhoAgregotx")
const saveLog = (texto) => {
    const lineOfData = `${texto}\n`;
    fs.appendFile('C:/Users/v_nin/Desktop/mensajes.txt', lineOfData, {encoding: 'utf8', flag: 'a'}, (error) =>{
      if (error) throw error;
      console.log('Nueva linea añadida correctamente');
    });
  }

//const data = require("./data.json");

/**
 * 
 * script  agragar  nodemom el nombre del archivo
 * esete maneja el compliador automatico
 */

// si el collback recibe un error y su conteido
 // do something else asynchronously and callback(null, result)

 console.log(saveLog('Nueva correctamente'));
 