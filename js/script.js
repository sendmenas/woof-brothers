$(document).ready(function() {

	$("#derekChar").dialog({ autoOpen: false });
	$("#delChar").dialog({ autoOpen: false });
	$("#infoChar").dialog({ autoOpen: false });

	/* Character selection */
	$(".brother").click(function() {

		var brotherSelect = $(this).attr("id");

		var firstSelection = confirm("Are you sure you want to choose " + brotherSelect + "?");
		if (firstSelection == true) {
	
			if (brotherSelect === "Derek") {
				$("#derekChar").dialog("open");
				$("#derekChar").dialog({width: 625}, {height: 750});
				$(".closeButton").click(function() {
					$("#derekChar").dialog("close");
					$(this).parents("body").children(".gameStory").first().toggle();
					$(this).parents("body").children(".gameStory").first().find(".comment").toggle(1000);
					$("html, body").animate({scrollTop: $(this).parents("body").children(".gameStory").first().offset().top}, 500);
				});
				$(".thumbnail").removeClass("selected");
				$(this).addClass("selected");
				$(this).parents().next().css("display", "none");
				$(this).parent().removeClass("col-md-3 col-md-offset-3").addClass("col-md-4 col-md-offset-4");
			}
			if (brotherSelect === "Del") {
				$("#delChar").dialog("open");
				$("#delChar").dialog({width: 625}, {height: 750});
				$(".closeButton").click(function() {
					$("#delChar").dialog("close");
					$(this).parents("body").children(".gameStory").first().toggle();
					$(this).parents("body").children(".gameStory").first().find(".comment").toggle(1000);
					$("html, body").animate({scrollTop: $(this).parents("body").children(".gameStory").first().offset().top}, 500);
				});
				$(".thumbnail").removeClass("selected");
				$(this).addClass("selected");
				$(this).parents().prev().css("display", "none");
				$(this).parent().removeClass("col-md-3 col-md-offset-3").addClass("col-md-4 col-md-offset-4");
			}
			$(".brother").off();
		}
		else {
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
				$(this).parents(".gameStory").nextAll(".del").first().find(".comment").toggle(1000);
			}
		});
	});

	/* Characters info */
	$(".charInfo").click(function() {
		var char = $(this).next().html();
		console.log(char);
		$("#infoChar").dialog("open");
		$("#infoChar").dialog({width: 625}, {height: 750});
		switch(char) {
			case ("Del:"):
				$(".dossier").append("<button class='closeButton'>Close</button><img src='img/dossier_del.png'>");
				break;
			case ("Derek:"):
				$(".dossier").append("<button class='closeButton'>Close</button><img src='img/dossier_derek.png'>");
				break;
		}
		$(".closeButton").click(function() {
			$("#infoChar").dialog("close");
		});
	});

	/* Action buttons */

		/* Yes, No buttons*/
	$(".yesNo").click(function() {
		var banditSelect = $(this).html();

		if (banditSelect === "Yes") {
			alert("Please reconsider");
		}
		if (banditSelect === "No") {
			$(this).parents().next().toggle();
			$("html, body").animate({scrollTop: $(this).parents().next().offset().top}, 500);
			$(this).parents(".gameStory").next().first().find(".comment").toggle(1000);
		}
	});

		/* "Show All", "Start again" button*/
	$("#showAll").click(function() {
		$(".gameStory").css("display", "inherit");
		$(".comment").css("display", "inherit");
		$(".yesNo, .continue").css("display", "none");
		$("html, body").animate({scrollTop: $(this).parents("body").children(".gameStory").first().offset().top}, 500);
		$("#showAll").html("start again");
		$("#showAll").click(function() {
			location.reload();
		});
	});
});