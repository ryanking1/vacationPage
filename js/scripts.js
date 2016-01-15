$(function() {
    $("#myForm").submit(function(event) {
      var climate = $('input[name=climate]:checked', '#myForm').val();
      var activity = $('input[name=activity]:checked', '#myForm').val();
      var cost = $('input[name=cost]:checked', '#myForm').val();
      var population = $('input[name=population]:checked', '#myForm').val();
      var health = $('input[name=health]:checked', '#myForm').val();

		if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").text(" Vacation 00000 ");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 00001  ");
		}

		else if (climate === "0" && activity === "0" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 00011  ");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 00010  ");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 00101  ");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 00100  ");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 00111  ");
		}
		else if (climate === "0" && activity === "0" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 00110  ");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 01001  ");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 01000  ");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 01011  ");
		}
		else if (climate === "0" && activity === "1" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 01010  ");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 01101  ");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 01100  ");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 01111  ");
		}
		else if (climate === "0" && activity === "1" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 01110  ");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 10001  ");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 10000  ");
		}
		else if (climate === "1" && activity === "0" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 10011  ");
		}
		else if (climate === 1 && activity === "0" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 10010  ");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 10101  ");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 10100  ");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 10111  ");
		}
		else if (climate === "1" && activity === "0" && cost === "1" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 10110  ");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 11001  ");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 11000  ");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 11011  ");
		}
		else if (climate === "1" && activity === "1" && cost === "0" && population === "1" && health === "0") {
			$("#appendList").text("  Vacation 11010  ");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "0" && health === "1") {
			$("#appendList").text("  Vacation 11101  ");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "0" && health === "0") {
			$("#appendList").text("  Vacation 11100  ");
		}
		else if (climate === "1" && activity === "1" && cost === "1" && population === "1" && health === "1") {
			$("#appendList").text("  Vacation 11111  ");
		}
		else if (climate === "0" && activity === "0" && cost === "0" && population === "0" && health === "1") {
		    $("#appendList").text("  Vacation 00001  ");
		}
		else {
			alert("Please answer all questions before submitting.");
		}
		event.preventDefault();
	});
  });