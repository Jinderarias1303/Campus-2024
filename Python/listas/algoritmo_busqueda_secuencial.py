def busquedalineal(lst, elem):
    for i in range(len(lst)):
        if lst[i]==elem:
            return[True, i]
    return[False, None]

lista =["carlos", "daniel", "maria", "laia", "angel", "oscar"]

existe, pos =busquedalineal(lista, "oscar")
if existe:#existe == True
    print("pasa al ciclo 3")
    print("posicion", pos)
else:
    print("muchas gracias por estar en campus")
    