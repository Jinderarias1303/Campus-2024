#mostar si un numero es perfecto  o no
# un numero es perfecto si la suma de sus divisores da su mismo numero 
n = int (input("ingrese un numero entero positivo mayor que 1:"))
if n > 2:
    suma = 0
    for d in range (1, n ):
        if n % d == 0 :
            suma = suma + d
           
    if suma == n :
        print("el numro es perfecto ")
    else:
        print("el numero no es perfecto ")
else:
    print("error el numero deve de ser mayor que 1   ")