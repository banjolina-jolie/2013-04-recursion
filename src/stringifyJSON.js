// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
	if (obj === null) {
		return "null";
	} else if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
		return obj.toString();
	} else if (typeof(obj) === 'string') {
		return '"' + obj + '"';
	} else {
		if (Array.isArray(obj)) {
			var stringedArray = '[';
			for (var i = 0; i < obj.length; i++) {
				if (i > 0) {
					stringedArray += ',';
				}
				stringedArray += stringifyJSON(obj[i]);
			}
			return stringedArray += ']';
		} else {
			if (Object.keys(obj).length === 0) {
				return "{}";
			} else {
				var stringedObject = '';
				for (var i in obj) {
					if (typeof(obj[i]) != 'function' && i != 'undefined') {
						stringedObject += '' + stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
						stringedObject += ",";
					}
				}
				stringedObject = "{" + stringedObject + "}";
				return stringedObject.replace(",}", "}");
			}
		}
	}
};