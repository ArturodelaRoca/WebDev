// ********************************** 
// Asigment 4 Solution by Arturo Roca
// **********************************


(function (window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i < names.length; i++){
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
    		goodbyeSpeaker.speak(names[i]);
  		} 
  		else {
   			helloSpeaker.speak(names[i]);
  		}
	}
	window.goodbyeSpeaker = goodbyeSpeaker;
	window.helloSpeaker = helloSpeaker;


})(window);
