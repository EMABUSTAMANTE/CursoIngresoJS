function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sexo;
	var respuesta="si";

	//Ejemplo de obtención, validación y extracción de información
	//de esta encuesta se debe informar:
	//1- ¿Cuántas mujeres y cuántos hombre fueron entrevistados?
	//2- La persona de mayor edad.
	//3- El promedio de edad.
	//4- ¿Quién ganará las elecciones?
	//5- Informar ¿Cuántas mujeres mayores de edad hay?
	//6- Informar ¿Cuántos hombre menores a 30 años hay?
	//7- Informar la altura del hombre que menos edad tiene.
	//8- Informar ¿cuántos hombre votaron a "otro"?
	//9- De las mujeres informar ¿cuántas votaron a la oposición?
	//10-Cuántas personas de 50 años votaron?
	//11-Cuántas personas de 50 años mujeres votaron?
	//12-Cuántas mujeres de 50 años de mas de 1mt votaron al gobierno?


	while(respuesta!="no")
	{
	//pedir sexo validarlo
		sexo=prompt("Indique su sexo f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Indique su sexo f o m");
		}

		edad=prompt("Indique su edad de 0 a 100");
		while(edad<0 || edad>100)
		{
			edad=prompt("Indique su edad de 0 a 100");
		}



		if(sexo=="f")
		{
			contadorFem=contadorFem+1;
		}
		else(sexo=="m")
		{
			contadorFem=contadorFem+1;
		}
		if(contador==0)
		{
			edadMayor=edad;
		}
		else
		{
			if(edad>edadMayor)
				{
					edadMayor=edad;
				}
		}
		






		respuesta=prompt("Desea continuar?");
	}




}//FIN DE LA FUNCIÓN