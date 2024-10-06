
import json

def guardar(lib):
    with open("manejo de errores/libreria.json","w") as fd:
        json.dump(lib, fd)
        if not fd.close:
            fd.close()
def leerprecio():
    while True:
        try:
            precio = int(input("precio del libro"))
            if precio < 500 :
                print("error. precio incorrecto.")
                continue
            return precio
        except ValueError:
            print("error. precio invalido")


def leerautor():
    while True:
        try:
            autor = input("autor del libro")
            if len(autor.strip()) == 0:
                print("error. codigo invalido")
                continue
            return autor
        except Exception as e:
            print("error. al ingrear el autor.\n"  + e )



def leertitulo():
    while True:
        try:
            tit = input("titulo del libro")
            if len(tit.strip()) == 0:
                print("error. codigo invalido")
                continue
            return tit
        except Exception as e:
            print("error. al ingrear al titulo.\n"  + e )

def leercodigo():
    while True:
        try:
            cod = input("codigo del libro")
            if len(cod.strip()) == 0:
                print("error. codigo invalido")
                continue
            return cod
        except Exception as e:
            print("error. al ingrear al codigo.\n"  + e )
    


def insertar(lib):
    print("\n\n-----1.INSERTAR------")
    cod = leercodigo()
    if cod not in lib:
        titulo =leertitulo()
        autor = leerautor()
        precio = leerprecio()

        datlib ={
            "titulo": titulo,
            "autor": autor,
            "precio": precio
        }
        
        lib[cod]= datlib
        lib = dict(sorted(lib.items()))
    else:
        print("el codigo ya existe en la libreria.")
    
    input("presione cualquier tecla para volver al menu")

def consultar(lib):
      print("\n\n-----2.CONSULTAR-----")
      input("presione cualquier tecla para volver al menu")

"""
libreria = {
    codigo1(str):{
        titulo:(str)
        autor:(str)
        precio: int
    },
    codigo2(str):{
        titulo:(str)
        autor:(str)
        precio: int
    }
}

"""


def menu():
    while True:
        print("------ LIBRERIA------")
        print("-----1.INSERTAR------")
        print("-----2.CONSULTAR-----")
        print("-----3.SALIR---------\n")

        print("---> opcion ?",end="")
        try:
            Opcion = int(input())
            if Opcion < 1 or Opcion >3:
                 print("error opcion no valida")
                 print("presione cualquier tecla para volver al menu")
                 continue
            return Opcion
        except ValueError:
            print("error opcion no valida")
            print("presione cualquier tecla para volver al menu")

#programa principal

libreria ={}

while True: 
    op = menu()
    match op:
        case 1:
            libreria = insertar(libreria)
            guardar(libreria)
        case 2:
            consultar(libreria)
        case 3:
            print("GRACIAS por usar el software.\n")
            break
      