

/*declaracion de variables*/





/*quiero que al dar al boton responder, se abra la ventana

esto es la transformacion, proceso, ...es algo que antes no pasaba y gracias a js pasa

document.getElementById("modalRespuesta").style.display="block";

como quiero controlar cuando va a ocurrir, tengo que meterlo en una función que es un conjunto de instrucciones*/

function mostrarModal() {

	document.getElementById("modalRespuesta").style.display="block";

}

/*yo quiero que al hacer clic en responder, se realice la función, eso es crear un evento*/

/*ahora quiero cerrar la ventana dandole a la x*/

function cerrarModal() {

	var llenameModal = document.getElementById("cajaComment").value;

	/*ahora quiero averiguar si está lleno o vacío. 
	Si está lleno, que se cierre la ventana.
	Si está vacío, que salgauna alerta de error*/

	if (llenameModal != "") {

		document.getElementById("modalRespuesta").style.display="none";
		
	}
	else{
		alert("Campo vacío");
	}

	/* en el elemento p de comment1 dentro de comment , tiene que meter el valor del formulario, que es el  texto que el usuario ha rellenado y que está en la varialbe llenameModal*/
	$("#abelSay").fadeIn("slow", function () {
		document.getElementById("abelSayThis").innerHTML = llenameModal;
		// complete();
	});
}

/* esto es para ver una alerta y que visiblemente veas si funciona lo que estas haciendo:

	alert("funciona");*/

/*ahora quiero que al hacer clic sobre el botón enviar comentario dentro del modal, se cierre la ventana modal, habría que llamar a la funcion cerrarModal*/

/*quiero que no se pueda cerrar la ventana dandole a enviar comentario si el campo está vacío*/



function cerrarEquis() {

	document.getElementById("modalRespuesta").style.display="none";
}



/*________________User Card Modal_______________*/ /*hay que revisar*/



// Get the button that opens the modal
/*var btn = document.getElementById("botonUserCard");*/

/*var btn = document.getElementById("user11");*/

var btn = document.getElementsByClassName("user111")[0];
// Get the modal
var modal = document.getElementById('userCard');

console.log(modal);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-userCard")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



























































