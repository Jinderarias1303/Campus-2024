Algoritmo fibonacci
	num = 0
	num1 = 1
	num2 = 1	
	Escribir num
	escribir num1
	Escribir num2
	Para i <- 0 Hasta 6 Con Paso 1 Hacer
		oper = (1) ^ ( i )
		result = num1 + oper * num2 
		Escribir result
		num1 = num2
		num2 = result
	Fin Para	
FinAlgoritmo
