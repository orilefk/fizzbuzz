$(document).ready(function() {

// allows users to press enter to add
	$('#type-number').keyup(function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
			$('#add').click();
		};
	});

// allows users to input a number
	$('#add').click(function(e){
		var txtbox = document.getElementById('type-number');
		var txtval = Number(txtbox.value);
		e.preventDefault();
		clearBox('game-content');

		if(!$.trim($('#type-number').val())) {
			alert('Please enter a number');
		}
		if(txtval % 1 != 0) {
			alert('Please do not enter a decimal');
		}
		 else {
			fizzbuzzer(txtval);
			document.getElementById('type-number').value = '';
		};
	});

//FizzBuzz game function
function fizzbuzzer(max) {

  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }

  for (var i = 1; i <= max; i++) {
    $("#game-content").append(check(i) + "<br>");

  }

}
// Function to clear content when a new number is entered
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
});