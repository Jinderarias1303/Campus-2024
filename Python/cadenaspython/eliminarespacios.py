# estos son ejemplos de cadenas 

#Eliminación de espacios en blanco

s = 'A sentence with whitespace. \n'
print('{}'.format(s.lstrip()))         #borra los espacio de la izquierda.
print('{}'.format(s.rstrip()))         #borra los espacio de la derecha. 
print('{}'.format(s.strip()))          #borra los espacios de ambos lados.
print('{}'.format(s.strip("A")))