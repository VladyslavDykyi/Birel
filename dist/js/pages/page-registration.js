import { bindTabs} from "../default/script.js";

bindTabs('#tabs1');

const activeBtnPassword = document.querySelectorAll('.box-input button');
activeBtnPassword.forEach(item=> {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
		if(item.parentElement.firstElementChild.type === "password") {
			item.parentElement.firstElementChild.type = "text";
		} else {
			item.parentElement.firstElementChild.type = "password";
		}
	});
});
console.log(activeBtnPassword);

