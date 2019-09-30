$(document).ready(function() {



	$(".stream-nav").on("click", function() {
		// A selector to match all cards in all streams
		var allStreamsCardsSelector = ".card";
		// A selector to match just this stream's cards
		// for this, we use the class with the name of the stream,
		// which is the same as this nav link's id and then the "-card" suffix.
		var thisStreamCardsSelector = "." + this.id + "-card";

		// First remove the highlight from all of the cards
		$(allStreamsCardsSelector).removeClass("highlight_stream");
		// Then apply the highlight to just this stream's cards
		$(thisStreamCardsSelector).addClass("highlight_stream");
	});

	/* 	$("#stream1").on("click", function() {
	 		$(".stream1").removeClass('highlight_stream');
			$(".stream2").removeClass('highlight_stream');
			$(".stream3").removeClass('highlight_stream');
		  	$(".stream1").addClass('highlight_stream');
		});
		$("#stream2_btn").on("click", function() {
			$(".stream1").removeClass('highlight_stream');
			$(".stream2").removeClass('highlight_stream');
			$(".stream3").removeClass('highlight_stream');
		  	$(".stream2").addClass('highlight_stream');
		});
		$("#stream3_btn").on("click", function() {
			$(".stream1").removeClass('highlight_stream');
			$(".stream2").removeClass('highlight_stream');
			$(".stream3").removeClass('highlight_stream');
		  	$(".stream3").addClass('highlight_stream');
		});*/

	$("p").click(function() {
		$("p").addClass("highlight_text");
	});

	$("h2").hover(function() {
		$(this).addClass("h2_background");
	});

	$("#hr_html").hover(function() {
		$("#hr_html").addClass("h2_fontsize");
		$("#hr_mysql").removeClass("h2_fontsize");
		$("#hr_python").removeClass("h2_fontsize");
		$("#hr_jquery").removeClass("h2_fontsize");
		$("#hr_django").removeClass("h2_fontsize");
		$("#hr_css").removeClass("h2_fontsize");
	});

	$("#hr_mysql").hover(function() {
		$("#hr_mysql").addClass("h2_fontsize");
		$("#hr_html").removeClass("h2_fontsize");
		$("#hr_python").removeClass("h2_fontsize");
		$("#hr_jquery").removeClass("h2_fontsize");
		$("#hr_django").removeClass("h2_fontsize");
		$("#hr_css").removeClass("h2_fontsize");
	});
	$("#hr_python").hover(function() {
		$("#hr_python").addClass("h2_fontsize");
		$("#hr_mysql").removeClass("h2_fontsize");
		$("#hr_html").removeClass("h2_fontsize");
		$("#hr_jquery").removeClass("h2_fontsize");
		$("#hr_django").removeClass("h2_fontsize");
		$("#hr_css").removeClass("h2_fontsize");
	});
	$("#hr_jquery").hover(function() {
		$("#hr_jquery").addClass("h2_fontsize");
		$("#hr_mysql").removeClass("h2_fontsize");
		$("#hr_python").removeClass("h2_fontsize");
		$("#hr_html").removeClass("h2_fontsize");
		$("#hr_django").removeClass("h2_fontsize");
		$("#hr_css").removeClass("h2_fontsize");
	});
	$("#hr_django").hover(function() {
		$("#hr_django").addClass("h2_fontsize");
		$("#hr_mysql").removeClass("h2_fontsize");
		$("#hr_python").removeClass("h2_fontsize");
		$("#hr_jquery").removeClass("h2_fontsize");
		$("#hr_html").removeClass("h2_fontsize");
		$("#hr_css").removeClass("h2_fontsize");
	});
	$("#hr_css").hover(function() {
		$("#hr_css").addClass("h2_fontsize");
		$("#hr_mysql").removeClass("h2_fontsize");
		$("#hr_python").removeClass("h2_fontsize");
		$("#hr_jquery").removeClass("h2_fontsize");
		$("#hr_django").removeClass("h2_fontsize");
		$("#hr_html").removeClass("h2_fontsize");
	});

	/*	$(".bottom_button").hover(function() {
			$("body").css("background-color", "black");
		});
		
			$(".bottom_button").mouseleave(function() {
			$("body").css("background-color", "grey");
		});
		
		$("#button_one").mouseenter(function() {
			$("#paragraph_one").fadeTo("slow", 0.5);
		});
		$("#button_one").mouseleave(function() {
			$("#paragraph_one").fadeTo("slow", 1);
		});*/

	$("p").click(function() {
		$(this).children("a").css("background-color", "#FFFF00");
	});

	$("button").click(function() {
		$(this).prev().slideToggle("slow");
	});

	$(".card").click(function() {
		$(this).toggleClass("toggleBackground");
	});

	$("#select").click(function() {
		$(".card:not(.toggleBackground)").hide()
	});
	
	$("#all").click(function() {
		$(".card").show();
	});
	

});
