
Funcion resultado <- suma ( num,num1 )
	resultado = num + num1
Fin Funcion

Funcion resultado <- resta ( num,num1 )
	resultado = num - num1
Fin Funcion

Funcion resultado <- multiplica ( num,num1 )
	resultado = num * num1
Fin Funcion

Funcion resultado <- divicion ( num,num1 )
	resultado = num / num1 
Fin Funcion

Funcion resultado <- modulo ( num,num1 )
	resultado = num % num1 
Fin Funcion

funcion menu 
	Escribir " MENU "
	Escribir "1. SUMAR "
	Escribir "2. RESTAR "
	Escribir "3. MULTIPLICAR"
	Escribir "4. DIVIDIR"
	Escribir "5. MODULO "
	Escribir "6. SALIR "
	Escribir ">> OPCION ? "
	
FinFuncion

Funcion clear_

	para i = 1 Hasta 40
		Escribir " "
	FinPara
	
FinFuncion

Algoritmo llamado_funciones_aritmeticas
	
	Repetir
		Limpiar Pantalla
		menu
		Leer opc
		Limpiar Pantalla
		Segun opc Hacer
			1:
				Escribir " SUMA "
				Escribir " ingrese un numero "
				leer num
				Escribir "ingrese otro numero "
				Leer num1 
				
				Escribir " el resultado de la suma es " suma(num, num1)
				Escribir "precione cualquier tecla para volver al menu ... "
				Esperar Tecla
				
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
			2:
				Escribir " RESTA "
				Escribir " ingrese un numero "
				leer num
				Escribir "ingrese otro numero "
				Leer num1 
				
				Escribir " el resultado de la resta es " resta(num, num1)
				Escribir "precione cualquier tecla para volver al menu ... "
				Esperar Tecla
				
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
			3:
				Escribir " MULTIPLICACION "
				Escribir " ingrese un numero "
				leer num
				Escribir "ingrese otro numero "
				Leer num1 
				
				Escribir " el resultado de la multiplicacion es " multiplica(num, num1)
				Escribir "precione cualquier tecla para volver al menu ... "
				Esperar Tecla
				
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
			4:
				Escribir " DIVICION "
				Escribir " ingrese un numero "
				leer num
				Escribir "ingrese otro numero "
				Leer num1 
				
				si num1 <> 0 Entonces
					Escribir " el resultado de la divicion es " divicion(num, num1)
				SiNo
					Escribir " error el segundo numero no puede ser 0 "
					resultado = 0
				FinSi
				
				Escribir "precione cualquier tecla para volver al menu ... "
				Esperar Tecla
				
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
			5:
				Escribir " MODULO"
				Escribir " ingrese un numero "
				leer num
				Escribir "ingrese otro numero "
				Leer num1 
				
				si num1 <> 0 Entonces
					Escribir " el resultado del residuo es " modulo(num, num1)
				SiNo
					Escribir " error el segundo numero no puede ser 0 "
					resultado = 0
				FinSi
				
			
				Escribir "precione cualquier tecla para volver al menu ... "
				Esperar Tecla
				
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
			6:
				Escribir "gracias por usar el software"
				Escribir "adios"
				Esperar 5 Segundos
			De Otro Modo:
				Escribir " ERROR . opcion invalida "
				Escribir " presione cualquier tecla para volver al menu ... "
				Esperar Tecla
		Fin Segun
	Hasta Que opc == 6
	
FinAlgoritmo
