$(document).ready(function() {

	var magic8Ball = {}; 
	magic8Ball.listOfAnwsers = ["yes", "no", "maybe", "probabilly not", "you will find out soon","life has misterious ways"];
	magic8Ball.askTheBall = function (question) {	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	 var randomNum = Math.floor(Math.random() * 	this.listOfAnwsers.length);
	var answer = this.listOfAnwsers[randomNum];
	$("#answer").text(answer);
	};
	
	$("#answer").hide();
	var questionWindow = function () {		
		$("#answer").hide();		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(function () { 
		var question = prompt("ASK A YES/NO QUESTION!");
		$("#8ball").effect("shake");
		setTimeout(function() { magic8Ball.askTheBall(question);}, 1000);
	},500);
	};
	
	$("#questionButton").click(questionWindow);
});