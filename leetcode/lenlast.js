var lengthOfLastWord = function(s) {
	var ns = s;
	while(ns[ns.length - 1] == " ")
		ns = ns.substring(0, ns.length - 1);
	var spl = ns.split(" ");
	return spl[spl.length - 1].length;
}