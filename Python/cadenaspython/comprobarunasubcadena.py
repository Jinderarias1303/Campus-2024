#comprueba si hay una subcadena dentro de un cadena 
s = '¿Contiene esta cadena una subcadena?'
print('\'cadena\' location -> {}'.format(s.find('cadena')))#devuelve la ubicacion
print('\'cadena\' location -> {}'.format(s.find('sting')))
s1="perpenticular"
s2="per"
s3="pep"
print('\'pen\' in \'perpendicular\': {}'.format(s2 in s1))#busca si la palabra esta dentro de la cadena principal  y devuelve True 
print('\'pen\' in \'perpendicular\': {}'.format(s3 in s1))#busca si la palabra esta dentro de la cadena principal  y devuelve False
