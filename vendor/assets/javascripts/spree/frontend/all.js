// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs

//= require spree/frontend

//= require_tree .

$( document ).ready(function() {
	//Header add class to nav bar (pos_0)
	var count = 0;
	$( '#nav-bar li' ).each(function() {
	 	$(this).addClass('pos_' + count );
	 	count++;
	}); 

	//Header change my account to he
	$('#nav-bar .pos_0 a ').text('התחבר   ');
	$('#nav-bar .pos_1 a ').text('הרשם');

	$('input#keywords').attr("placeholder", "");
	$('#add-to-cart-button').text('הזמן עכשיו');

	$('ul.links_separat li.pos_0').click(function() {
	  $('.content_how_it_works').addClass('active');
	  $('.content_technical_details').removeClass('active');
	});
	$('ul.links_separat li.pos_1').click(function() {
	  $('.content_technical_details').addClass('active');
	  $('.content_how_it_works').removeClass('active');
	});

	$('dl#user-info dt').text("מייל שלי");
	$('div.account-my-orders h3').text("ההזמנות שלי");
	if($('div.account-my-orders p').text() == "You have no orders yet"){
	$('div.account-my-orders p').text("אין הזמנות עדיין");
	}
});


$(window).load(function() {
			//Header change text Cart
		$('nav #main-nav-bar li#link-to-cart a .amount').remove();
		var old_text_cart = $('a.cart-info.full').text();
		var new_text_cart = old_text_cart.replace("Cart:", "עגלת קניות");
		$('a.cart-info.full').text(new_text_cart);

		var value = $('.search-results-title').text(); 
		value = value.replace("Search results for", "תוצאות החיפוש שלך ל : ");
		$('.search-results-title').text(value);
});

// calling slider js

$(document).ready(function() {
    var slider = $('#slider').leanSlider({
        directionNav: '#slider-direction-nav',
        controlNav: '#slider-control-nav'
    });

});





