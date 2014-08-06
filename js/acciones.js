//JavaScript
	var audio ;
$(document).ready(function(e){
	
	document.addEventListener("deviceready",function(e){
	
	
    
	audio=window.plugins.LowLatencAudio;audio.preloadFX('mario', 'audio/mario.mp3',function(msg){},function(msg){alert('error: '+msg);});
	
	
	
	$('#Beep').bind("tap",function(e){
		
	navigator.notification.beep(1);;
	
});//Click Beep
	
	$("#Vibrar").bind("tap",function(e){
		
	navigator.notification.vibrate(1000);
	
});//Click Vibrar
   
	$("#Play").bind("tap",function(e){
		
	audio.play('mario');
	
});//Click Play



	});//deviceready
	
});//ready