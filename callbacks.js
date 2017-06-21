// Callbacks- passing a function to someone else to run your code later.
// In JS, functions are just objects, therefore you can pass functions around your code.
// function without a name= anonymous function.

// var clickFunction =function(){
// console.log("click!")};

// $('btn').click(clickfunction);

// ======is the same as ==========

// $('btn').click(function(){
// console.log("click!")
// });

// //we passed code into the click function and it calls our function on line 21 line 8 got sent to line 14 and runs on line 16.- that is a callback.
// =========somewhere in jQuery is this...=======
// var $ = {};
// $.click =function(callbackTORunLater){
// 	//stuff happens
// 	callbackTORunLater();
// }


Consider the following...(interview question)

function x(y){
	return function(z){
		console.log(y+z)
	}

};
x(2)(3)
-passes 2 for y, and 3 gets put in place for the z. 


or 
 var funcTOReturn = function(z){
 	console.log(y+z);
 }
 return funcTOReturn();
 x(2)(3)
 //will return an undefined.
// how can you make this work?

// the only way is if x RETURNS  a function.
// that function will take a parameter
// Higher Order function- a function that gets passed around.



function print(thingToPrint){
	console.log(thingToPrint);
}

The print function doesnt need to be passed around. Because we have access to it locally. Think Black Jack. Deal was a utility function, we called it when we needed it. 

function b(number){
	let localNum = number * number;
	//call the print function above
	print(localNum);
}


function c(theString){
	let localString = theString + "is what was passed";
}
b(2);
c("test")

could also make print a prototype of a constructor.
BUT...what if we didnt have access to the code that needed to run our code?(i.e) what if we didnt have access to our

var a = function(theVar){
	console.log(theVar)
}

var b = function(number, callback){
	let localNum = number * number;
	callback(localNum);
}
b(3,function(number){console.log(number)})
b(3,a)
callback needs to be a function.
}





========someonewhere inside jquery======
var $ ={};
$.getJSON = function ( urlToRequest, callbackToRunLater){
	//make an xmlhttpobject request to url sent
	//do some stuff
	//its back, chech the status decodeURI
	//do some more stuff
	//all done did you want me to something now?
	//YES!  run callbacktorunlater. ok.
	//callbacktorunlater(whatAJAXgotback)
}