var isPalindrome = function(x) {
	var i = 0;
	var s = x.toString();
	while (i <= s.length / 2) {
		if (s[i] == s[s.length - 1 - i])
			i++;
		else
			return false;
	}
	return true;
}