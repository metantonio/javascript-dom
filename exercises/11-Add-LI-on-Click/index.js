let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	//let body = document.querySelector("#myList");
	let ulDiv = document.querySelector("ul");
	let liDiv = document.createElement("li");
	let text = document.createTextNode("Fourth element");

	liDiv.appendChild(text);
	ulDiv.appendChild(liDiv);
});
