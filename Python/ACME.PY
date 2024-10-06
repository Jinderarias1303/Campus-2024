# def menu_acme ():
# print("   PRODUCTOS ACME .")
# print("           MENU .")
# print(" 1- Agregar producto.")
# print(" 2- Buscar producto.")
# print(" 3- Listar productos.")
# print(" 4- Listar producto con menos inventario.")
# print(" 5- Listar producto con mayor porcentaje de descuento.")
# print(" 6- Listar producto con menor precio con descuento.")
# print(" 7- Listar producto con mayor precio en inventario.")
# print(" 8- Salir.")
# print(" >> Escoja una opción (1-8)?.")


productos = {}


cant = int(input("ingrese cantidad de productos: "))
for i in range(cant):
        iden = input(f"ingrese el id {i + 1}:")
        nombre_prod = input("nombre de el producto: ")
        precio = float(input("precio: "))
        cantidad = int(input("cantidad: "))
        desc = int(input("ingrese cantidad de descuentos:"))
        descuentos = []
        for a in range(desc):
            descuento= float(input(f"descuento {a + 1}:"))
            descuentos.append(descuento)

     

        

        productos[iden] = {
            "nombre producto":nombre_prod,
            "precio":precio,
            "cantidad":cantidad,
            "descuentos":descuentos
}
print(productos)

