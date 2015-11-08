function displayAbbr() {

	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
// get all the abbreviations
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length < 1) return false;
	var defs = new Array();
// traverse all the abbreviations
	for (var i = 0; i < abbrs.length; i++) {
		var definition = abbrs[i].getAttribute('title');
		var key = abbrs[i].lastChild.nodeValue;
		defs[key] = definition;
	}
// create definition list
	var dlist = document.createElement('dl');
// loop through the definitions
	for (key in defs) {
		var definition = defs[key];
// create definition title
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
// create definition description
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
// add them to definition list
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
// create a header
	var header = document.createElement('h2');
	var header_text = document.createTextNode('Abbreviations');
	header.appendChild(header_text);
// add header and definition list to body
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

function displayCitations() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	var quotes = document.getElementsByTagName('blockquote');

	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].getAttribute('cite')) continue;
		var url = quotes[i].getAttribute('cite');
		var quoteChildren = quotes[i].getElementsByTagName('*');
		if (quoteChildren.length < 1) continue;
		var elem = quoteChildren[quoteChildren.length - 1];
		var link = document.createElement('a');
		var link_text = document.createTextNode('Source');
		link.appendChild(link_text);
		link.setAttribute('href',url);
		var superScript = document.createElement('sup');
		superScript.appendChild(link);
		elem.appendChild(superScript);
	}
}

function displayAccesskeys() {
	var links = document.getElementsByTagName('a');
	if (links.length < 1) return false;
	var acckeys = new Array();
	for (var i = 0; i < links.length; i++) {
		if (!links[i].getAttribute('accesskey')) continue;
		var key = links[i].getAttribute('accesskey');
		var content = links[i].lastChild.nodeValue;
		acckeys[key] = content;
	}
	var lists = document.createElement('ul');
	for (key in acckeys) {
		var content = acckeys[key];
		var list = document.createElement('li');
		var list_text = document.createTextNode(key + ' : ' + content);
		list.appendChild(list_text);
		lists.appendChild(list);
	}
	var header = document.createElement('h2');
	var header_text = document.createTextNode('AccessKeys');
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(lists);

}

window.onload = function() {
	displayAbbr();
	displayCitations();
	displayAccesskeys()
}