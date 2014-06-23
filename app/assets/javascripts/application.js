// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$( document ).ready(function() {
	//Header add class to nav bar (pos_0)
	var count = 0;
	$( "#nav-bar li" ).each(function() {
	 	$(this).addClass('pos_' + count );
	 	count++;
	}); 

	//Header change my account to he
	$('#nav-bar .pos_0 a ').text('התחבר  / ');
	$('#nav-bar .pos_1 a ').text('הרשם');

	$('input#keywords').attr("placeholder", "");
});


$(window).load(function() {
		//Header change text Cart
		$('#link-to-cart a .amount').remove();
		var old_text_cart = $('a.cart-info.full').text();
		var new_text_cart = old_text_cart.replace("Cart:", "עגלת קניות");
		$('a.cart-info.full').text(new_text_cart);
});





