const btnMenu = document.getElementById('menu');

btnMenu.addEventListener('click',dropDown);

function dropDown() {
	let menu = document.querySelector('.drop-down');
	menu.classList.toggle('active');
	btnMenu.classList.toggle('active');
	document.body.classList.toggle('lock');
}

