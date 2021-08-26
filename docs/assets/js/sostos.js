$(document).ready(function(){
	//Scroll up//
		$("body").append("<div class='scrollup'><img src='assets/img/up.png'></div>");
	  		$(window).scroll(function(){
	    		if ($(this).scrollTop() > 250) $('.scrollup').fadeIn();
				else $('.scrollup').fadeOut();
			});
	    $(document).on("click",".scrollup",function(e){ 
	      	e.preventDefault();
	      	$("html, body").stop().animate({ scrollTop: 0 }, "slow");
	    });

    // fade .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 150) {
                $('.navbar').fadeIn();
                $("#logo").attr("src","assets/img/nav.png");
            } else {
                $('.navbar').fadeOut(); 
                $("#logo").attr("src","assets/img/logo.png");
            }
        });
	});

    //chat
     $(function(){
$("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
            });
  })
        
});