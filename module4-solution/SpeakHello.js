var speakWord = "Hello";

(function (window){
	var helloSpeaker = {};
	helloSpeaker.speak = function (names) {
		console.log(speakWord + " " + names); 
	}

	window.helloSpeaker = helloSpeaker;

})(window);

