function Mostrar()
{
//tomo la edad  
var ed=document.getElementById('edad').value;

if(ed>17)
	{
		alert("Mayor");
	}
else if(ed<12) //CADA VEZ Q USO OTRO IF DEBE TENER ADELANTE UN ELSE
	{
		alert("Menor");
	}
	else 
	{
		alert("adolescente");
	}
//FUNCIONANDO PERFECTO
}//FIN DE LA FUNCIÓN