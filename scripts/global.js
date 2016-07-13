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
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName+= ' ';
		newClassName+= value;
		element.className = newClassName;
	}
}

function highlightPage() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName('header');
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName('a');
	var currenturl = window.location.href;
	for (var i = 0; i < links.length; i++) {
		var linkurl = links[i].getAttribute('href');
		if (currenturl.indexOf(linkurl) != -1) {
			links[i].className = 'here';
			var linktext = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute('id',linktext);
		}
	}
}

function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) clearTimeout(elem.movement);
	if (!elem.style.left) elem.style.left = '0px';
	if (!elem.style.top) elem.style.top = '0px';
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) return true;
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow() {
	if (!document.getElementById('intro')) return false;
	var intro = document.getElementById('intro');
	var slideshow = document.createElement('div');
	slideshow.setAttribute('id','slideshow');
	var preview = document.createElement('img');
	preview.setAttribute('src','images/slideshow.gif');
	preview.setAttribute('alt','a glimpse of what awaits you');
	preview.setAttribute('id','preview');
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);

	var frame = document.createElement('img');
	frame.setAttribute('src','images/frame.gif');
	frame.setAttribute('alt','');
	frame.setAttribute('id','frame');
	slideshow.appendChild(frame);

	// var links = intro.getElementsByTagName('a'); //only the a tag under p tag
	var links = document.getElementsByTagName('a');	//all the <a>, nav and p
	var destination;
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseover = function() {
			destination = this.getAttribute('href');
			if (destination.indexOf('index.html')!=-1) {
				moveElement('preview',0,0,5);
			}
			if (destination.indexOf('about.html')!=-1) {
				moveElement('preview',-150,0,5);
			}
			if (destination.indexOf('photos.html')!=-1) {
				moveElement('preview',-300,0,5);
			}
			if (destination.indexOf('live.html') !=-1) {
				moveElement('preview',-450,0,5);
			}
			if (destination.indexOf('contact.html')!=-1) {
				moveElement('preview',-600,0,5);
			}
		}
	}
}

function showSection(navid) {
	var sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
		var secid = sections[i].getAttribute('id');
		if (secid != navid) {
			sections[i].style.display = 'none';
		} else {
			sections[i].style.display = 'block';
		}
	}
}

function prepareInternalnav() {
	var articles = document.getElementsByTagName('article');
	if (articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName('nav');
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var navid = links[i].getAttribute('href').split('#')[1];
		if (!document.getElementById(navid)) continue;
		document.getElementById(navid).style.display = 'none';
		links[i].destination = navid;
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}

function preparePlaceholder() {
	if (!document.getElementById('imagegallery')) return false;
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.gif');
	placeholder.setAttribute('alt','my image gallery');
	var description = document.createElement('p');
	description.setAttribute('id','description');
	var desctext = document.createTextNode('Choose an image');
	description.appendChild(desctext);
	var gallery = document.getElementById('imagegallery');
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
}

function showPic(whichpic) {
	if (!document.getElementById('placeholder')) return false;
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	if (!document.getElementById('description')) return false;
	if (whichpic.title) {
		var text = whichpic.title;
	} else {
		var text = '';
	}
	var description = document.getElementById('description');
	if (description.lastChild.nodeType == 3) {
		description.lastChild.nodeValue = text;
	}
	return false;
}

function gallery() {
	if (!document.getElementById('imagegallery')) return false;
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseover = function() {
			return showPic(this);
		}
	}
}

function stripeTables() {
	if (!document.getElementsByTagName('table')) return false;
	var tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName('tr');
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				addClass(rows[j],'odd');
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

function highlightRows() {
	if (!document.getElementsByTagName('table')) return false;
	var tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		var rows = tables[i].getElementsByTagName('tr');
		for (var j = 0; j < rows.length; j++) {
			rows[j].oldClassName = rows[j].className;
			rows[j].onmouseover = function() {
				addClass(this,'highlight');
			}
			rows[j].onmouseout = function() {
				this.className = this.oldClassName;
			}
		}
	}
}

function displayAbbr() {
	var abbreviations = document.getElementsByTagName('abbr');
	if (abbreviations.length == 0) return false;
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute('title');
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement('dl');
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length == 0) return false;
	var header = document.createElement('h3');
	var header_text = document.createTextNode('Abbreviations');
	header.appendChild(header_text);
	var articles = document.getElementsByTagName('article');
	if (articles.length == 0) return false;
	articles[0].appendChild(header);
	articles[0].appendChild(dlist);
}

function focusLabels() {
	if (!document.getElementsByTagName('label')) return false;
	var labels = document.getElementsByTagName('label');
	for (var i = 0; i < labels.length; i++) {
		if (!labels[i].getAttribute('for')) continue;
		labels[i].onclick = function() {
			var id = this.getAttribute('for');
			if (!document.getElementById(id)) return false;
			document.getElementById(id).focus();
		}
	}
}

function checkFields() {
	var fm = document.forms[0];
	fm.onsubmit = function() {
		for (var i = 0; i < this.elements.length; i++) {
			var elem = this.elements[i];
			if (elem.required == 'required') {
				alert('Please fill in the ' + elem.name + ' field.');
				return false;
			}
			if (elem.type == 'email' && elem.value.indexOf('@') == -1) {
				alert('The ' +elem.name+ ' field must be a valid email address.');
				return false;
			}
		}
	return true;
	}
}

function displayAjaxLoading(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
	var content = document.createElement('img');
	content.setAttribute('src','images/loading.gif');
	content.setAttribute('alt','Loading...');
	element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
	var fm = document.forms[0];
	var request = new XMLHttpRequest();
	if (!request) return false;
	displayAjaxLoading(thetarget);
	var dataParts = [];
	var element;
	for (var i = 0; i < whichform.elements.length; i++) {
		element = whichform.elements[i];
		dataParts[i] = element.name + '=' +encodeURIComponent(element.value);
	}
	var data = dataParts.join('&');
	request.open('POST', whichform.getAttribute('action'), true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
}





addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(preparePlaceholder);
addLoadEvent(gallery);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbr);
addLoadEvent(focusLabels);
addLoadEvent(checkFields);


/*	testing function
function showSec() {
	var articles = document.getElementsByTagName('article');
	var navs = articles[0].getElementsByTagName('nav');
	var links = navs[0].getElementsByTagName('a');
	var sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
		sections[i].style.display = 'none';
		var secid = sections[i].id;
		
		for (var i = 0; i < links.length; i++) {
			var navid = links[i].getAttribute('href').split('#')[1];
			links[i].onclick = function() {
				if (navid == secid) {
					sections[i].style.display = 'block';
				}
			}
		}
	}
}

addLoadEvent(showSec);
*/




