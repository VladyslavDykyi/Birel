function dropMenu1() {
	$('.second-menu').slideUp();
	$('.first-box').removeClass('active');
}
function dropMenu2(e) {
	$(e).parent().addClass('active');
	$(e).parent().siblings('.second-menu').slideDown();
}
function dropMenu11() {
	$('.third-menu').slideUp();
	$('.second-box').removeClass('active');
}
function dropMenu22(e) {
	$(e).parent().addClass('active');
	$(e).parent().siblings('.third-menu').slideDown();
}
function dropMenu111() {
	$('.fourth-menu').slideUp();
	$('.third-box').removeClass('active');
}
function dropMenu222(e) {
	$(e).parent().addClass('active');
	$(e).parent().siblings('.fourth-menu').slideDown();
}
function dropMenu1111() {
	$('.fifth-menu').slideUp();
	$('.fourth-box').removeClass('active');
}
function dropMenu2222(e) {
	$(e).parent().addClass('active');
	$(e).parent().siblings('.fifth-menu').slideDown();
}
function slide2(e) {
	if ($(e).parent().hasClass('active')) {
		dropMenu1111();
		dropMenu111();
		dropMenu11();
		dropMenu1();
	} else {
		dropMenu1111();
		dropMenu111();
		dropMenu11();
		dropMenu1();
		dropMenu2(e);
	}
}
function slide3(e) {
	if ($(e).parent().hasClass('active')) {
		dropMenu1111();
		dropMenu111();
		dropMenu11();
	} else {
		dropMenu1111();
		dropMenu111();
		dropMenu11();
		dropMenu22(e);
	}
}
function slide4(e) {
	if ($(e).parent().hasClass('active')) {
		dropMenu1111();
		dropMenu111();
	} else {
		dropMenu1111();
		dropMenu111();
		dropMenu222(e);
	}
}
function slide5(e) {
	if ($(e).parent().hasClass('active')) {
		dropMenu1111();
	} else {
		dropMenu1111();
		dropMenu2222(e);
	}
}