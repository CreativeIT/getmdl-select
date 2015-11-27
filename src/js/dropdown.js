'use strict'

window.onload =  () => {
    let dropdowns = document.getElementsByClassName("creative-dropdown");
    
    [].forEach.call(dropdowns, function(i) {
	addEventListeners(i);
    })
}
    
function addEventListeners(el) {
    let children = el.childNodes;
    let dropdown;
    
    dropdown = fetchDropdown(children);
    if (dropdown == undefined)
	return;
    let ul = findUlElement(children);
//alert("addselectevents");
    if (ul != undefined) {
	addSelectEventsForDropLi(ul, dropdown);
    }
}

function addSelectEventsForDropLi(ul, dropdown) {
    [].forEach.call(ul.childNodes, function(j){
	if (j.tagName === "LI") {
	    j.inputEl = dropdown;
//alert("li");
	    j.onclick = () => {
		j.inputEl.value = j.textContent;
	    }
	}
    })
}

function findUlElement(children) {
    let ul;
    
    for (let i = 0; i < children.length; ++i){
	if (children[i].tagName === "DIV") {
	  
	    for (let j = 0; j < children[i].childNodes.length; ++j) {//alert(children[i].childNodes[j].tagName);
		if (children[i].childNodes[j].tagName === "UL") {
		    ul = children[i].childNodes[j];
		    break;
		}
	    }
	}
	    
	if (children[i].tagName === "UL") {
	    //alert("ul");
	    ul = children[i];
	}
    }

    return ul;
}

function fetchDropdown(children) {
    let dropdown;
    let toggle, 
	icon;

    for (let i = 0; i < children.length; ++i) {
	if (children[i].tagName === "INPUT") {
	    dropdown = children[i];
	}
    }
    return dropdown;
}