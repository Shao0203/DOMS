function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (targetElement == parent.lastChild) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function addClass(element,value) {
	if (!element.className) {
		element.classNme = value;
	} else {
		newClassName = element.className;
		newClassName+= ' ';
		newClassName+= value;
		element.className = newClassName;
	}
}










