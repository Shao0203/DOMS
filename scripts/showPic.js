window.onload = function () {
	prepareGallery();
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




// window.onload = prepareLinks;
// function prepareLinks() {
// 	// var links = document.getElementsByTagName('a');
// 	// for (var i = 0; i < links.length; i++) {
// 	// 	if (links[i].getAttribute('class') == 'popup') {
// 	// 		links[i].onclick = function() {
// 	// 			popUp(this.getAttribute('href'));
// 	// 			return false;
// 	// 		}
// 	// 	}
// 	// }
// 	if (!document.getElementsByClassName || !document.getElementsByTagName) return false;
// 	var links = document.getElementsByClassName('popup')
// 	for (var i = 0; i < links.length; i++) {
// 		links[i].onclick = function() {
// 			popUp(this.href);
// 			return false;
// 		}
// 	};
// }

// function popUp(winURL) {
// 	window.open(winURL,'popUp','width=320,height=480');
// }