// JavaScript 
var fasit = document.getElementsByClassName("fasit");

for(i = 0;i < fasit.length; i++) {
	fasit[i].addEventListener("click", toggle);
}

function toggle() {
	if(this.firstElementChild.style.visibility == "hidden") {
		this.style.backgroundColor = "white";
		this.firstElementChild.style.visibility = "visible";
	} else {
		this.style.backgroundColor = "#49FF59";
		this.firstElementChild.style.visibility = "hidden";
	}
}