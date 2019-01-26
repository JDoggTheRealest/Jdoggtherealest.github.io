function timedCount() {
	
  postMessage("crap");
  setTimeout("timedCount()",10);
	
}

onmessage = function() {

	timedCount();
	
}