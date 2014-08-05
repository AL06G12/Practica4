//JavaScript
	
$(document).ready(function(e){
	
	$("#Beep").click(function(e){
		
	navigator.notification.beep(1);;
	
});//Click Beep
	
	$("#Vibrar").click(function(e){
		
	navigator.notification.vibrate(1000);
	
});//Click Vibrar
	
	
});//ready