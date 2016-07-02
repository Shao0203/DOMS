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
// 01/07/16 ends here

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
	var navs = articles[0].getElementsByTagName('nav');
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

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);




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




