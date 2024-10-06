Algoritmo Juego_adivinar_numero 
	Escribir "Ingrese su nombre "
	Leer nom
	Escribir  nom  " recueda que tienes 10 intentos "
	inten = 10
	Repetir
		 aazar  = azar (10)
		 Escribir " ingrese un numero "
		 Leer num1 
		 
		 si num1 > aazar Entonces
			 Escribir "el numero es mayor al numero a adivinar "
		 FinSi
		 si num1  < aazar Entonces
			 Escribir "el numero es menor al numero a adivinar  "
		 FinSi
		
		 inten = inten -1
		 Escribir  inten "/10"
	 Hasta Que  num = aazar o inten = 0
	 Escribir ""
	 Escribir " #####     #    #     #    #     #####  ####### #######  "
	 Escribir "#     #   # #   ##    #   # #   #     #    #    #        " 
	 Escribir "#        #   #  # #   #  #   #  #          #    #        "
	 Escribir "#  #### #     # #  #  # #     #  #####     #    #####    "
	 Escribir "#     # ####### #   # # #######       #    #    #        "
	 Escribir "#     # #     # #    ## #     # #     #    #    #        "
	 Escribir " #####  #     # #     # #     #  #####     #    #######  "
	 Escribir aazar

FinAlgoritmo
