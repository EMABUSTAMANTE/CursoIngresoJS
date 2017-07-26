function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");

var cantidad=10000;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;


for(contador=0;contador<cantidad;contador++)
	{
		numero=Math.floor((Math.random() * 10) + 1);
		//console.log(numero);
		switch(numero)
		{
			case 1:
				cont1++;
				break;
			case 2:
				cont2++;
				break;
			case 3:
				cont3++;
				break;
			case 4:
				cont4++;
				break;
			case 5:
				cont5++;
				break;
			case 6:
				cont6++;
				break;
			case 7:
				cont7++;
				break;
			case 8:
				cont8++;
				break;
			case 9:
				cont9++;
				break;
			case 10:
				cont10++;
				break;				

		}

	}

	console.log("El contador de 1 fue"+cont1);
	console.log("El contador de 2 fue"+cont2);
	console.log("El contador de 3 fue"+cont3);
	console.log("El contador de 4 fue"+cont4);
	console.log("El contador de 5 fue"+cont5);
	console.log("El contador de 6 fue"+cont6);
	console.log("El contador de 7 fue"+cont7);
	console.log("El contador de 8 fue"+cont8);
	console.log("El contador de 9 fue"+cont9);
	console.log("El contador de 10 fue"+cont10);

}//FIN DE LA FUNCIÓN