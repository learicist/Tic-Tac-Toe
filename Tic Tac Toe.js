$(document).ready(function () {
	var flag = true;
	var count = 0;
	var one = $("#1");
	var two = $("#2");
	var three = $("#3");
	var four = $("#4");
	var five = $("#5");
	var six = $("#6");
	var seven = $("#7");
	var eight = $("#8");
	var nine = $("#9");
	var userHandle, compHandle, xWin = 0, oWin = 0;
	
	$("#chooseSide").animate({bottom: "300px"}, 2000);
	
	$("#chooseX").click(function() {
		$("table").removeClass("hidden");
		$("#chooseSide").hide();
		$("h1").html("Good Luck");
		$("h1").delay(1000).fadeTo(3000, 0.4);
		userHandle = "X";
		compHandle = "O";
		$("body").css({
			"background-image":"url('https://images.unsplash.com/photo-1502886315456-e6c2e728db92?dpr=1&auto=compress,format&fit=crop&w=763&h=&q=80&cs=tinysrgb&crop=')","background-size":"cover"
		});
	});
	
	$("#chooseO").click(function() {
		$("table").removeClass("hidden");
		$("#chooseSide").hide();
		$("h1").html("Good Luck");
		userHandle = "O";
		compHandle = "X";
		$("h1").delay(1000).fadeTo(3000, 0.4);
		$("body").css({
			"background-image":"url('https://images.unsplash.com/photo-1502886315456-e6c2e728db92?dpr=1&auto=compress,format&fit=crop&w=763&h=&q=80&cs=tinysrgb&crop=')","background-size":"cover"
		});
	});	
	
	function winCheck() {
		if (one.html() === "X" && two.html() === "X" && three.html() === "X" || 
			one.html() === "X" && four.html() === "X" && seven.html() === "X" ||
			one.html() === "X" && five.html() === "X" && nine.html() === "X" ||
			two.html() === "X" && five.html() === "X" && eight.html() === "X" ||
			three.html() === "X" && six.html() === "X" && nine.html() === "X" ||
			three.html() === "X" && five.html() === "X" && seven.html() === "X" ||
			seven.html() === "X" && eight.html() === "X" && nine.html() === "X" ||
			four.html() === "X" && five.html() === "X" && six.html() === "X") {
			flag = true;
			xWin += 1;
			count = 0;
			setTimeout(function () {
				$("#table").hide();
				$("h1").html("X wins!").css("opacity", "1.0"); 			
				setTimeout(function	() {
					$("h1").fadeTo(2000, 0.0);
					$("h4").removeClass("hidden");
					$("#xWins").html(xWin);
					$("#oWins").html(oWin);
					for (var i=0; i < 9; i++) {
						$("td").html("");
					}
					$("#table").show();
					//window.location.href = window.location.href;
				}, 2000);
			}, 1000);
		} else if (one.html() === "O" && two.html() === "O" && three.html() === "O" ||
			one.html() === "O" && four.html() === "O" && seven.html() === "O" ||
			one.html() === "O" && five.html() === "O" && nine.html() === "O" ||
			two.html() === "O" && five.html() === "O" && eight.html() === "O" ||
			three.html() === "O" && six.html() === "O" && nine.html() === "O" ||
			three.html() === "O" && five.html() === "O" && seven.html() === "O" ||
			seven.html() === "O" && eight.html() === "O" && nine.html() === "O" ||
			four.html() === "O" && five.html() === "O" && six.html() === "O") {
			flag = true;
			oWin += 1;
			count = 0;
			setTimeout(function () {
				$("#table").hide();
				$("h1").html("O wins!").css("opacity", "1.0");
				setTimeout(function	() {
					$("h1").fadeTo(2000, 0.0);
					$("h4").removeClass("hidden");
					$("#xWins").html(xWin);
					$("#oWins").html(oWin);
					for (var i=0; i < 9; i++) {
						$("td").html("");
					}
					$("#table").show();
					//window.location.href = window.location.href;
				}, 2000);
			}, 1000);
		} else if (count >= 9) {
			flag = true;
			count = 0;
			setTimeout(function () {
				$("#table").hide();
				$("h1").html("Tie Game!").css("opacity", "1.0");
				setTimeout(function	() {
					$("h1").fadeTo(2000, 0.0);
					$("h4").removeClass("hidden");
					$("#xWins").html(xWin);
					$("#oWins").html(oWin);
					for (var i=0; i < 9; i++) {
						$("td").html("");
					}
					$("#table").show();
					//window.location.href = window.location.href;
				}, 2000);
			}, 1000);
		}
	}
  
	function compTurn () {
		count += 1;
		flag = true;
		if (one.html() === compHandle && three.html() === "" && two.html() === compHandle || three.html() === "" && five.html() === compHandle && compHandle === seven.html() || three.html() === "" && six.html() === compHandle && compHandle === nine.html()) {
			setTimeout(function () {
				three.html(compHandle); 
				winCheck();
			}, 1500);
		} else if (seven.html() === "" && one.html() === compHandle && four.html() === compHandle || seven.html() === "" && five.html() === compHandle && compHandle === three.html() || seven.html() === "" && eight.html() === compHandle && compHandle === nine.html()) {
			setTimeout(function () {
				seven.html(compHandle);
				winCheck();
			}, 1500);
		} else if (nine.html() === "" && one.html() === compHandle && compHandle === five.html() || nine.html() === "" && six.html() === compHandle && compHandle === three.html() || nine.html() === "" && eight.html() === compHandle && compHandle === seven.html()) {
			setTimeout(function () { 
				nine.html(compHandle);
				winCheck();
			}, 1500);
		} else if (eight.html() === "" && two.html() === compHandle && compHandle === five.html() || eight.html() === "" && seven.html() === compHandle && compHandle === nine.html()) {
			setTimeout(function () {	
				eight.html(compHandle);
				winCheck();
			}, 1500);
		} else if (six.html() === "" && three.html() === compHandle && compHandle === nine.html() || six.html() === "" && four.html() === compHandle && compHandle === five.html()) {
			setTimeout(function () {
				six.html(compHandle);
				winCheck();
			}, 1500);
		} else if (five.html() === "" && four.html() === compHandle && compHandle === six.html() || five.html() === "" && one.html() === compHandle && compHandle === nine.html() || five.html() === "" && three.html() === compHandle && compHandle === seven.html() || five.html() === "" && two.html() === compHandle && compHandle === eight.html()) {
			setTimeout(function () {
				five.html(compHandle);
				winCheck();
			}, 1500);
		} else if (four.html() === "" && one.html() === compHandle && compHandle === seven.html() || four.html() === "" && five.html() === compHandle && compHandle === six.html()) {
			setTimeout(function () {
				four.html(compHandle);
				winCheck();
			}, 1500);
		} else if (two.html() === "" && one.html() === compHandle && compHandle === three.html() || two.html() === "" && five.html() === compHandle && compHandle === eight.html()) {
			setTimeout(function () {
				two.html(compHandle);
				winCheck();
			}, 1500);
		} else if (one.html() === "" && two.html() === compHandle && compHandle === three.html() || one.html() === "" && five.html() === compHandle && compHandle === nine.html() || one.html() === "" && four.html() === compHandle && compHandle === seven.html()) {
			setTimeout(function () {
				one.html(compHandle);
				winCheck();
			}, 1500);
		//begins originally written code
		} else if (one.html() === userHandle && three.html() === "" && two.html() === userHandle || three.html() === "" && five.html() === userHandle && userHandle === seven.html() || three.html() === "" && six.html() === userHandle && userHandle === nine.html()) {
			setTimeout(function () {
				three.html(compHandle); 
				winCheck();
			}, 1500);
		} else if (seven.html() === "" && one.html() === userHandle && four.html() === userHandle || seven.html() === "" && five.html() === userHandle && userHandle === three.html() || seven.html() === "" && eight.html() === userHandle && userHandle === nine.html()) {
			setTimeout(function () {
				seven.html(compHandle);
				winCheck();
			}, 1500);
		} else if (nine.html() === "" && one.html() === userHandle && userHandle === five.html() || nine.html() === "" && six.html() === userHandle && userHandle === three.html() || nine.html() === "" && eight.html() === userHandle && userHandle === seven.html()) {
			setTimeout(function () { 
				nine.html(compHandle); 
				winCheck();
			}, 1500);
		} else if (eight.html() === "" && two.html() === userHandle && userHandle === five.html() || eight.html() === "" && seven.html() === userHandle && userHandle === nine.html()) {
			setTimeout(function () {	
				eight.html(compHandle); 
				winCheck();
			}, 1500);
		} else if (six.html() === "" && three.html() === userHandle && userHandle === nine.html() || six.html() === "" && four.html() === userHandle && userHandle === five.html()) {
			setTimeout(function () {
				six.html(compHandle);
				winCheck();
			}, 1500);
		} else if (five.html() === "" && four.html() === userHandle && userHandle === six.html() || five.html() === "" && one.html() === userHandle && userHandle === nine.html() || five.html() === "" && three.html() === userHandle && userHandle === seven.html() || five.html() === "" && two.html() === userHandle && userHandle === eight.html()) {
			setTimeout(function () {
				five.html(compHandle); 	
				winCheck();
			}, 1500);
		} else if (four.html() === "" && one.html() === userHandle && userHandle === seven.html() || four.html() === "" && five.html() === userHandle && userHandle === six.html()) {
			setTimeout(function () {
				four.html(compHandle);
				winCheck();
			}, 1500);
		} else if (two.html() === "" && one.html() === userHandle && userHandle === three.html() || two.html() === "" && five.html() === userHandle && userHandle === eight.html()) {
			setTimeout(function () {
				two.html(compHandle);	
				winCheck();
			}, 1500);
		} else if (one.html() === "" && two.html() === userHandle && userHandle === three.html() || one.html() === "" && five.html() === userHandle && userHandle === nine.html() || one.html() === "" && four.html() === userHandle && userHandle === seven.html()) {
			setTimeout(function () {
				one.html(compHandle); 	
				winCheck();
			}, 1500);
		} else {
			setTimeout(function randomizer () {
				var random = Math.floor(Math.random() * 9) + 1;
				var num = random.toString();
				if ($("#" + num).html() === "") {
					$("#" + num).html(compHandle);
					winCheck();
				} else {
					randomizer();
				}
			}, 1100);
		}
	}	
	
	$("td").click(function () {	
		if ($(this).html() === "") {
			flag = false;
			count += 1;	
			$(this).html(userHandle);	
			winCheck();
		}
		if (!flag) {
			compTurn();
		}
	});
});