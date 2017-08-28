var plusOne = function(digits) {
    if (digits[digits.length - 1] <= 8)
        digits[digits.length - 1]++;
    else {
        digits[digits.length - 1] = 0;
        for (var i = digits.length - 2; digits[i] == 9 && i >= 0; i--)
            digits[i] = 0;
        if (i >= 0)
            digits[i]++;
        else
            digits.unshift(1);
    }
    return digits;
};