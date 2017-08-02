function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota=Math.floor((Math.random() * 10) + 1);

	if(nota>8)
	{
		alert("Exelente");
	}
		if (nota<4)
		{
			alert("Vamos que la proxima se puede");
		}
		else
			{
				alert("Aprobó");
			}

	console.log(nota);

	//FUNCIONANDI

}//FIN DE LA FUNCIÓN