function Mostrar()

{
	//contador lo ejecuta solo una vez, contador<10 lo ejecuta siempre
	//++se ejecuta de la segunda vez en adelante
	//for(contador=0;contador<10;contador++)
	//{
	//console.log("Hola"+contador);
	//}
	
	//contador=0;
	//while(contador<10)
	//{ESTO ES LO MISMO DE LO QUE ESTA ARRIBA}
	//PERO ARRIBA ESTA ABREVIADO
	//while(true).. se ejecuta siempre
	contador=0;

	for(;respuesta=="si";)
	{
		console.log("Hola"+contador)

		if(contador==10)
			{
				break;
			}
			contador++
			respuesta=prompt("desea continuar?",si);
	}
}