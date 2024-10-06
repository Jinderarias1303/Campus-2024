Algoritmo buenos_dia_tardes_nochez_hora_de_dormir
	Escribir "ingrese la Hora en formato 24h "
	leer hora
si hora >= 500 y hora <= 1159 Entonces
		Escribir "buenos dias"
	SiNo
		si hora >=1200 y hora <= 1759 Entonces
			Escribir "buenas tardes"
		SiNo
			si hora >= 1800 y hora <= 2159 Entonces
				Escribir "buenas noches"
			SiNo
				si hora  > 2200 y hora < 459 Entonces
					Escribir "es hora de dormir "
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
