$(document).ready(function(){
	//Checking if the menu was clicked
	// $(".menu>span").on("click",function(){
	// 	$(".menu").toggleClass("active");
	// });	
	// $("body").on("click.hideMenu", function(e){
	// 	//Checking if the menu items are currently displayed
	// 	if ($(".menu").hasClass("active")){
	// 		if (!$(e.target).parent().hasClass("menu-list") || !$(e.target).parent().hasClass("menu")){
	// 			$(".menu").removeClass("active");
	// 		}
	// 	}
	// });
	var windowheight = $( document ).height();
	var mainheight = $("#photos.active .outer-wrap").height();
	
	$(".login-container>a").on("click",function(){
		$("#login-box").removeClass("fadeOutUp");
		$(".login-container").addClass("active");
		$("#login-box").addClass("fadeInDown");
	});
	$(".close-login").on("click",function(){
		$("#login-box").removeClass("fadeInDown");
		$("#login-box").addClass("fadeOutUp");
		// $(".login-container").removeClass("active");
	});
	$(".actions-button").on("click",function(){
		$(".actions").toggleClass("active");
	});
	$(".close-metadata").on("click",function(){
		$(".metadata-box").addClass("fadeOutLeft");
		$("#photos").delay( 800 ).removeClass("active");
		$(".action-bar").removeClass("active");
	});

	$(".photo-thumb>img").on("click",function(){
		if ($("#photos").hasClass("active") == true){
			$(".metadata-box").addClass("fadeOutLeft");
			$(".metadata-box").removeClass("fadeInLeft");
		}
		else{
			$(".metadata-box").removeClass("fadeOutLeft");
			$(".metadata-box").addClass("fadeInLeft");	
		}
		$("#photos, .action-bar").delay( 800 ).toggleClass("active");
		// $(".action-bar").toggleClass("active");
		if ($("#photos").hasClass("active") == true && $(".action-bar").hasClass("sticky") == true){
	    	$("#photos").addClass("sticky-left");
	    }
	    else{
	    	$("#photos").removeClass("sticky-left");
	    }
	    var mainheight = $("#photos.active .outer-wrap").height();
	    var min_height = windowheight - 195;
        $(".metadata-box").css({ height:mainheight, minHeight: min_height});
	});
	$(".inline-nav-button").on("click",function(){
		$(".inline-nav").toggleClass("active");
	});

	$(".login-options span").on("click", function(){
		$(".login-options span").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("for-login") == true){
			$(".forgot-pass").removeClass("active");
			$(".login-main").addClass("active");
		}
		else{
			$(".login-main").removeClass("active");
			$(".forgot-pass").addClass("active");	
		}
	});

	// Function to make the action bar sticky 
	var actionContainer = $('.action-bar').offset().top;  
  
	var stickyActions = function(){  
	var scrollTop = $(window).scrollTop();  
	       
	if (scrollTop > actionContainer) {   
	    $('.action-bar').addClass('sticky');
	    if ($("#photos").hasClass("active") == true){
	    	$("#photos").addClass("sticky-left");
	    }
	    else{
	    	$("#photos").removeClass("sticky-left");
	    }
	} else {  
	    $('.action-bar').removeClass('sticky');  
	    $("#photos").removeClass("sticky-left"); 
	}  
	};  
	  
	stickyActions();  
	  
	$(window).scroll(function() {  
	    stickyActions();  
	});  

});