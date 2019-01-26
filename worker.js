//Lagrer en tom interval
var timeout = setInterval("");

//Lager en funksjon for å oppdatere klokken
function timedCount() {
	
	//Sender melding til hovedvindu
	postMessage("crap");
	
}

//Sjekker om mottat melding
onmessage = function(e) {

	//Sjekker om skal stoppe
	if(e.data == "stop") {
		
		//Fjerner intervalet
		clearInterval(timeout);
		
	} else if(e.data == "crap") { //Sjekker om meldingen sendt er "crap"
		
		//Starter oppdateringer
		timedCount();
		
		//Gjør slik at oppdaterer hvert 20ms
		timeout = setInterval("timedCount()",20);
		
	}
	
}