$("#submit").click(function() {

	var movieName = $("#movieInput")[0].value;
	var rateSelect = $("#rateSelect option:selected")[0].text;

	if(movieName) {

		$("#rateResults").append("<div class='col-6 py-4'><h3>" + movieName + "</h3></div>");
		$("#rateResults").append("<div class='col-6 py-4'><h3>" + rateSelect + "</h3></div>");
	}
});


