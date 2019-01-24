//Lager en funksjon som oppdateres hvert 10ms
function timedCount() {
	
	//Sender message til hovedkoden
	postMessage("crap");
	
	//Legger til timeout
  	setTimeout("timedCount()",10);
	
}

//Sjekker om sent melding
onmessage = function() {
	
	//Starter funksjons "loopen"
	timedCount();
	
}
