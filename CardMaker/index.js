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

function addTag() {
	var tagList = document.getElementById("TagList");
	var clone = tagList.firstElementChild.cloneNode(true);
	tagList.appendChild(clone);
	clone.firstElementChild.innerHTML = tagList.childElementCount + ".";
	clone.id = "Tag" + tagList.childElementCount;
}

function removeTag() {

}