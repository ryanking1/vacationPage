$(function() {
    $("#myForm").submit(function(event) {
      var climate = $('input[name=climate]:checked', '#myForm').val();
      var activity = $('input[name=activity]:checked', '#myForm').val();
      var cost = $('input[name=cost]:checked', '#myForm').val();
      var population = $('input[name=population]:checked', '#myForm').val();
      var health = $('input[name=health]:checked', '#myForm').val();

		if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").append("<p> vacation 00000 </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 00001  </p>");
		}

		else if (climate === "0" && activity === "0" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 00011  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 00010  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 00101  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 00100  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 00111  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 00110  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 01001  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 01000  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 01011  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 01010  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 01101  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 01100  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 01111  </p>");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 01110  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 10001  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 10000  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 10011  </p>");
		}
		else if (climate === 1 && activity === "0" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 10010  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 10101  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 10100  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 10111  </p>");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 10110  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 11001  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 11000  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 11011  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").append("<p>  vacation 11010  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").append("<p>  vacation 11101  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").append("<p>  vacation 11100  </p>");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").append("<p>  vacation 11111  </p>");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "1") {
		    $("#appendList").append("<p>  vacation 00001  </p>");
		}
		else {
			alert("Please answer all questions before submitting.");
		}
		event.preventDefault();
	});
  });