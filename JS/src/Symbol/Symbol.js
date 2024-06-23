// Symbol本身是一种原始类型，因此使用typeof就是symbol
let s = Symbol();
console.log(typeof s);

// 调用 Symbol()函数时，也可以传入一个字符串参数作为对符号的描述(description)，将来可以通 过这个字符串来调试代码。
// 但是，这个字符串参数与符号定义或标识完全无关:

let s1 = Symbol("foo");
let s2 = Symbol("foo");

console.log(s1 == s2); // false 符号的描述相同不能说明两个Symbol相同

// 符号没有字面量语法，这也是它们发挥作用的关键。
// 按照规范，你只要创建 Symbol()实例并将其用作对象的新属性，就可以保证它不会覆盖已有的对象属性，无论是符号属性还是字符串属性。
// 这个特性非常像Java的枚举，有点类似于使用对象去描述一种字面量
let s3 = Symbol();
console.log(s3); // Symbol()

// Symbol是不能与new关键字一起使用的，也就是说Symbol是没有包装对象的，如果要使用Symbol的包装对象需要使用Object构造器，但是这样做没有意义
let s4 = Symbol();
var s4ForObj = new Object(s4)
console.log(typeof s4ForObj); // object