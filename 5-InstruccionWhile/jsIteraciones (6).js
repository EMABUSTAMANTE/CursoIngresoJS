function Mostrar()
{
//FUNCIONANDO
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
		{
			contador=contador+1;
			numero=prompt("Ingrese numero"+contador+"ª :");
			numero=parseInt(numero);
			acumulador=acumulador+numero;

		}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
	//	while(true)
	//{
	//	console.log("hola");
	//	break;
	//	console.log("chau");
	//}
	//	while(salir!="si")
	//{
	//	console.log("hola");
	//	salir="si";
	//	console.log("chau");
	//}


}//FIN DE LA FUNCIÓN