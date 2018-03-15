
/* Expected time - 2-3/h
 * Needed time - 3/h
 */

var array = [];
var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

function random_character() {  
	var letterCombo = "";
	for (let i = 0; i < 3; i++) {    
	letterCombo += chars.substr(Math.floor(Math.random() * 28), 1);
	}
	return letterCombo;	
}

function randIntWithZero() {	
	var numberCombo = "";
	for (let i = 0; i < 3; i++) {     
	numberCombo += Math.floor((Math.random()*10));		
	}
	return numberCombo;
}
function final() {
	for (let i = 0; i < 1000000; i++) {
		var finalStr = randIntWithZero()+"-"+random_character()+"-"+randIntWithZero();
		if (array.indexOf(finalStr) === -1) {
			array.push(finalStr)
		} else {
			i--
		}
	}
	return array;
}