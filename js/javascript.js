document.addEventListener("DOMContentLoaded", function(){

// recent work buttom
	var recentButton = document.querySelectorAll('.menu .nav-item')
	

	for (var i = 0; i < recentButton.length; i++) {
		recentButton[i].addEventListener('click', function(){
			console.log('recentButton');
			for (var i = 0; i < recentButton.length; i++) {
				recentButton[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	}
});