// Write a function called letterCapitalize which takes a 
// single string parameter and capitalizes the first letter 
// of each word in the string. You can assume that words in 
// the input string will be separated by only one space.

function letterCapitalize(string) {
	var arrayString = string.split(' ');
	for (var i=0; i<arrayString.length; i++) {
		var firstLetter = arrayString[i][0].toUpperCase();
		var upper = firstLetter.toUpperCase();
		var newString = arrayString[i].replace(firstLetter, upper);
	return newString;
	}
}

// Write a function called wordCount which takes a single 
// string parameter and returns the number of words the 
// string contains (ie. "Never eat shredded wheat" would 
// return 4). You can assume that words in the input string 
// will be separated by only one space.

function wordCount(string) {
	var count = 0;
	for (var i=0; i<string.length; i++) {
		count = count + 1;
	}
	return count;	
}

// Write a function called primeTime that takes a single 
// number parameter and returns true if the parameter is a 
// prime number, otherwise false. The range will be between 
// 1 and 216.

//using trial division method
function primeTime(number){
	var limit = Math.sqrt(number);
	console.log(limit);
	for (var i=2; i <= limit; i++) {
		if (number % i === 0) {
			return false; 
		}
	}
	return true;

}