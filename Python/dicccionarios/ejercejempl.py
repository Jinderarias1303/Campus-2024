d_categotia ={1:25_000, 2:30_000, 3:40_000, 4:45_000, 5:50_000}

n= int(input("cantidad de docentes? "))
docentes = {}
for i in range(n):
    suma = 0
    print(f"\ndocente{i+1}")
    cedula = input("cedula: ")
    dDatos = {}
    dDatos["nombre"] = input("nombre")
    dDatos["categotia"] = int(input("categoria (1 al 5 )"))
    dDatos["Horas_laboradas"] = int(input("Horas laboradas?"))
    dDatos["honorarios"] = d_categotia[dDatos["categotia"]] *  dDatos["Horas_laboradas"]

    docentes[cedula] = dDatos 
    suma +=  dDatos["honorarios"]

print(docentes)

#informe
print("")
print("**  INFORME  ***".center(40))
print("")

#recorrer el diccionario para imprimir el informe
for k in docentes.keys():
    print("nombre:",docentes[k]['nombre'].title())
    print(f"honorarios: $ {docentes[k]['honorarios']:,}")
    print("-" * 30, "\n")

print("")
print("=" * 30 )
print(f"valor total de honorarios ${suma:,}")