$(document).ready(function() {

	/*Header menu*/

	$(".btn-menu").click(function(e){
		e.preventDefault();
		$(".mobile-menu").toggleClass("show");
	});

	$(".btn-menu img").click(function(){
	      var src = ($(this).attr("src") === "img/icons/menu.svg")
	                    ? "img/icons/close.svg" 
	                    : "img/icons/menu.svg";
	      $(this).attr("src", src);
	});

	/*feedback form*/

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".main .info-block .animate").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			500);
	});

	$(".main .sum .animate").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			500);
	});

	

	 


});