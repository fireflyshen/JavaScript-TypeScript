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

// 全局对象
// 如果要使用同一个Symbol可以使用全局对象参照表
const s5 = Symbol.for("foo");
const s6 = Symbol.for('foo');
console.log(s5 === s6); // true  

// 也可以通过keyFor拿到一个Symbol的描述
const des = Symbol.keyFor(s5)
console.log(des); // foo

// 符号是可以作为属性的
let s7 = Symbol('bar');
let obj = {
    [s7] : "hello world",
}


console.log(obj);
// 访问
console.log(obj[s7]);
let s8 = Symbol('baz')
Object.defineProperty(obj,s8,{
    value:"hi world",
    writable:true,
    enumerable:true,
    configurable:true
})


console.log(obj);

var ownPropertyNames = Object.getOwnPropertyNames(obj);
console.log(ownPropertyNames);
var ownPropertySymbols = Object.getOwnPropertySymbols(obj);
console.log(ownPropertySymbols);


// 如果没有显式生命Symbol那么实际上是没有办法直接拿到的如下
Object.defineProperty(obj,Symbol("quz"),{
    value:"hello",
    writable:true,
    enumerable:true
})

let s9 = Object.getOwnPropertySymbols(obj).find(e => e.toString().match(/quz/));
console.log(s9);