
/*
* 元组
* 元组，可以理解成元素个数有限，元素类型确定的数组，类似Java中的枚举类
* */
namespace tuple {
    // 创建元组，前面中括号指定类型，后面指定值
    const s : [string,string,number] = ['a','b',1];

    // ？表示可选，可以不给值
    let a :  [string,number?] = ["1"];

    // ...扩展运算符，表示这个类型的元素个数不确定，js中的扩展运算符可以把这个数组摊开成一个序列
    let b : [string,...boolean[],number] = ["123",true,false,true,1];

    let c : [...any[]] = [1,2,3,4,5,6,"12",[true,false],Symbol("foo")];

    let d : [red:number,blue:number,green:number] = [255,255,255];


    let e = typeof d;
    let f = e[0];



    // 只读元组
    let g : readonly [string,number];
    let h : Readonly<[string,number]>;


    let i : [string,number];

    let j : Readonly<[string,number]>;


    j = i;


    function distanceFromOrigin([x,y]:[number,number]){
        return Math.sqrt(x**2 + y**2);
    }

    const k = [1,2] as const;
    const o = [1,2];
    // distanceFromOrigin(k);

    const arr:[number,number] = [1,2];
    const arr2 = [1,2];

    const arr3 = [1,2] as const;

    function add(x:number,y:number) : number {
        return x + y;
    }


    add(...arr);
    // 报错
    // add(...arr2);
    
   var sum = add(...arr3);
   console.log(sum);
   
}