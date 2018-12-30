jQuery(document).ready( function($) {
    'use strict';

    $('.mobile-menu').meanmenu();
    
    /* Preloader JS */
    $(window).load(function() {
	    $('.preloader-wrap').fadeOut('500', function() {
            $(this).remove();
        });
	});

    //=================== Adminer add class ====================
    $('#wpadminbar').addClass('mobile');
});