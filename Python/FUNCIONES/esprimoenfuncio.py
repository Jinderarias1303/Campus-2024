#funcion que reciva un numero y devuelva True si es 
# primo o False si no lo es 
def esprimo (num):
    if num > 1:
            es_primo = True
            for i in range (2, num):
                if num % i == 0:
                    es_primo  = False
                    break
            if es_primo: #es equivalente a: es primo == True 
               return True
            else:
                return False
    else:
        return False
    

def esprimo2 (num):
    if num > 1:
            for i in range (2, num):
                if num % i == 0:
                    return False
            return False
    else:
        return False








#programa que reciva una serie de numero hasta que se ingrese un primo 
n = int (input("numero ?  "))
while not esprimo2(n): # es quivalente a  es primo == False
    n = int (input("numero ?  "))