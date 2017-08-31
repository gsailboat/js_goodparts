var isPowerOfTwo = function(n) {
    var two = n;
    if (two <= 0)
        return false;
    while (two % 2 == 0)
        two /=2;
    if (two == 1)
        return true;
    return false;
};