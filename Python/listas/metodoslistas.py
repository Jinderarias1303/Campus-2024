lista= [10,20,"juan",30,"sergio"]
#append
lista.append(40)#añade el 40 al final de la lista 
print(lista)

#extend
lista2=["maria",20]
#lista.append(lista2))
lista.extend(lista2)
print(lista)
#insert
lista.insert(2, 50)
print(lista)
#pop

lista.pop()#vacio elimina el ultimo
print(lista)

lista.pop(2)#con posicion elimana el ...
print(lista)

#remove
lista.remove("sergio")#dentro de la comilla lo que se quiere eliminar 
print(lista)

lista = [40,30,5,90,20]

# min
print(min(lista))

#len
print("tamaño lista: ",len(lista))

#sorted
print(sorted(lista))#creciente
#decreciente(mayor a menor)
print(sorted(lista,reverse= True))

lista = [1,20,1,20,5,48,5,4,52,1,1,32]
print(lista.count(52))