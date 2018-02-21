jQuery(function($) {
	$(document).ready(function() {
		
		
		var currentBnr = 1;
		
		$('#cover-others').find('a').on('click', function(e) {
			var index = $(this).index();			
			$('.kamisi').animate({'margin-left': -(index * 220) }, 300)
			e.preventDefault();
		})
		
		
		$('#banner').hover(function(e) {
			clearInterval(automator);
		}, function(e) {
			automator = setInterval(autoAnimateLTR, 10000)
		});
		
		$(document).keydown(function(e) {
			switch(e.which) {
				case 37:
					animateDir('left');
					clearInterval(automator);
				break;
				case 39:
					animateDir('right');
					clearInterval(automator);
				break;
				default: return;
			}
			
			e.preventDefault();
		})
		
		// when the page's loaded

		$(window).load(function() {
			automator = setInterval(autoAnimateLTR, 10000)
		});
		
		// functions 
		
		function autoAnimateLTR() {
			animateDir('right');
		}
		
		function animateDir ( dir ) {
			if (dir == "left") {
				$('#go-left').click();
			} else {
				$('#go-right').click();
			}
		}
		

		// code for mail links

		$('a.email').html(function(){
			var adr = $(this).data('address');
			var dom = $(this).data('domain');
			var ext = $(this).data('ext');
			return adr + '@' + dom + ext;
		}).attr('href', function() {
			return 'mailto:' + $(this).html();
		});
					
	});
})