// Finders Keepers - higher order functions
// Write a function that accepts two parameters (you may add a third to differentiate type). The first is an array, and the second is a function. The function should look through the array for the first thing that matches the condition of the function passed. If a match is not found, return false.

// Test at least these:

var a =findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
// ====option 1=======(shoud work for all solutions)
function findElement(array){
	for (var i=0; i <= array.length;i++){
		if (callback(array[i])){
			return array[i];
		}
	}
	return false;
}

// function findElement(array, function) {
// 	var num;
// 	for (var a = 0; a < array.length;a++) {
// 		if (function(array[a])) {
// 			num = arr[a];
// 			return num;
// 		}
// 	}
// 	return num;
// }

// findElement([1,3,5,8,9,10], function (num) {
// 	return num % 2 === 0;
// });


var b= findElement([1,3,5,9], function(num){return num % 2 === 0})
// Return false





var c =findElement['Jim','Indian','Marsh','Glitch'], function(str){reutrn str.indexOf('itch') !== -1}
//return glitch