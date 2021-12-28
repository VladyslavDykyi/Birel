import {animate, animateText,createBg} from "../default/script.js";

const box = document.querySelector('h1.title');

const box2 = document.querySelector('.top-block svg');
const box3 = document.querySelector('.mid-block svg');
const box4 = document.querySelector('.bot-block svg');

const column = document.getElementById('f-bg');
const column2 = document.getElementById('f-bg2');

const str = 'birel makes private equity liquid';
const widthW = window.screen.width;

const btnMenu = document.getElementById('menu');

animateText(box, str, 3000);

animate(box2, 'top', '-140px', 2000);
animate(box3, 'left', '0px', 2000);

if( widthW > 1440) {
	animate(box4, 'bottom', '-140px', 2000);
} else if ( widthW > 1024) {
	createBg(column, 33);
	createBg(column2, 62);
	animate(box4, 'bottom', '-20px', 2000);
} else if( widthW > 768) {
	createBg(column, 23);
	createBg(column2, 45);
} else if( widthW > 450) {
	createBg(column, 15);
	createBg(column2, 30);
} else {
	createBg(column, 10);
	createBg(column2, 24);
}


btnMenu.addEventListener('click', dropDown);

function dropDown() {
	let menu = document.querySelector('.drop-down');
	menu.classList.toggle('active');
	btnMenu.classList.toggle('active');
	document.body.classList.toggle('lock');
}



