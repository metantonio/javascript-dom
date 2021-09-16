// Your code here
let task; //variable en el que se graba valor del input to do.
let list = [...document.querySelectorAll("li")];

function deleteTask() {
	for (let elemento of list) {
		elemento.addEventListener("click", function() {
			this.parentElement.removeChild(this);
		});
	}
}

function addTask(toDo) {
	let listDiv = document.querySelector("ul");
	let newToDo = document.createElement("li");
	let text = document.createTextNode(toDo);

	let iconDiv = document.createElement("i");
	let spanDiv = document.createElement("span");

	iconDiv.className = "fa fa-trash";
	spanDiv.appendChild(iconDiv);
	newToDo.appendChild(spanDiv);

	newToDo.appendChild(text);
	listDiv.appendChild(newToDo);
	console.log(listDiv);
}

document.getElementById("addToDo").addEventListener("keypress", function(e) {
	if (e.key == "Enter") {
		task = " " + document.getElementById("addToDo").value;
		addTask(task);
		list = [...document.querySelectorAll("li")];
		//console.log("variable lsita: ", list);
	}
});

window.onclick = function() {
	deleteTask();
};
