function positionMessage() {
	if(!document.getElementById) return false;
	var elem1 = document.getElementById('message1');
	elem1.style.position = 'absolute';
	elem1.style.left = '50px';
	elem1.style.top = '100px';
	var elem2 = document.getElementById('message2');
	elem2.style.position = 'absolute';
	elem2.style.left = '50px';
	elem2.style.top = '200px';
	moveElement('message1',150,200,10);
	moveElement('message2',150,100,10);
}

addLoadEvent(positionMessage);