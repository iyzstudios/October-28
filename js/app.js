
 

$(document).ready(function(){
    $('.center').click(function(){
        $('#rotate-box').css({


        //for safari & chrome
        "-webkit-animation-name":"rotatebox",
        "-webkit-animation-duration":"0.8s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",
		
        });
        $('#fadeout').css({
		        "-webkit-animation-name":"fadeout",
		        "-webkit-animation-duration":"0.8s",
		        "-webkit-animation-iteration-count":"1",
		        "-webkit-animation-fill-mode" : "forwards",
		        });
    });
})
