//*appendChild to Body element
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(placeholder);
// body.appendChild(description);
//*insertBefore:  parent.insertBefore(newElement,targetElement)
// var gallery = document.getElementById('imagegallery');
// gallery.parentNode.insertBefore(placeholder, gallery);
// gallery.parentNode.insertBefore(description, gallery);

/**seperate onclick event from HTML**/
// window.onload = prepareLinks;
// function prepareLinks() {
// **************WAY 1: getElementsByTagName*****************
// var links = document.getElementsByTagName('a');
// for (var i = 0; i < links.length; i++) {
// 	if (links[i].getAttribute('class') == 'popup') {
// 		links[i].onclick = function() {
// 			popUp(this.getAttribute('href'));
// 			return false;
// 		}
// 	}
// }
// **************WAY 2: getElementsByClassName*******************
// 	if (!document.getElementsByClassName || !document.getElementsByTagName) return false;
// 	var links = document.getElementsByClassName('popup')
// 	for (var i = 0; i < links.length; i++) {
// 		links[i].onclick = function() {
// 			popUp(this.href);
// 			return false;
// 		}
// 	}
// }
// function popUp(winURL) {
// 	window.open(winURL,'popUp','width=320,height=480');
// }


/**appendChild & createElement & createTextNode**/
// var para = document.createElement('p');
// var testdiv = document.getElementById('testdiv');
// testdiv.appendChild(para);
// var txt = document.createTextNode('<h3>hello world.</h3>');
// para.appendChild(txt);
// **************WAY 1: Elements with text*****************
// var para = document.createElement('p');
// var txt1 = document.createTextNode('This is ');
// para.appendChild(txt1);
// var emPara = document.createElement('em');
// var txt2 = document.createTextNode('my');
// emPara.appendChild(txt2);
// para.appendChild(emPara);
// var txt3 = document.createTextNode(' content.');
// para.appendChild(txt3);
// var testdiv = document.getElementById('testdiv');
// testdiv.appendChild(para);
// **************WAY 2: Elements then text*******************
// var testdiv = document.getElementById('testdiv');
// var para = document.createElement('p');
// var emPara = document.createElement('em');
// var txt1 = document.createTextNode('This is ');
// var txt2 = document.createTextNode('my favorite');
// var txt3 = document.createTextNode(' content.');
// para.appendChild(txt1);
// emPara.appendChild(txt2);
// para.appendChild(emPara);
// para.appendChild(txt3);
// testdiv.appendChild(para);