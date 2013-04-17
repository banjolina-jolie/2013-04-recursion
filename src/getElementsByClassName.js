// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
	var answer = [];
	function checkIt(element) {
		if (!element) {
			return;
		} else if (element.classList && element.classList.contains(className)) {
			answer.push(element);
		}
		if (element.childNodes) {
			var andTheNodes = element.childNodes
			for (var i in andTheNodes) {
				checkIt(andTheNodes[i])
			}
		}
	}
	checkIt(document.body)
	return answer;
};

getElementsByClassName();