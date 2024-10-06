#no recuerdo como abrir los txt intente abrirlos al igual que un json con open pero no pude
#se que no es lo que pidieron pero en algo tengo ue ocupar el tiempo y mostrar que aprendi algo. 

from menu.MENU import *
from modelo.productos import *
from salir.salir import *
from facturas.relacionado_a_facturas import *

while True: 
    op = menu1()
    match op:
        case 1:
            productoss()
        case 2:
            clientess() 
        case 3:
            facturass()
        case 4:
            imprimir_R1()
        case 5:
            salirr()
            break