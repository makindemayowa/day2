// Write a function *reverseString*  that takes in a string argument and returns the reverse of the string provided. 
// If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.
module.exports = { 
	reverseString :function (str){
		var reverse = "";
		if ( str === ""){
	     	return null;
	  	}
		for (var i = str.length - 1; i >=0; i--) {
			reverse += str[i];
			if (reverse === str){
				return true;
			}
	  
		}
		return reverse;
	}
}