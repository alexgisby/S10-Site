/**
 * JS file for S10
 */

$(function(){
	
	// Loop through the blades and assign some useful data:
	var deg = 0, blades = $('section'), airbrush = $('#airbrush');
	airbrush.data('currentRotation', 0);
	blades.each(function(){
		$(this).data('currentRotation', deg);
		deg += 90;
	});
	
	delete deg;
	
	$('.prev').click(function(e){
		e.preventDefault();
		spinBlades(90);
	});
	
	$('.next').click(function(e){
		e.preventDefault();
		spinBlades(-90);
	});
});

/**
 * Spinning the blades
 *
 * @param 	int 	Amount to spin by
 */
function spinBlades(amount)
{
	var sections = $('section');
	sections.each(function(){
		var currentRot 	= $(this).data('currentRotation');
		var newRotValue	= 'rotate(' + (currentRot + amount) +'deg)';
		
		$(this).css({
			'-webkit-transform': newRotValue,
			'-moz-transform': newRotValue,
			'-ms-transform': newRotValue,
			'-o-transform': newRotValue
		});
		
		$(this).data('currentRotation', (currentRot + amount));
	});
	
	var airbrush 		= $('#airbrush');
	var airCurrentRot 	= airbrush.data('currentRotation');
	var newAirRot		= 'rotate(' + (airCurrentRot + amount) + 'deg)';
	airbrush.css({
		'-webkit-transform': newAirRot,
		'-moz-transform': newAirRot,
		'-ms-transform': newAirRot,
		'-o-transform': newAirRot
	});
	airbrush.data('currentRotation', (airCurrentRot + amount));
}