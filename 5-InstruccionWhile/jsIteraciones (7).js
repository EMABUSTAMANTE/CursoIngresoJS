function Mostrar()
{
//NO ESTARIA FUNCIONANDO!!
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
		{
			contador=contador+1;
			suma=contador+acumulador;
			respuesta=prompt("¿Quiere continuar?");
		}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN