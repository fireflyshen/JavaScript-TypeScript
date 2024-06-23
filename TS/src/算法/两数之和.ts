
// 暴力破解
function twoNumSum(nums:number[],target:number):number[]{
    // 暴力破解
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length-1; j > i; j--) {
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
    return [];
}

console.log(twoNumSum([2, 3, 4, 1, 5, 6, 3], 7));
console.log(twoNumSum([1,2,3,4,5,6,7,8,9,10], 9));

/**
 * 是用hash散列
 */

function twoNumSum2(nums:number[],target:number):number[]{

    const map:Map<number,number> = new Map();
    for (let i:number = 0; i < nums.length; i++) {
        let c:number = target - nums[i];
        if (!map.get(c)) {
            map.set(nums[i],i);
        } else {
            return [map.get(c) as number,i];
        }
    }
    return [];
}