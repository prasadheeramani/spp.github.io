(function($){
	
    jQuery(document).ready(function($) {
    	"use strict";

		$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		    event.preventDefault();
		    $(this).ekkoLightbox();
	    });


		var sequenceElement_single = document.getElementById("sequence-single");
		
		$('.sabbi-book_timeline .btn-expand').on('click', function(event) {
			event.preventDefault();
			var btnThis = $(this);
			btnThis.siblings('.book-list').find('.onexpan').slideToggle(200);
			
			if (btnThis.text() != "View Less" ) {
				btnThis.text('View Less');
			} else {
				btnThis.text(btnThis.data('text'));
			}
		});


		
	});

	jQuery(window).load(function() {
		"use strict";
		var sequenceElement = document.getElementById("sequence");
		
		// Place your Sequence options here to override defaults
		// See: http://sequencejs.com/documentation/#options
		var options = {
		  startingStepAnimatesIn: true,
		  autoPlay: $("#sequence").data('slideautoplay'),
		  autoPlayInterval: $("#sequence").data('slideautoplayinterval'),
		  /* Make this the same as the animateCanvasDuration */
		  phaseThreshold: 250,
		  preloader: true,
		  reverseWhenNavigatingBackwards: true,
		  keyNavigation: true,
		  fadeStepWhenSkipped: false
		}
		if($(sequenceElement).length) {
		// Launch Sequence on the element, and with the options we specified above
			var mySequence = sequence(sequenceElement, options);
		}

		

	});
})(jQuery);