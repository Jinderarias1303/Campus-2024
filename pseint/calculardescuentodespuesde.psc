
funcion i = descuento(pres)
	si pres > 150000 Entonces
		pres = pres - (pres *0.05)
	SiNo
		Escribir "este producto no tiene descuento"
	FinSi
	i = pres
	Escribir "",i 
FinFuncion
Algoritmo calculardescuentodespuesde150k
	Escribir "ingrese el costo del producto "
	Leer pres
	
	Escribir "el descuento de este producto es de: " descuento(pres)
FinAlgoritmo
