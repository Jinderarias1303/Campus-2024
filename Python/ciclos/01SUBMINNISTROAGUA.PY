
cod = str(input("ingrese su codigo: "))
nom = str (input("ingrese su nombre: "))
estado = str (input("ingrese su estado:"))
estrato = int (input("ingrese su estrato "))
CM3 = int (input("cuanta agua consume al mes en cm3"))
CM2 = CM3 *200



if estrato == 1:
    print(CM2* 10_000)
elif estado == 2:
    print(CM2*20_000)
elif estado == 3:
    print(CM2*30_000)
elif estado == 4:
    print(CM2*45_000)
elif estado == 5:
    print(CM2*60_000)
elif estado == 6:
    print(CM2*70_000)
 
