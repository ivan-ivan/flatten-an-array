function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

function flatten(array) {
	var res = [];
	for(var i = 0; i < array.length; i++) {
		if(isArray(array[i])) {
			res = res.concat(flatten(array[i]));
		} else {
			res.push(array[i]);
		}
	}

	return res;
}

flatten(['mama', ['mila'], [], [['ramu']]]);