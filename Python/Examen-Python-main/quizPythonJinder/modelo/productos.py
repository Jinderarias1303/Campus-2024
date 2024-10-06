#PRODUCTOS

def productoss ():
    while True:
            productos = {}
            cod_prod = int(input(f"ingrese el codigo del producto : "))
            if cod_prod not in productos:
                nombre_prod = input("ingrese el nombre del producto: ")
                valorunit = int(input(f"ingrese valor unitario: "))

                productos[cod_prod] = {
                "Nombre del producto":nombre_prod,
                "Valor unitario": valorunit
        }
            else:
                print("El ID ingresado ya está registrado")
            continuar = input("¿Desea agregar otro producto? (S/N): ").upper()
            if continuar != 'S':
                break
    print(productos)
#DATOS CLIENTES

def clientess():
    while True:
            clientes = {}
            cod_cliente = int(input(f"ingrese el codigo del cliente: "))
            if cod_cliente not in clientes:
                nombre_cliente = input("ingrese el nombre del cliente: ")

                tel_cliente = int(input("ingrese telefono del cliente: "))

                clientes[cod_cliente] = {
                "Nombre del producto":nombre_cliente,
                "Valor unitario": tel_cliente
        }
            else:
                print("El ID ingresado ya está registrado")

            continuar = input("¿Desea agregar otro cliente? (S/N): ").upper()
            if continuar != 'S':
                break
    print(clientes)            


#DAROS DE FACTURAS

def facturass():
    while True:
            
            Facturas = {}
            cod_factura = int(input("ingrese codigo de la factura: "))
            if cod_factura not in Facturas:
                año = int(input("ingrese año: "))
                try:
                    mes = int(input("ingrese mes: "))
                    if mes <1 or mes >12:
                        print("mes no valido intente de nuevo")
                        continue

                except ValueError:
                    print("error opcion no valida")
                try:
                    dia = int(input("ingrese dia: "))
                    if dia <1 or dia >31:
                        print("mes no valido.")
                except ValueError:
                    print("error opcion no valida")
                cod_prod = int(input("ingrese codigo de producto: "))
                cantidad_prod = int(input("ingrese la cantidad del producto: "))
                valor_prod = int(input("ingrese el valor de acuerdo a las cantidades del producto "))
                 
                valor_factura =  print("el valor de la factura con iva es:")(valor_prod *0.19)


                Facturas[cod_factura] ={
                    "año":año,
                    "mes":mes,
                    "dia":dia,
                    "codigo producto":cod_prod,
                    "cantidad":cantidad_prod,
                    "valor producto":valor_prod,
                    "valor factura con iva":valor_factura

                    }
            else:
                print("El ID ingresado ya está registrado")

            continuar = input("¿Desea agregar otra factura? (S/N): ").upper()
            if continuar != 'S':
                break
    print(Facturas)






