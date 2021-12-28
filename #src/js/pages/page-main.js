import {animate, animateText} from "../default/script.js";

const box = document.querySelector('h1.title');
const str = 'birel makes private equity liquid';
animateText(box, str, 3000);
const box2 = document.querySelector('.top-block svg');
const box3 = document.querySelector('.mid-block svg');
const box4 = document.querySelector('.bot-block svg');
animate(box2, 'top', '-140px', 2000);
animate(box3, 'left', '0px', 2000);
animate(box4, 'bottom', '-140px', 2000);



const btnMenu = document.getElementById('menu');

btnMenu.addEventListener('click',dropDown);

function dropDown() {
	let menu = document.querySelector('.drop-down');
	menu.classList.toggle('active');
	btnMenu.classList.toggle('active');
	document.body.classList.toggle('lock');
}


// const boxBg = document.getElementById('f-bg');
function createBg() {
	const elements = document.querySelectorAll('.g-p');
	console.log(elements);
	for( let i = 0 ; i > elements.length ; i++ ) {
		elements.
	}
}

createBg();

