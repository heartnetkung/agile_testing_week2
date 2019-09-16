exports.test1 = function(a, b) {
	var ans = parseInt(a) + parseInt(b);
	if (isNaN(ans))
		throw new Error('input not a number');
	return ans + '';
};
