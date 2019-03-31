$(document).ready(function() {

	//adding a new sample entry
	$('#add_entry').click(function(){
		console.log("Hello, you clicked me?")
		// var name = $('.bus_registration_number').val();
		var name = 'Minu';
		var phoneno = '9976448668';
		var email = 'minuapple@gmail.com';
		var data = {
			name: name,
			phoneno: phoneno,
			email: email
		}
		$.ajax({
			url: 'utils/add_entry.php',
			data: data,
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Successfully added entry");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	});

	$(window).scroll(function() {
   		var hT = $('#opening-heading').offset().top,
	    	hH = $('#opening-heading').outerHeight(),
	      	wH = $(window).height(),
	      	wS = $(this).scrollTop();
	   	if (wS > (hT+hH-wH)){
	       	setTimeout(function(){
			    document.getElementById("changeAgents").innerHTML = 45;
			}, 1000);
			setTimeout(function(){
			    document.getElementById("partnerNumbers").innerHTML = 3;
			}, 1000);
			setTimeout(function(){
			    document.getElementById("communityNumbers").innerHTML = 100;
			}, 1000);
	   }
	});

	$(document).scroll(function () {
	    var $nav = $(".navbar-fixed-top");
	    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	    if($(this).scrollTop() > $nav.height()){
	    	$('.navbar-default .navbar-nav>li>a').css("color","#000");
	    }
	    else{
	    	$('.navbar-default .navbar-nav>li>a').css("color","#fff");
	    }
  	});

});