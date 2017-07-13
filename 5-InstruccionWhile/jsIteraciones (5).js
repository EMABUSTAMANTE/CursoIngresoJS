function Mostrar()
{
//FUNCIONANDO
var sexo = prompt("ingrese f ó m .");

while (!(sexo=="f" || sexo=="m"))
//while (sexo!="f" && sexo!= "m")
//cualquiera de estas 2 formas estan correctas
	{
      alert("error ingrese f o m");
      sexo = prompt("ingrese f ó m .");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN