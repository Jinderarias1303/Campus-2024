def menu1 ():
    while True:
        print(" -------------------------------------")
        print("|                                     |")
        print("|      1) agregar productos.          |")
        print("|      2) agregar clientes .          |")
        print("|      3) agregar factura  .          |")
        print("|      4) generar informe  .          |")
        print("|      5) Salir            .          |")
        print("|                                     |")
        print(" -------------------------------------")

        print("---> opcion ?",end="")
        try:
                    Opcion = int(input())
                    if Opcion < 1 or Opcion >5:
                        print("error opcion no valida")
                        print("presione cualquier tecla para volver al menu")
                        continue
                    return Opcion
        except ValueError:
                    print("error opcion no valida")
                    print("presione cualquier tecla para volver al menu")