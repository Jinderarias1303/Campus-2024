Algoritmo tipo_de_transporte
	Escribir "ingrese el tipo de transporte"
	Escribir "1.bicicleta"
	Escribir "2.autobús"
	Escribir "3.coche"
	dist = 10 
	vel = 40
	vel1 = 60
	vel2 = 120
	Leer trans	
	Segun trans Hacer
		1:
			Escribir " en bicicleta tardaras " dist  / vel " minutos"
		2:
			Escribir "en autobús tardaras " dist / vel1 " minutos"
		3:
			Escribir "en coche tardaras  "  dist / vel2 " minutos"
		De Otro Modo:
			Escribir "ERROR--->> solo hay 3 metodos de transporte "
			Escribir "INTENTE DE NUEVO"
	Fin Segun
FinAlgoritmo
