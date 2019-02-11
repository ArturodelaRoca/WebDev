var speakWord2 = "Good bye";

(function (window){
	var goodbyeSpeaker = {};
	goodbyeSpeaker.speak = function (names) {
		console.log(speakWord2 + " " + names); 
	}

	window.goodbyeSpeaker = goodbyeSpeaker;

})(window);
