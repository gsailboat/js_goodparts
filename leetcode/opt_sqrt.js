var mySqrt = function(x) {
	if (x == 0)
		return 0;
	let low = 1, high = x;
	while (low < high) {
		let mid = low + ((high - low + 1) >> 1);
		if (mid * mid == x) 
			return mid;
		if (mix * mid < x)
			low = mid;
		else
			high = mid - 1;
	}
	return low;
}