namespace array {
    // Ts定义数组
    let arr1 : string[] = ["1","2","3"];

    // 使用联合类型定义数字，注意联合类型必须使用()包起来
    let arr2 : (string|number)[] = [1,2,3,"4"];

    // 使用Array类泛型定义数组，泛型填数组的元素类型
    let arr3 : Array<number> = [1, 2, 3];

    // 使用泛型联合类型定义数组
    let arr4 : Array<number|string>;

    // TS中的数组越界并不会报错，同时也可根据索引增加删除元素
    let arr5 : string[] = ["1","2","3"];
    arr5[3] = "4";
    arr5.length = 3;
    let arr6 : number[] = [1,2,3];
    console.log(arr6[4]);

    // 创建只读数组，使用readonley关键字
    const arr7:readonly number[] = [1,2,3,4,5,6,7];

    // 使用泛型创建只读数组
    const arr8 : ReadonlyArray<number> = [1,2,3,4,5,6,7];

    // 同样使用泛型创建制度数组
    const arr9 : Readonly<number[]> = [1,2,3,4,5,6,7];

    // 使用类型断言创建只读数组
    const arr10 = [1,2] as const;

}