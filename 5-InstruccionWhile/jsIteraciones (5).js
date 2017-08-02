function Mostrar()
{

var sexo = prompt("ingrese f ó m");

	while(!(sexo=="f" || sexo=="m"))
	{
		alert("Error ingrese f ó m!");
		var sexo = prompt("ingrese f ó m");
	}

document.getElementById('Sexo').value=sexo;

	//FUNCINANDO
}//FIN DE LA FUNCIÓN