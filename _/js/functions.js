(function($){

	$(document).ready(function (){

		$('.delete').on('click', function() {
			$(this).closest('li')
				.addClass('remove')
				.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(){
					$(this).remove();
				});
		});

	});
	
	$(window).load(function() {
	});
	
	$(window).resize(function() {
		
	});

})(window.jQuery);