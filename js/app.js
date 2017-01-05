
 

$(document).ready(function(){
    $('.center').click(function(){
        $('#rotate-box').css({


        
        "-webkit-animation-name":"rotatebox",
        "-webkit-animation-duration":"0.8s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",
		
        });
        $('#fadeout').css({
		        "-webkit-animation-name":"fadeout",
		        "-webkit-animation-delay":"1s",
		        "-webkit-animation-duration":"3s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
		        });
    });
});
