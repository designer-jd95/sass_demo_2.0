$(document).ready (function(){	
	
	$('.header-profile a').click(function (e) {
	  $('.profile-dw').toggleClass("show");
	  if ($(e.target).is(".notification-dw") === false) {
		  $(".notification-dw").removeClass("notification-show");
		}
	  e.stopPropagation();
	});
	$(document.body).on("click", function(e) {
		if ($(e.target).is(".profile-dw") === false) {
		  $(".profile-dw").removeClass("show");
		}
	});

	$('.notification a').click(function (e) {
	  $('.notification-dw').toggleClass("notification-show");
	  if ($(e.target).is(".profile-dw") === false) {
		  $(".profile-dw").removeClass("show");
		}
	  e.stopPropagation();
	});
	$(document.body).on("click", function(e) {
		if ($(e.target).is(".notification-dw") === false) {
		  $(".notification-dw").removeClass("notification-show");
		}
	});

	$( ".more-options a" ).click(function() {
		$('.opt-list').toggleClass('open');
	});

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 1) {
	       $('header').addClass('sticky-header');
	    } else {
	       $('header').removeClass('sticky-header');
	    }
	});
});