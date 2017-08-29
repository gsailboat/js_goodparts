var reverseWords = function(str) {
    var s = str.split();
    var st = "";
    for (var i = s.length - 1; i > 0; i--) {
        st += s[i];
        if (i > 0)
            st += " ";
    }
    // console.log(st);
    return st;
};

// reverseWords(process.argv2);