var countdown = function(start, includeZero) {
	if ( ! start instanceof Number || start === NaN) {
		throw new TypeError('start param needs to be a positive integer, ' + (typeof start) + ' given');
	} else if (start < 0) {
		throw new TypeError('start param needs to be a positive integer, negative given');
	}
	includeZero = includeZero !== undefined ? includeZero : true;
	var lastNum = includeZero ? 0 : 1;
	var result = [];
	for (var i = start; i >= lastNum; i--) {
		result.push(i);
	}
	return result;
};

module.exports = countdown;