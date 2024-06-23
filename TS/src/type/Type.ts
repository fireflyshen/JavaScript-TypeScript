let x:any = "123";

let y:number = 123;

// 类型安全问题。。。
y = x;


let x1 : unknown = '123';
let y1 : number = 123;

// y1 = x1; unkown 不允许赋值

let x2:unknown = { foo : "123"};
// x2.foo; 不允许，unknow不允许访问任何属性和函数

// 类型缩小
// 这里的类型缩小，锁的还不够小，TS还是无法确定类型，所以这里还是会报错，可以利用类型断言，后面说
// if(typeof x2 === "object"){let a:number = x2.foo}






