function Mostrar()
{
//FUNCIONANDO
	var numero = prompt("ingrese un número entre 0 y 10.");

while(numero>10 || numero<0)
	{
		alert("Reingrese");
		var numero = prompt("ingrese un número entre 0 y 10.");
	}

}//FIN DE LA FUNCIÓN