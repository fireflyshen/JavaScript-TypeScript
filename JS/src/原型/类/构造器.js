// 使用 new 操作符实例化 Person 的操作等于使用 new 调用其构造函数。唯一可感知的不同之处就是，
// JavaScript 解释器知道使用 new 和类意味着应该使用 constructor 函数进行实例化。
// 使用 new 调用类的构造函数会执行如下操作。
// (1) 在内存中创建一个新对象。
// (2) 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性。 
// (3) 构造函数内部的 this 被赋值为这个新对象(即 this 指向新对象)。
// (4) 执行构造函数内部的代码(给新对象添加属性)。
// (5) 如果构造函数返回非空对象，则返回该对象;否则，返回刚创建的新对象。 来看下面的例子:


class Animal{};
class Person {
    constructor(){
        console.log("hello world!");
    }
}

class Fruit {
    constructor(name){
        this.name = name;
    }
}


new Animal();

new Person();

console.log(new Fruit("apple").name)



// 默认情况下，类构造函数会在执行之后返回 this 对象。构造函数返回的对象会被用作实例化的对象，如果没有什么引用新创建的 this 对象，那么这个对象会被销毁。
// 不过，如果返回的不是 this 对象，而是其他对象，那么这个对象不会通过 instanceof 操作符检测出跟类有关联，因为这个对象的原型指针并没有被修改。

class Person2 {
    constructor(change){
        this.foo = "foo";
        if (change) return {bar:"bar"};
    }
}


let p1 = new Person2(),p2 = new Person2(true);

console.log(p1 instanceof Person2,"@"); // true;
console.log(p2 instanceof Person2,"@"); // false;



// 类构造函数与构造函数的主要区别是，调用类构造函数必须使用 new 操作符。
// 而普通构造函数如果 不使用 new 调用，那么就会以全局的 this(通常是 window)作为内部对象。调用类构造函数时如果 忘了使用 new 则会抛出错误
function Person3(){

}

Person3() // 普通构造函数不使用new调用的话那么就是成为全局对象身上一个一个属性

class Animal2 {}

// Animal2() // 抛出异常 Uncaught TypeError TypeError: Class constructor Animal2 cannot be invoked without 'new'

