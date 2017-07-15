function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;

	var respuesta='si';

	var num=prompt("Ingrese un número");

	while(respuesta=='si')
	{
		num=prompt("Ingrese número");
		num=parseInt(num);
		if(num<0)
		{
			negativo=negativo*num;
		}
		else
		{
			positivo=positivo+num;
		}
	}

	respuesta=prompt("Desea continuar??");



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN