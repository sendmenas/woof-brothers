$(document).ready(function() {

	/* Character selection */
	$(".brother").click(function() {
		
		var brotherSelect = $(this).attr("id");
	
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

			$(this).parents(".main").next().toggle();
			$(this).parents(".main").next().find(".comment").toggle(1000);
			$("html, body").animate({scrollTop: $(this).parents(".main").next().offset().top}, 500);
		} else {
			$(".thumbnail").removeClass("selected");
		}

		$(".continue").click(function() {
			if (brotherSelect === "Derek") {
				$(this).parents(".gameStory").nextAll(".derek").first().toggle();
				$("html, body").animate({scrollTop: $(this).parents(".gameStory").nextAll(".derek").first().offset().top}, 500);
				$(this).parents(".gameStory").nextAll(".derek").first().find(".comment").toggle(1000);
			}
			if (brotherSelect === "Del") {
				$(this).parents(".gameStory").nextAll(".del").first().toggle();
				$("html, body").animate({scrollTop: $(this).parents(".gameStory").nextAll(".del").first().offset().top}, 500);
				$(this).parents(".gameStory").nextAll(".derek").first().find(".comment").toggle(1000);
			}
		});


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
			$(this).parents(".gameStory").next().first().find(".comment").toggle(1000);
		}
	});

	$("#showAll").click(function() {
		$(".gameStory").css("display", "inherit");
		$(".comment").css("display", "inherit");
		$(".yesNo, .continue").css("display", "none");
		$("#showAll").html("start again");
		$("#showAll").click(function() {
			location.reload();
		});
	});
});