var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; // to display color coding on page
}

// Listen to an event where we notice the user action, with an input event.
// 1) this will print in the console the color codes (everytime the user moves the cursor)
// 2) will change the background color 
// then clean code by creating a function. And don't need to call the function
color1.addEventListener("input", setGradient);
	// console.log(color1.value)
	// body.style.background = 
	// 	"linear-gradient(to right, " 
	// 	+ color1.value 
	// 	+ ", " 
	// 	+ color2.value 
	// 	+ ")";

color2.addEventListener("input", setGradient);
	



