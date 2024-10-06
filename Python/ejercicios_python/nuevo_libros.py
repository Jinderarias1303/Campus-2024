
def mostar_menu():
    print("1. Agregar libro")   
    print("2. Insertar libro en la segunda posición")   
    print("3. Eliminar libro de la tercera posición")   
    print("4. Mostrar número total de libros")
    print("5. Ordenar e imprimir lista de libros en orden alfabético")
    print("6. Salir")

def agregarr_libro(libros):
    if len(libros) < 5:
        libro= input("ingrese el nombre del libro:")
        libros.append(libro)
        print("libro agregado.")
    else :
        print("no puedes agregar mas libros. ")

def insertarr_libro(libros):
    if len(libros) < 5:
        libro = input("ingrese el nombre del libro para la posicion 2:")
        libros.insert(1,libro)
        print (" libro agregado. ")
    else:
        print("no hay espacio para otro libro. ")

def  eliminarr_libro(libros):
    if len(libros) >=  3:
        eliminar = libros.pop(2)
        print(f"libro {eliminar} de la posicion 3  ")
    else:
        print("no hay libros suficientes")

def mostrarr_libros(libros):
    num_libros = len(libros)
    if num_libros >0:
        print(f"el nuero total de libros es:{num_libros}")
    else:
        print("no hay libros en la lista. ")


def ordenarr_alfabe(libros):
     sorted(libros)
     print(f"los libros estan organizados:{libros}")


def opciones_a_escoger():
    libros = []
    while True:
        mostar_menu()
        opcion = int (input("ingrese la opcion a realizar:"))
        
        if opcion == 1 :
            agregarr_libro(libros)
        elif opcion == 2 :
            insertarr_libro(libros)
        elif opcion == 3 :
            eliminarr_libro(libros)
        elif opcion == 4 :
            mostrarr_libros(libros)
        elif opcion == 5 :
            ordenarr_alfabe(libros)
        elif opcion == 6 :
            print("el progrma se detendra. ")
            break
        else:
            print("opcción no valida, intente de nuevo.")

if __name__ == "__main__":
    opciones_a_escoger()