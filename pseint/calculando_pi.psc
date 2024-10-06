funcion resultado_pi = nazeee
	obj = 3.14159265
	suma = 0
	n = 0
	Repetir
		suma = suma + ( ( (-1) ^ n ) / (2 * n + 1))
		mi_pi = 4 * suma 
		n = n +1
		si n % 1000000 == 0 Entonces
			Escribir n, " : ", obj ," <--> ", mi_pi
		FinSi
	Hasta Que onj == mi_pi
	
	resl = mi_pi
FinFuncion


Algoritmo calculando_pi
	Escribir "PI = " nazeee
FinAlgoritmo
