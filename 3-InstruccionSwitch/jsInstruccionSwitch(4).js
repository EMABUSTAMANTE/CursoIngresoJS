function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
		{
			case "Febrero":
			alert("Tiene 28 o 29 días");
			break;

			case "Abril":
			case "Junio":	
			case "Septiembre":
			case "Noviembre":
			alert("Tiene 30 días");
			break;

			default:
			alert("Tiene 31 días");

			//FUNCIONANDO
		}



}//FIN DE LA FUNCIÓN