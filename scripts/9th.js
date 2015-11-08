window.onload = function() {
	styleHeaderSiblings();
	stripeTables();
	highlightRows();
}

function styleHeaderSiblings() {
	var headers = document.getElementsByTagName('h1');
	for (var i = 0; i < headers.length; i++) {
		var elem = getNextSibling(headers[i].nextSibling);
		elem.style.color = '#f00';
		elem.style.fontWeight = 'bold';
	};
}
function getNextSibling(node) {
	if(node.nodeType == 1) {
		return node;
	}
	if(node.nextSibling) {
		return getNextSibling(node.nextSibling);
	}
	return null;
}

function stripeTables() {
	var tables = document.getElementsByTagName('table');
	var odd, rows;
	for (var i = 0; i < tables.length; i++) {
		odd = false;
		rows = tables[i].getElementsByTagName('tr');
		for (var i = 0; i < rows.length; i++) {
			if (odd == true) {
				rows[i].style.background = 'orange';
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

function highlightRows() {
	var tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		var rows = this[i].getElementsByTagName('tr')
		for (var i = 0; i < rows.length; i++) {
			rows[i].onmouseover = function() {
				this.style.fontWeight = 'bold';
			}
		};
	};
}