/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//var person = prompt("Please enter your name", "Harry Potter");
	var nombre = prompt("Por favor ingrese su nombre", "Natalia Natalia");	
	//alert("nombre") de este modo me va a mostrar el valor literal que es NOMBRE y no Natalia
	alert(nombre);
	//todo lo que escriba entre comillas se va a mostrar//
	alert("su nombre es"+ nombre); //concatenamos con +, junta valores//

}

