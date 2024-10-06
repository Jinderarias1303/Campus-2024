


def posElemMaylista(lst):
    mayor = lst[0]
    pos = 0
    for i in range(len(lst)):
        if lst[i] > mayor:
            mayor = lst[i]
            pos = i
    return [pos,mayor]


def posMaylista(lst):
    mayor = lst[0]
    pos = 0
    for i in range(len(lst)):
        if lst[i] > mayor:
            mayor = lst[i]
            pos = i
    return pos


def menorlista(lst):
    menor = lst[0]
    for e in lst:
        if e < menor:
            menor = e
    return menor


def mayorlista(lst):
    mayor = lst[0]
    for e in lst:
        if e > mayor:
            mayor = e
    return mayor


def sumalista(lst):
    suma = 0
    for e in lst:
        suma += e 
    return suma

def imprimelista(lst):
    for e in lst:
        print(e, end=" | ")

lista_numeros= [10 , 15 , 20 , 30 , 40]
print(type(lista_numeros))
print(lista_numeros)
print(lista_numeros[3])
print(lista_numeros[-1])
print(lista_numeros[-5])


#recorido de una lista 
#1 por sus posiciones
for i in range (len(lista_numeros)):
    print(lista_numeros[i], end=",")
print("")

for i in range(-1,-len(lista_numeros)-1, -1):# de derecha a  izquierda
    print(lista_numeros[i],end=" * ")
print("\n"+"*"*40)
#"\ "
#2 por sus elementos 
for e in lista_numeros:
    print(e, end="|")
print("")

#llamando una funcion . se le pasa la lista 
imprimelista(lista_numeros)
print("")

#funcion que devuelva la suma de los elementos de la lista 
print("la suma de los elementos de la lista es : ", sumalista(lista_numeros)+1)
print("\n"+"*"*40)

#imprimir el mayor elemnto de lista 
print("el mayor elemento es", mayorlista(lista_numeros))
print("\n"+"*"*40)
#imprimir el menor elemnto de lista 
print("el menor elemento es", menorlista(lista_numeros))
print("\n"+"*"*40)
#imprimir la posicion del elemento mayor de la lista 
print("el elemnto mayor se encuentra en la posicion:", posMaylista(lista_numeros) + 1)
print("\n"+"*"*40)
lstresult = posElemMaylista(lista_numeros)
print("el elemento mayor y su posicion es:",  posElemMaylista(lista_numeros)[1], posElemMaylista(lista_numeros)[0]+1,)
#lista_numeros= [10 , 15 , 20 , 30 , 40]
lista_numeros[-1] = 35 #cambia la posicion

#operadores de las listas
listas_numero2_= [1, 2]

#operador de concatenacion +
lsrtslt = lista_numeros + listas_numero2_
print(lsrtslt)

#operador (*) de repeticion
lsrtslt = listas_numero2_ * 3
print(lsrtslt)
