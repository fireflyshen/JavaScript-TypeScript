// ECMAScript 中没有正式的类这个类型。从各方面来看，ECMAScript 类就是一种特殊函数。声明一 个类之后，通过 typeof 操作符检测类标识符，表明它是一个函数:
class Animal { }
console.log('typeof Animal :>> ', typeof Animal); // typeof Animal :>>  function

// 类标识符有 prototype 属性，而这个原型也有一个 constructor 属性指向类自身:
class Animal2 { };
console.log('Animal.prototype :>> ', Animal.prototype);

// 类是 JavaScript 的一等公民，因此可以像其他对象或函数引用一样把类作为参数传递:
// 类可以像函数一样在任何地方定义，比如在数组中 
let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log(`instance ${this.id_}`);
        }
    }
];

function createInstance(classDefinition, id) {
    return new classDefinition(id);
}

let foo = createInstance(classList[0], 3141);  // instance 3141

// 与立即调用函数表达式相似，类也可以立即实例化:
let p = new class Foo {
    constructor(x){
        this.x = x;
    }
}("bar");

console.log('p :>> ', p);

