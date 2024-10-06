def mostar_menu():
    print("1. Agregar libro")
    print("2. Insertar libro en la segunda posición")
    print("3. Eliminar libro de la tercera posición")
    print("4. Mostrar número total de libros")
    print("5. Ordenar e imprimir lista de libros en orden alfabético")
    print("6. Salir")

def agregar_libros(libros):
    if len(libros) < 5:  # Cambiado <= por < para permitir un máximo de 5
        libro = input("Ingresa el nombre del libro: ")
        libros.append(libro)
        print(f'Libro "{libro}" agregado a la lista.')
    else:
        print("Has alcanzado el límite de 5 libros.")

def insertar_libros(lista_libros):
    if len(lista_libros) < 5:  # Asegurarse de que haya espacio para más libros
        libro = input("Ingresa el nombre del libro: ")
        lista_libros.insert(1, libro)  # Insertar en la posición 2 (índice 1)
        print(f"Libro '{libro}' agregado.")
    else:
        print("Has alcanzado el límite de 5 libros.")

def eliminar_libro(libros):
    if len(libros) >= 3:  # Asegurarse de que hay al menos 3 libros
        eliminado = libros.pop(2)  # Elimina el libro en la tercera posición (índice 2)
        print(f"Libro '{eliminado}' eliminado de la tercera posición.")
    else:
        print("No hay suficientes libros para eliminar el tercero.")

def mostrar_numero_total_libros(libros):
    print(f"Número total de libros: {len(libros)}")

def ordenar_e_imprimir_libros(libros):
    if libros:
        libros_ordenados = sorted(libros)
        print("\nLista de libros ordenada alfabéticamente:")
        for libro in libros_ordenados:
            print(libro)
    else:
        print("No hay libros en la lista.")

def eleccion():
    libros = []
    while True:
        mostar_menu()
        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            agregar_libros(libros)
        elif opcion == "2":
            insertar_libros(libros)
        elif opcion == "3":  # Aquí se llama a la función eliminar_libro
            eliminar_libro(libros)
        elif opcion == "4":
            mostrar_numero_total_libros(libros)
        elif opcion == "5":
            ordenar_e_imprimir_libros(libros)
        elif opcion == "6":
            print("Saliendo del programa.")
            break
        else:
            print("Opción no válida. Inténtalo de nuevo.")

if __name__ == "__main__":
    eleccion()