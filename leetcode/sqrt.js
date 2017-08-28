var mySqrt = function(x) {
	var z = 0;
	while (x >= 0 && z * z < x)
		z++;
	if (z * z > x)
		z--;
	return z;
}