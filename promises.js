// Promises

// A way to manage async without passing zillions of callback functions around or nesting to no end.

// I.e. this..

// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{
// 		connection.query(query3, (results3)=>{
// 			connection.query(query4, (results4)=>{
// 			});
// 		});
// 	}};
// });

// 	// connection.query(query1){
// 	// 	//do some stuff
// 	// 	call function I got from earlier and pass it what I just got as a result.
// 	// 	call function I got ealier and pass it this result..
// 	// 	call function I got earlier and pass it...
// 	// }

// 	function successCallback(result){
// 		console.log("success: "+ result);
// 	}
// 	function failureCallback(error){
// 		console.log("failed:"+error);
// 	}

// 	function checkName(name, winning, losing){
// 		if (name == "Rob"){
// 			winning("name is rob.")
// 		}else{
// 			losing("sorru. not rob");
// 		}
// 	}
// 	checkName("rob",successCallback,failureCallback);


	// what is a promise?
	// AJAX will always return a promise
	// it is just a JS constructor that gives you a few methods:
	// -all- will check array and run when everything is resolved.
	// -race(keep an eye on an aray of promises)
	// -reject
	// -resolve
	// -then

// let myFirstPromise = new Promise((resolve,reject)=>{
// 		// resolve and regect are callbacks.
// 		// we will run resolve when wer are doen with our async stuff.
// 		// we will run reject if it failed.
// 		// setTimeout will stand in as an AJAX or sql request
// 		setTimeout(function(){
// 			resolve("success!") //line 54 has to wait until 250 miliseconds so its a pending promises. resolve and reject 
// 		}, 250);
// });
// console.log(myFirstPromise);
// myFirstPromise.then((successMessage)=>{ //.then keep an eye on myfirstPromise for the resolve thing to run. we wont be able to tell if the resolve ran without the then.
// 	console.log(successMessage);//successmessage is whatever you pass onto resolve.
// 	console.log(myFirstPromise);
// })
// console.log(myFirstPromise);



function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed");
		},2000);
	});
}

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed");
		},4000);
	});
}

var promiseOne = one();
var promiseTwo = two();
// console.log(promiseOne)
promiseOne.then((successMsg)=>{
	console.log(successMsg)
});
promiseTwo.then((successMsg)=>{
	console.log(successMsg)
});

// ALL - will wait until EVERY promise in the array has resolved.
// It will have an array of each argument passed to each resolve.

// Race-will execute this code as soon as any promise is done.
var promises=[];
promises.push(promiseOne);
promises.push(promiseTwo);
Promise.all(promises).then((data)=>{
	console.log("all done.");
	console.log(data);
});

// =====race example====
Promise.all(promises).then((data)=>{
	console.log("all done.");
	console.log(data);
});
Promise.race(promises).then((data)=>{
	console.log("all done.");
	console.log(data);
});



