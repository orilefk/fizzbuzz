$(document).ready(function() {
var i = 1;
while (i < 101) {
	if (i % 3 == 0 && i % 5 == 0) {
		document.write("FizzBuzz <br>");
	}
	else if (i % 3 == 0) {
		document.write("Fizz <br>");
	}
	else if (i % 5 == 0) {
	   	document.write("Buzz <br>");
	}
	else {
		document.write(i + "<br>");
	}
	i++;
}
});