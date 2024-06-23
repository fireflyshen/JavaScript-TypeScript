// 暴力破解
function twoNumSum(nums, target) {
    // 暴力破解
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j > i; j--) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
    return [];
}
console.log(twoNumSum([2, 3, 4, 1, 5, 6, 3], 7));
console.log(twoNumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
/**
 * 是用hash散列
 */
function twoNumSum2(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var c = target - nums[i];
        if (!map.get(c)) {
            map.set(nums[i], i);
        }
        else {
            return [map.get(c), i];
        }
    }
    return [];
}
