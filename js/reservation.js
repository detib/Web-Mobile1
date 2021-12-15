var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}


// Form validation
function validateForm() {
	let missing = [];
	let fname = document.forms['myForm']['fname'];
	let sname = document.forms['myForm']['sname'];
	let uLocation = document.forms['myForm']['uLocation'];
	let dLocation = document.forms['myForm']['dLocation'];
	let uDate = document.forms['myForm']['uDate'];
	let dDate = document.forms['myForm']['dDate'];
	if (fname.value == '') {
		missing.push('name');
		fname.style.borderColor = 'red';
	}
	if (sname.value == '') {
		missing.push('surname');
		sname.style.borderColor = 'red';
	}
	if (uLocation.value == '') {
		missing.push('pick up location');
		uLocation.style.borderColor = 'red';
	}
	if (dLocation.value == '') {
		missing.push('drop-of location');
		dLocation.style.borderColor = 'red';
	}
	if (uDate.value == '') {
		missing.push('pick up date');
		uDate.style.borderColor = 'red';
	}
	if (dDate.value == '') {
		missing.push('drop-off location');
		dDate.style.borderColor = 'red';
	}
	console.log(missing);
	if (missing.length == 0) {
		return false;
	} else {
		return true;
	}
}
