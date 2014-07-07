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
	$('#nav-bar .pos_1 a ').text('התנתק');

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

	if ($('#product-description .product-title').text().indexOf('GASLEVEL STICK') > -1) {
		$('div.classic_item').removeClass('active');
		$('div.stick_item').addClass('active');
		$('.left_video .classic_video').remove();
	}
	if ($('#product-description .product-title').text().indexOf('GASLEVEL CLASSIC') > -1) {
		$('div.stick_item').removeClass('active');
		$('div.classic_item').addClass('active');
		$('.left_video .stick_video').remove();
	}
	if ($('div.flash.success').text().indexOf('Logged in successfully') > -1) {
		$('div.flash.success').text("התחברת בהצלחה");	
	}
	if ($('div.flash.notice').text().indexOf('Signed out successfully.') > -1) {
		$('div.flash.notice').text("להתראות בפעם הבאה ");
	}
	if ($('div.flash.notice').text().indexOf('Contact email was successfully sent.') > -1) {
		$('div.flash.notice').text("המייל נשלח בהצלחה");
	}

	$('form#new_contact_us_contact').prepend('<div id="contact_us_title"><h3>צור קשר</h3></div>');
	$('form#new_contact_us_contact label').eq(0).text("שם פרטי");
	$('form#new_contact_us_contact label').eq(1).text("מייל");
	$('form#new_contact_us_contact label').eq(2).text("הודעה");

	$('div#existing-customer h6').text('התחברות ללקוחות קיימים');
	$('div#password-credentials label').eq(0).text('מייל');
	$('div#password-credentials label').eq(1).text('סיסמא');

	$('[data-hook="login"] a').eq(0).text("צור משתמש חדש");
	$('[data-hook="login"] a').eq(1).text("שחכתי סיסמא");

	//$('nav #main-nav-bar li#link-to-cart a').text('עגלת קניות');      //not-working
	var fixed_cart = $("nav #main-nav-bar li#link-to-cart a").html().replace("Cart","עגלת קניות");
	$("nav #main-nav-bar li#link-to-cart a").html(fixed_cart)

	$('#checkout-link').text("הזמן עכשיו");
	$('#clear_cart_link input').val("רוקן עגלה");
	$('p#clear_cart_link a').text("המשך קנייה");
	$('button#update-button').text("רענן");
	$('.form-buttons input.continue.button.primary').val('המשך קנייה');
	$('fieldset#shipping_method legend').text("משלוח");

	jQuery("form#checkout_form_payment div.form-buttons input.continue.button.primary").click(function(){
   		jQuery("#payment_method_7 img").trigger("click");
   		return false;
	});

	$('nav #main-nav-bar li#link-to-cart a .amount').remove();
	$('a.cart-info.full').text('עגלת קניות');
	$('a.cart-info.empty').text('עגלת קניות');
	
});


$(window).load(function() {
		//Header change text Cart
		// $('nav #main-nav-bar li#link-to-cart a .amount').remove();
		// var old_text_cart = $('a.cart-info.full').text();
		// var new_text_cart = old_text_cart.replace("Cart:", "עגלת קניות");
		// $('a.cart-info.full').text(new_text_cart);

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



$(document).ready(function() {
	// temp
    //$('div[data-hook="product_price"]').prepend('<div class="temp">להזמנות חייגו עכשיו: 052-457-2703 <br />מייל: otn.moas@gmail.com<br /> *בקרוב: הזמנות אונליין באתר!</div>');
    // end temp
    $("input#contact_us_contact_submit").val('שלח פנייה');
    
    $('.newsticker').newsTicker({
	    row_height: 207,
	    max_rows: 1,
	    speed: 700,
	    direction: 'up',
	    duration: 3000,
	    autostart: 1,
	    pauseOnHover: 1,
	    nextButton: $(".newsticker .fa .fa-chevron-down"),
	    prevButton: $(".newsticker .fa .fa-chevron-up")
	});
});



//= require spree/frontend/spree_contact_us
//= require spree/frontend/spree_paypal_express
