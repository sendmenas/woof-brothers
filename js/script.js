$(document).ready(function() {

	/* Character selection */


	$(".brother").click(function() {
		
		var brotherSelect = $(this).attr("id");
		console.log(brotherSelect);
		
		if (brotherSelect === "Derek") {
			$(".thumbnail").removeClass("selected");
			$(this).addClass("selected");
		}

		if (brotherSelect === "Del") {
			$(".thumbnail").removeClass("selected");
			$(this).addClass("selected");
		}

		var firstSelection = confirm("Are you sure you want to choose " + brotherSelect + "?");
		if (firstSelection == true) {

			var thisBrother = $(this).parents(".main").next();
			console.log(thisBrother);

			$(this).parents(".main").next().toggle();
			$("html, body").animate({scrollTop: $(this).parents(".main").next().offset().top}, 500);
		} else {
			$(".thumbnail").removeClass("selected");
		}

		$(".continue").click(function() {
			if (brotherSelect === "Derek") {
				$(this).parents(".gameStory").nextAll(".derek").first().toggle();
				$("html, body").animate({scrollTop: $(this).parents(".gameStory").nextAll(".derek").first().offset().top}, 500);
			}
			if (brotherSelect === "Del") {
				console.log($(this).parents(".gameStory").nextAll(".del").first());
				$(this).parents(".gameStory").nextAll(".del").first().toggle();
				$("html, body").animate({scrollTop: $(this).parents(".gameStory").nextAll(".del").first().offset().top}, 500);
			}
		});


	});

	/* Hovering */
	$(".thumbnail").hover(function() {
		$(this).nextAll().css("display", "initial");
	}, function () {
		$(".comment").css("display", "none");
	});

	/* Action buttons */
	$(".yesNo").click(function() {
		var banditSelect = $(this).html();
		console.log(banditSelect);

		if (banditSelect === "Yes") {
			alert("Please reconsider");
		}
		if (banditSelect === "No") {
			$(this).parents().next().toggle();
			$("html, body").animate({scrollTop: $(this).parents().next().offset().top}, 500);
		}
	});

	$("#showAll").click(function() {
		$(".gameStory").toggle();
		$(".yesNo, .continue").css("display", "none");
		$("#showAll").html("start again");
		$("#showAll").click(function() {
			location.reload();
		});
	});
});