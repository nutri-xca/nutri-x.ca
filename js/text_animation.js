

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["Hidden Health Crisis", "Micronutrient Deficiencies", "Agricultural Problems", "Food"],
				loop: true,
				startDelay: 2,
				backDelay: 3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});
