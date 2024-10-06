Algoritmo determina_n_a_J_ad_M
	Escribir "ingrese su edad"
	leer edad 

		Si edad >= 0 y edad <= 12 Entonces
			Escribir "usted es un niño"
		SiNo
			si  edad >= 12 y edad <= 17 Entonces
				Escribir "usted es un adolecente"
			SiNo
			si  edad >= 17 y edad <= 35 Entonces
				Escribir "usted es un adulto joven"
			SiNo
				si  edad >= 35 y edad <= 65 Entonces
					Escribir "usted es un adulto"
				SiNo
					si edad >= 66 Entonces
						Escribir "ust es un adulto mayor"
					FinSi
				FinSi
			FinSi
			
		Fin Si
		fin si
	
FinAlgoritmo
