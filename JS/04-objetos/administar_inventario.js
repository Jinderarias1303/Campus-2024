let producto = [];
let salir = false;

while(!salir){
    let opc = prompt(`               **************************
        *          MENU                     *
        * 1) agregar producto        *
        * 2)Eliminar producto        *
        * 3)mostrar inventario       *
        * 4)buscar producto          *
        * 5) Salir                   *
        * elija una opc del (1/4)    *
        * **************************`)
        
    switch(opc) {
    case "1":
        let nombre_producto = prompt("Ingrese el nombre del producto:")
        let id_producto = prompt("Ingrese el ID del producto: ")
        producto.push({nombre_p: nombre_producto, ID_p:id_producto});
        document.write( `producto ${nombre_producto} agg <br>`);
            
        break;
    case "2":
        let idEliminar = prompt("Ingrese el ID del producto a eliminar:");
        let indexEliminar = producto.findIndex(p => p.ID_p === idEliminar);
        if (indexEliminar !== -1) {
            producto.splice(indexEliminar, 1);
            alert("Producto eliminado");
            document.write(`producto con el id: ${idEliminar} a sido eliminado` );
        } else {
            alert("Producto no encontrado.");
        }
    break;
    case "3":
            if (producto.length ===0 ){
                alert("el inventario esta vacío")
                document.write("el inventario esta vacío")
            }else{
                let inventario = "mostrando inventario:\n "
                producto.forEach(p =>{
                    inventario += `ID:${p.ID_p}, Nombre:${p.nombre_p}\n`
                });
                document.write(inventario)
            }
        
        break;
    case "4":
        let idBuscar = prompt("Ingrese el ID del producto a buscar:");
        let buscando_producto = producto.find(p => p.ID_p === idBuscar);
        if (buscando_producto) {
            document.write(`Producto encontrado: ID: ${buscando_producto.ID_p}, Nombre: ${buscando_producto.nombre_p}`);
        } else {
            document.write("Producto no encontrado.");
        }
        break; 
    
    case "5":
        salir = true;
        alert("Saliendo.")
        break;
    default:
        alert("opcion no valida ");
        }
}
    

    


