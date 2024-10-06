
#peso de cada nota
valorNotas={1:0.30, 2:0.30, 3:0.40}

while True:
    codigo = int(input("Introduce el código: "))
    if codigo == 999:#si el codigo ingresado es 999 el programa se detiene 
        print("Programa detenido.")
        break
    else:#si el codigo es diferente a 999 el programa se sigue ejecutando
          nombre = input("nombre: ")

    notas = {}#donde se almacenan las notas
    notas["nota1"] = float(input("nota1 "))
    notas["nota2"] = float(input("nota2 "))
    notas["nota3"] = float(input("nota3 "))

    definitiva = (notas["nota1"] * valorNotas[1] +  notas["nota2"] * valorNotas[2] + notas["nota3"] * valorNotas[3])

    if definitiva >= 30:# si la nota no es igual o mayor a 30 reprueva 
        print("aprovado")
        break
    else:
         print("reprovado")
         break#detener el programa