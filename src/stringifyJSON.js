// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// var stringifyJSON = function (obj) {
// 	var answer;
// 	if(obj === null) {
// 		answer = 'null';
// 	} else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
// 		answer = obj.toString();
// 	} else if (typeof(obj) === 'string') {
// 		answer = '"' + obj + '"';
// 	} else {
// 		if(Array.isArray(obj)) {
// 			var stringedArray = '[';
// 			for (var i = 0; i < obj.length; i++){
//   				if (i > 0){
//   					stringedArray += ',';
//   				}
// 				stringedArray += stringifyJSON(obj[i]);
// 			};
// 			stringedArray += ']';
// 			answer = stringedArray;
// 		} else {
// 			if(Object.keys(obj).length === 0) {
// 				answer = "{}";
// 			} else {
// 				var stringedObject = [];
// 			 	for (var key in obj) {
// 			 		if(typeof obj[key] != 'function' && key != "undefined")
// 			 		stringedObject.push('"' + key + '":' + stringifyJSON(obj[key]));
// 			 	}
// 			 	stringedObject = stringedObject.join();
// 			 	answer = '{' + stringedObject + '}';
// 			}
// 		}
// 	}
// 	return answer;
// };


var stringifyJSON = function (obj) {
	var answer;
	if(obj === null) {
		answer = 'null';
	} else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
		answer = obj.toString();
	} else if (typeof(obj) === 'string') {
		answer = '"' + obj + '"';
	} else {
		if(Array.isArray(obj)) {
			var stringedArray = '[';
			for (var i = 0; i < obj.length; i++){
  				if (i > 0){
  					stringedArray += ',';
  				}
				stringedArray += stringifyJSON(obj[i]);
			};
			stringedArray += ']';
			answer = stringedArray;
		} else {
			if(Object.keys(obj).length === 0) {
				answer = "{}";
			} else {
				var stringedObject = [];
			 	for (var key in obj) {
			 		console.log(typeof(key));
			 		if(typeof obj[key] != 'function' && key != "undefined")
			 		stringedObject.push('' + stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
			 	}
			 	stringedObject = stringedObject.join();
			 	answer = '{' + stringedObject + '}';
			}
		}
	}
	return answer;
};



