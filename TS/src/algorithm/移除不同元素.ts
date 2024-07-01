function removeElement(nums: number[], val: number): number {
    let fixNext:number = 0;

    for (let i:number = 0; i < nums.length; i++) {
        if (nums[i] != val){
            nums[fixNext] = nums[i];
            fixNext++
        }
    }

    return fixNext;
};

function removeElement2(nums: number[], val: number): number {
    const map:Map<number,number> = new Map();
    nums.forEach((value,index) => {
        if (value != val){
            map.set(index,value);
        }
    })
    var count : number = (nums.length - map.size)
    var numbers = map.values();
    var numbers1:number[] = Array.from(numbers);
    console.log(numbers1)
    nums = numbers1;
    return count;
}