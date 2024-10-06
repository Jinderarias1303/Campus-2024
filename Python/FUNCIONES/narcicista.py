import math


n=int (input("ingrese el numero "))
if n > 0:
    num= int(math.log10(n))+1



    suma= 0
    tem= n 
    for i in range (1,num + 1 ):
        d=n% 10
        suma += d ** num 
        n = n // 10
    if suma == tem:
        print("el numero es narciso")
    else:
        print("el numero no es narcicista ")
else:
    print("error ingrese un numero entero positivo")