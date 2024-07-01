function removeElement(nums, val) {
    var fixNext = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[fixNext] = nums[i];
            fixNext++;
        }
    }
    return fixNext;
}
;
function removeElement2(nums, val) {
    var map = new Map();
    nums.forEach(function (value, index) {
        if (value != val) {
            map.set(index, value);
        }
    });
    var count = (nums.length - map.size);
    var numbers = map.values();
    var numbers1 = Array.from(numbers);
    nums = numbers1;
    console.log(nums)
    return count;
}
removeElement2([3,2,2,3],3)