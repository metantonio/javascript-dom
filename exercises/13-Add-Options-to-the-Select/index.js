window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let comboList = document.querySelector("#mySelect");
	let options = document.createElement("option");

	//let pais = document.createTextNode("ejemplo");
	let pais;

	for (let i = 0; i < countries.length; i++) {
		options = document.createElement("option");
		pais = document.createTextNode(countries[i]);
		comboList.appendChild(options);
		options.appendChild(pais);
	}

	let seleccion = [...document.querySelectorAll("option")];
	console.log("opciones de la lista: ", seleccion);

	comboList.addEventListener("change", function(e) {
		//alert("hubo click");
		alert(options.innerHTML);
	});
};
