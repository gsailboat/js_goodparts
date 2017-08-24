var twoSum = function(nums, target) {
	var ret = [];
	for(var i = 0; i < nums.length; i++) {
		for(var j = i + 1; j < nums.length; j++) {
			if (nums[i] + num[j] == target && ret == 0) {
				ret.push(i);
				ret.push(j);
			}
		}
	}
	if (ret == 0)
		ret = undefined;
	return ret;
};