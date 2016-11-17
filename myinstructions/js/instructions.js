$("document").ready(function() {
	$("#motorcycle1").hide();
	$("h1").click(function() {
		$("h2").animate({
			/* for font-size, can also use hide, show, or toggle
			 example "font-size" : "toggle",
			 "font-size" : "3em"
			 */
			"font-size" : "toggle",
			"width" : "45%",
			"left" : "+=100px"
		}, 1000, function() {
			$("h3").fadeToggle(1000);
			$("img").fadeToggle(1000);
		});
		$("#click4pic2").click(function() {

			$("#click4pic2").after('<div><img class="imgCenter" id="snow2" src="images/snowboard_sequence_2(600*450).png" alt="snowboarder2"></div>');

			$("#snow2").after('<h4 id="click4pic3">*Click here to see picture #3*</h4>');

			$("#click4pic3").click(function() {

				$("#click4pic3").after('<div><img class="imgCenter" id="snow3" src="images/snowboard_sequence_3(600*450).png" alt="snowboarder3"></div>');

				$("#snow3").after('<h4 id="click4pic4">*Click here to see picture #4*</h4>');
			});

		});
	});
});
