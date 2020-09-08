$(document).ready(function() {

	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".main .info-block .animate").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			2000);
	});

	$(".main .sum .animate").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			2000);
	});
	

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


});


$(window).scroll(function (){
    $('#skills').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+300) {
        	const start = $('.skill-title i').data('percent');

           $('.skill-title i').text(start);
		   $('.skill-scale_item').css('width', start+'%');
        }
    });
});


/*Header dynamic-text*/

var typed = new Typed(".dynamic-text span", {
  strings: ["Zahar Melnik.", "Frontend developer."],
  loop: true,
  typeSpeed: 50,
  backSpeed : 50,
  startDelay: 0,
  backDelay: 2000
});


/*Header scrolling styling*/

if(window.matchMedia('(max-width: 1200px)').matches){

	$(window).scroll(function (){
	    $('#hello .subtitle').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+80) {
	            $('.header').addClass('scroll');
	        }else{$('.header').removeClass('scroll');}
	    });
	});

}else {

	$(window).scroll(function (){
	    $('#about').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+80) {
	            $('.header').addClass('scroll');;
	        }else{$('.header').removeClass('scroll');}
	    });
	});
};


/*Last projects: site selection*/

$(".projects__link li").click(function(e) {
  e.preventDefault();
  $(".projects__link li").removeClass('active');
  $(this).addClass('active');

  $(".projects__img a").attr("href","https://zakharmelnik.github.io/"+$(this).text());
  $(".projects__img a img").attr("src","img/projects/"+$(this).text()+".png");
  $(".projects__img a img").attr("alt",$(this).text());
  $(".projects__img").scrollTop(0);
});


/*Header open lang*/

$('.header__lang').hover(function(){
$(this).toggleClass('open');
});


/*Header switch theme*/

$('.header__theme .checkbox').click(function(){
	$('body').toggleClass('on');
});


/*Счётчик*/

/*$(window).scroll(function (){
    $('#skills').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+200) {
            move();
        }
    });
});

function move() {
    let width = 0;
    let id = setInterval(frame, 2);
    
    function frame() {
        if (width >= $('this').data('num')) {
            clearInterval(id);
        } else {
            width++;

            $('.skill-percent').html(width + ' percent');
        }
    }
    return;
};
*/

/*activation tooltip*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


