# Dado la base y la altura, de un triangulo calcular y mostrar su area 
#a travez de la formula area = (base * altura)/2

#"entrada"
# base:b 
# h:altura 


#proceso
# a = b * h / 2

b = float(input ("introduzca la base del triangulo "))
h = float(input ("introduzca la altura del triangulo "))
a = (b * h)/2
#formateando con format 
print("el area del triangulo es: {:.1f}".format(a))  # salida
#formateando con f-string
print(f"el area del triangulo es: {a:.1f}")