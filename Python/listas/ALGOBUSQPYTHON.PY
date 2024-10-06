lista =["carlos", "daniel", "maria", "laia", "angel", "oscar"]

nombre="oscar"
if nombre in lista:
    pos = lista.index(nombre)
    print("pasa al ciclo 3")
    print("posicion de la lista: ", pos)
else:
    print("gracias por participar en python")