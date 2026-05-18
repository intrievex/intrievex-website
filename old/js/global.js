$(document).ready(function() {


/* display thank you message */
$.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (!results) { return 0; }
	return results[1] || 0;
}

var formReturn = $.urlParam('ty');	 

if (formReturn == "true") {
	$('h1').after('<div class="confirmation"><h3>Thank You</h3><p>Thank you for inquiring about products and services from Intrievex. Shortly, you will receive an email and a follow up phone call. We look forward to serving you!</p></div>');
	$('div.confirmation').animate({ backgroundColor: '#fff' }, 2500);
} else {
	// do nothing
};

		 
});