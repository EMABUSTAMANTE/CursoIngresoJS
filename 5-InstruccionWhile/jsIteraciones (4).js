function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero>10 || numero<0)
		{
			alert("Entre 0 y 9 por favor!");
			var numero = prompt("ingrese un número entre 0 y 9.");
		}

	alert("ok");

	//FUNCIONANDING

}//FIN DE LA FUNCIÓN