#indicar si un numero es primo o no 

num=int(input("ing un numero"))

if num > 1:
    es_primo = True
    for i in range (2, num):
        if num % i == 0:
            es_primo  = False
            break
    if es_primo: #es equivalente a: es primo == True 
        print("es primo. ")
    else:
        print("no es primo.")
else:
    print("no es primo. ")
