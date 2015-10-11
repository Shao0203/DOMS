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

function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function showPic(whichPic) {
	if (!document.getElementById('placeholder')) return false;
	var source = whichPic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);

	if (document.getElementById('description')) {
		var text = whichPic.getAttribute('title');
		var desc = document.getElementById('description');
		desc.firstChild.nodeValue = text;
	}
	return true;
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById('imagegallery')) return false;
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function () {
			return !showPic(this);
		}
	}
}

function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById('imagegallery')) return false;
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.gif');
	placeholder.setAttribute('alt','my image gallery');
	var description = document.createElement('p');
	description.setAttribute('id','description');
	var txt = document.createTextNode('Choose a image');
	description.appendChild(txt);
	var gallery = document.getElementById('imagegallery');
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

