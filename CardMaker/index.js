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

function init() {
	defaultList = {
		"Tag": document.getElementById("TagList").cloneNode(true),
		"Condition": document.getElementById("ConditionList").cloneNode(true),
		"Action": document.getElementById("ActionList").cloneNode(true),
		"Effect": document.getElementById("EffectList").cloneNode(true),
		"Trigger": document.getElementById("TriggerList").cloneNode(true),
		"DetailCondition": document.getElementById("DetailConditionList").cloneNode(true),
		"ActionCondition": document.getElementById("ActionConditionList").cloneNode(true),
		"SubTag": document.getElementById("SubTagList").cloneNode(true),
		"SubEffect": document.getElementById("SubEffectList").cloneNode(true)
	};

	list = {
		"Tag": document.getElementById("TagList"),
		"Condition": document.getElementById("ConditionList"),
		"Action": document.getElementById("ActionList"),
		"Effect": document.getElementById("EffectList"),
		"Trigger": document.getElementById("TriggerList")
	};

	conditionClone = document.getElementById("ConditionList").firstElementChild.childNodes[1];
}

function add(type) {
	var clone;
	if (type !== "SubEffect")
		clone = defaultList[type].firstElementChild.cloneNode(true);
	else 
		clone = defaultList["Trigger"].firstElementChild.cloneNode(true);

	event.currentTarget.parentNode.firstElementChild.appendChild(clone);
	clone.firstElementChild.innerHTML = event.currentTarget.parentNode.firstElementChild.childElementCount + ".";
	clone.id = type + event.currentTarget.parentNode.firstElementChild.childElementCount;
}

/*
function changeCondition() {
	var nodes = event.currentTarget.parentNode.parentNode.childNodes;
	var length = event.currentTarget.parentNode.parentNode.childElementCount;
	for (var i = 0; i < length; i++) {
		if (nodes[i] !== event.currentTarget.parentNode) {
			nodes[i]
		}
	}
}*/

function remove(type) {
	var list = event.currentTarget.parentNode.firstElementChild;
    if (list.childElementCount > 1) list.removeChild(list.lastElementChild);
}

function selectCondition() {
	/*
	var obj = event.currentTarget;
	var index = obj.selectedIndex;
	obj.id = obj.options[index].value;

	var nodes = obj.parentNode.parentNode.children;
	var length = obj.parentNode.parentNode.childElementCount;

	for (var i = 0; i < length; i++) {
		if (nodes[i] !== obj.parentNode) {
			console.log(nodes[i].children[1].options[index].value + ", " + obj.options[index].value);
			if (nodes[i].children[1].options[index].value === obj.options[index].value) {
				nodes[i].children[1].options.selectedIndex = 0;
				nodes[i].children[1].options[index].style.display = "none";
				break;
			}

			for (var j = 0; j < nodes[i].children[1].options.length; j++) {
				var item = nodes[i].children[1].options[j];
				if (item.value === obj.options[index].value) item.style.display = "none";
			}
		}
	}*/

	//console.log(obj.options[index].value);

	var obj = event.currentTarget;
	var index = obj.selectedIndex;
	var category;

	if (index >= 0) {
		category = obj.options[index].value;
	}

	var forms = obj.parentNode.getElementsByClassName("Form");

	Array.prototype.forEach.call(forms, function (item) {
		if (item.classList.contains('All') || item.classList.contains(category)) {
			item.style.display = "inline";
		} else {
			item.style.display = "none";
		}
	});
}

function test(text){
    console.log(text);
}