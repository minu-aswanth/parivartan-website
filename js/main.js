$(document).ready(function() {

	//adding a new sample entry
	$('#add_entry').click(function(){
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

});