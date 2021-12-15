var slideIndex = 1;	//Variable for slide index
showSlides(slideIndex); //Call the function to show the slides

// Function to increase or decrease the slideIndex based on the value passed by the function in html
function plusSlides(n) {
	showSlides((slideIndex += n)); 
}
//function to get the current slide, used to make the dot active. Calls function showSlides(n) and passes the slideIndex as a parameter (n)
function currentSlide(n) {
	showSlides((slideIndex = n));
}

//The main function to show the slides
function showSlides(n) {
	var i; //Variable to be used in the loop
	var slides = document.getElementsByClassName('mySlides'); //Variable to get all the slide of the carusel
	var dots = document.getElementsByClassName('dot'); //Variable to get all the dots
	if (n > slides.length) {
		slideIndex = 1; //check if n is greater than slides length and in that case show the first slide
	}
	if (n < 1) {
		slideIndex = slides.length; //Check if n is less than slides length and in that case show the last slide
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'; //Loop to make all the slides display property none
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', ''); //Loop to make remove the class active from all the dotes
	}
	slides[slideIndex - 1].style.display = 'block'; //Make the next photo appear (based on slideIndex -1 since arrays start at 0)
	dots[slideIndex - 1].className += ' active'; //Give the class actve to the active dot (based on slideIndex -1 since arrays start at 0)
}


// Form validation
function validateForm() {
	let missing = []; //array to hold the missing fields
	let fname = document.forms['reservationForm']['fname']; //Variable to get name
	let sname = document.forms['reservationForm']['sname']; //Varible to get surname
	let uLocation = document.forms['reservationForm']['uLocation']; //Varible to get pick up location
	let dLocation = document.forms['reservationForm']['dLocation']; //Varible to get drop-off location
	let uDate = document.forms['reservationForm']['uDate']; //Varible to get pick up date
	let dDate = document.forms['reservationForm']['dDate']; //Varible to get drop off date
	//check if the fields are empty (all of them), and if that is the case make the border color red
	if (fname.value == null || fname.value == '') {
		missing.push('name');
		fname.style.borderColor = 'red';
	}
	if (sname.value==null||sname.value == '') {
		missing.push('surname');
		sname.style.borderColor = 'red';
	}
	if (uLocation.value==null||uLocation.value == '') {
		missing.push('pick up location');
		uLocation.style.borderColor = 'red';
	}
	if (dLocation.value==null||dLocation.value == '') {
		missing.push('drop-of location');
		dLocation.style.borderColor = 'red';
	}
	if (uDate.value==null||uDate.value == '') {
		missing.push('pick up date');
		uDate.style.borderColor = 'red';
	}
	if (dDate.value==null||dDate.value == '') {
		missing.push('drop-off location');
		dDate.style.borderColor = 'red';
	}
	//if missing is empty (==0) show an alert that the form is completed and the reservation is finished, else show the missing fields of the input 
	if (missing.length == 0) {
		alert('The reservation is complete. You are welcomed to come and pick up the car on the ' +uDate.value);
	} else {
		alert('Please fill in the form correctly. The fields missing are: ' + missing);
	}
}
