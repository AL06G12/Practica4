//JavaScript
	var audio ;
$(document).ready(function(e){
	
	if( window.plugins && window.plugins.LowlatencAudio)
	{audio=window.plugins.LowLatencAudio;audio.preloadFX('mario', 'audio/mario.mp3',function(msg){},function(msg){alert('error: '+msg);});
	}//if
	
	
	$("#Beep").click(function(e){
		
	navigator.notification.beep(1);;
	
});//Click Beep
	
	$("#Vibrar").click(function(e){
		
	navigator.notification.vibrate(1000);
	
});//Click Vibrar
   
	$("#Play").click(function(e){
		
	audio.play('mario');
	
});//Click Play
	
});//ready