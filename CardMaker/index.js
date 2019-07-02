function selectCategory() {
	var obj = document.catForm.category;
	var index = obj.selectedIndex;
	var category;

	if (index >= 0) {
		category = obj.options[index].value;
	}

	var forms = document.getElementsByClassName("Form");

	Array.prototype.forEach.call(forms, function (item) {
		if (item.classList.contains('All') || item.classList.contains(category)) {
			item.style.display = "inline";
		} else {
			item.style.display = "none";
		}
	});
}

function selectClass() {
	var obj = document.class.category;
	var index = obj.selectedIndex;
	var category;

	if (index >= 0) {
		category = obj.options[index].value;
	}

	var containmentClass = document.getElementById("ContainmentClass");

	if (category !== "Safe" && category !== "Euclid" && category !== "Keter") {
		containmentClass.style.display = "inline";
	} else {
		containmentClass.style.display = "none";
	}
}

function add(type) {
	var list = document.getElementById(type + "List");
	var clone = list.firstElementChild.cloneNode(true);
	list.appendChild(clone);
	clone.firstElementChild.innerHTML = "  " + list.childElementCount + ".";
	clone.id = type + list.childElementCount;
}

function remove(type) { 
    var list = document.getElementById(type + "List");
    if (list.childElementCount > 1) list.removeChild(list.lastElementChild);
}

function test(text){
    console.log(text);
}