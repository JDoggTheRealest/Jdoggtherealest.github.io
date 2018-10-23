		//Storing body and header div
		var body = document.querySelector("body");
		var header = document.getElementsByClassName("header");
		
		//Storing html
		var html = document.querySelector("html");
		
		//Storing logo
		var logo = document.getElementsByClassName("logo");
		
		//Making a boolean to keep track of what window is scrolled
		var scrollWindow = false;
		
		//Checking if page is scrolled
		window.addEventListener('scroll', pageScroll);
		
		//Creating a function that runs when page is scrolled
		function pageScroll() {

			//Update middlescroll to the pages y offest if scrolled on page
			if(scrollWindow) {
				middle[0].scrollTop = pageYOffset;
			}

			//Sets boolean to be true
			scrollWindow = true;
			
		}
		
		//Creating a function that runs when innerContent is scrolled
		function logoScroll() {
			if(window.innerWidth > 980) {
				//Checks if scrolled in middle, and updates the pages scrollbar
				if(!scrollWindow) {
					window.scrollTo(0,middle[0].scrollTop);
				}

				//Sets boolean to false, means scrolled in the middle, and not on main page
				scrollWindow = false;
			}
		}
		
		//Storing the middle content, and adds a eventlistner for srolling
		var middle = document.getElementsByClassName("middle");
		middle[0].addEventListener('scroll', logoScroll);
		
		//Makes middle content as wide as the body
		middle[0].style.width = body.clientWidth + "px";
		
		
		//Function that runs constently
		setInterval(function() {
			
			//Fixes size of sidemenu
			if(((html.clientWidth - body.clientWidth) / 2) >= 130) {
				sidemenu[0].style.width = ((html.clientWidth - body.clientWidth) / 2) + "px";
			} else {
				sidemenu[0].style.width = "130px";
			}
			
			var menuwidth = sidemenu[0].style.width;
			menuwidth = menuwidth.slice(0,menuwidth.indexOf("px"));
			menubutton[0].style.width = (menuwidth / 2) + "px";
			
			//Makes the sidemenu same height as the window
			sidemenu[0].style.height = window.innerHeight + "px";
			
			//Middle is moved down by the headers size, so they dont collide
    		middle[0].style.top = header[0].clientHeight + "px";
			
			//Updates the size of body and middle to fit the window and scroll height
			middle[0].style.height = (window.innerHeight - header[0].clientHeight) + "px";
			body.style.height = (header[0].clientHeight + middle[0].scrollHeight) + "px";
			
			//Checks if user has scrolled past a point where the logo would be smaller than 20%
			if((60 - (middle[0].scrollTop/2)) >= 20) {
				
				//Resize the logo when user scrolls
				logo[0].style.width = (60 - (middle[0].scrollTop/2)) + "%";
				
			} else {
				
				//Make logo no smaller than 20%
				logo[0].style.width = "20%";
			}
			
			//Checks if the sidemenu is shown, and then puts it in the middle
			if(!menuhidden) {
				menubutton[0].style.right = ((Math.round(sidemenu[0].clientWidth) + 4 - (menuwidth / 2)) / 2) + "px";
			}
		}, 1);
		
		//Creating side menu
		
		//Storing the first h1 element and its sibling element
		var h1El = document.getElementsByTagName("h1");
		var currentEl = h1El[0].nextElementSibling;
		
		//Stores the sidemenu div
		var sidemenu = document.getElementsByClassName("sidemenu");
		
		//Index for creating new links
		var linkid = 0;
		
		//Checks if currentEL has become null aka reached the bottom of the element sibling list
		while(currentEl !== null) {
			
			//Checks if detected a h1 element
			if(currentEl.nodeName === "H1") {
				
				//Creates new elements
				var nyH1 = document.createElement("h1");
				var nyLink = document.createElement("a");
				var nyUl = document.createElement("ul");
				
				//Gives the h1 element a id
				currentEl.id = "title" + linkid;
				nyLink.href = "#title" + linkid;
				
				//Increment the index
				linkid++;
				
				//Adds text and href to the link
				nyLink.innerHTML = currentEl.innerHTML;
				
				//Appends the new elements
				nyH1.appendChild(nyLink);
				sidemenu[0].appendChild(nyH1);
				sidemenu[0].appendChild(nyUl);
				
			} else if(currentEl.nodeName === "H2") {
				//This will run if currentEl is a h2 element
				
				//Creates new elements
				var nyLi = document.createElement("li");
				var nyLink = document.createElement("a");
				
				//Gives the h2 element a id, and adds a href
				currentEl.id = "title" + linkid;
				nyLink.href = "#title" + linkid;
				
				//Increment the index
				linkid++;
				
				//Adds text
				nyLink.innerHTML = currentEl.innerHTML;
				
				//Appends the new elements
				nyLi.appendChild(nyLink);
				nyUl.appendChild(nyLi);
			}
			
			//Goes to the next sibling element
			currentEl = currentEl.nextElementSibling;
		}
		
		//Storing menubutton
		var menubutton = document.getElementsByClassName("menuicon");
		
		menubutton[0].addEventListener("click", menutoggle);
		
		var menuhidden = true;
		
		function menutoggle() {
			if(sidemenu[0].style.display != "none") {
				sidemenu[0].style.display = "none";
				menubutton[0].style.right = "10px";
				menuhidden = true;
			} else {
				sidemenu[0].style.display = "block";
				menuhidden = false;
			}
			
		}