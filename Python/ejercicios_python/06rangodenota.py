nombre = str (input("introdusca su nombre:  "))
nota = float(input("introdusca su nota:  "))
cal =""
if nota >= 0 and nota < 60:
    cal = "D"
elif nota >= 60 and nota < 80 :
    cal = "C"
elif nota >= 80 and nota < 90 :
    cal = "B"
elif nota >= 90 and nota <= 100 :
    cal = "A"
else:
    cal = ""
    
if cal != "":
    print("-------------------")
    print("nombre",nombre )
    print(f"calificacion cuantitativa:{nota:.1f}")
    print("calificacion cualitativa: ",nota )
else:
    print(">> Error. calificacion")

