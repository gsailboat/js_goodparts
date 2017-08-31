var reverseWords = function(str) {
    var s = str.split(" ");
    var st = "";
    for (var i = s.length - 1; i >= 0; i--) {
    	if (s[i] != "") {
            if (st != "" && st[st.length - 1] != " ")
                st += " ";
        	st += s[i];
        	if (i > 0 && s[i - 1] != "")
            	st += " ";
        }
    }
    return st;
};