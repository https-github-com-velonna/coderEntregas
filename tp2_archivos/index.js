let Contenedor = require('./contenedor.js');
let contenedor = new Contenedor("./productos.txt");


(async () => {
    let new_producto = await contenedor.save({
        "nombre": "Producto 4",
        "precio": 10,
        "foto":"unaurl4"

    });
   let data= await contenedor.getbyId(new_producto._id);
    console.log(data);
    // let id_delete = 2;
    // await contenedor.deleteById(id_delete);

})();
