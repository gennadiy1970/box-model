
function about (txt) {
  let parent = document.body;
	let elem = document.createElement('div');
	elem.id = 'modalContainer';
	let p = document.createElement('p');
	p.textContent = txt;
	let span = document.createElement('span');
	span.id = 'close';
	span.textContent = 'X';
	elem.appendChild(span);
  elem.appendChild(p);
	parent.appendChild(elem);
}
