document.addEventListener("DOMContentLoaded", function(){

// recent work buttom
	var recentButton = document.querySelectorAll('.menu .nav-item');
	var	Left 	= document.querySelectorAll('.team .left'),
		Right 	= document.querySelectorAll('.team .right');
	var slides = document.querySelectorAll('.card');
	var slideIndex = 0;
	var countSlide = slides.length;
	console.log(countSlide);

	for (var i = 0; i < recentButton.length; i++) {
		recentButton[i].addEventListener('click', function(){
			// console.log('recentButton');
			for (var i = 0; i < recentButton.length; i++) {
				recentButton[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	}

	for (var i = 0; i < Left.length; i++) {
		Left[i].addEventListener('click', function(){

			// console.log('hi');
			var phanTuHienTai = slides[slideIndex];

			if(slideIndex < countSlide -1){
				slideIndex++;
			 }
			 else{
			 	slideIndex = 0;
			 }
			var phanTuTiep = slides[slideIndex];
			console.log(phanTuTiep);

		});
	}

	for (var i = 0; i < Right.length; i++) {
		Right[i].addEventListener('click', function(){

			console.log('hi');
		});
	}


});