// Symbol.asyncIterator
// 该方法返回对象默认的 AsyncIterator。 由 for-await-of 语句使用”。换句话说，这个符号表示实现异步迭代器 API 的函数。
// for-await-of 循环会利用这个函数执行异步迭代操作。循环时，它们会调用以 Symbol.asyncIterator 为键的函数，并期望这个函数会返回一个实现迭代器 API 的对象。
// 很多时候，返回的对象是实现该 API 的 AsyncGenerator

class Foo {
    async * [Symbol.asyncIterator](){}
}

let f = new Foo();

console.log(f[Symbol.asyncIterator])


class Emmiter {
    constructor(max){
        this.max = max;
        this.index = 0;
    }


    async * [Symbol.asyncIterator](){
        while(this.index < this.max){
            yield new Promise((resolve,reject) => {
                resolve(this.index++);
            })
        }
    }
}

var emmiter = new Emmiter(7)

async function testEmmiter(){
    for await(let a of emmiter){
        console.log(a);
    }
}


testEmmiter()



// 6. Symbol.hasInstance
// 根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例。由 instanceof 操作符使用”。instanceof 操作符可以用来确定一个对象 实例的原型链上是否有原型。instanceof 的典型使用场景如下:
class Foo2 {}
console.log(new Foo2 instanceof Foo2) // true


// 在 ES6 中，instanceof 操作符会使用 Symbol.hasInstance 函数来确定关系。以 Symbol. hasInstance 为键的函数会执行同样的操作，只是操作数对调了一下:
class Bar {}
console.log(Bar[Symbol.hasInstance](new Bar));
// 这个属性定义在 Function 的原型上，因此默认在所有函数和类上都可以调用。由于 instanceof 操作符会在原型链上寻找这个属性定义，就跟在原型链上寻找其他属性一样，因此可以在继承的类上通 过静态方法重新定义这个函数:

class Baz {

}
class Bar2 extends Baz {
   static [Symbol.hasInstance](){
        return false;
    }
}

console.log(new Bar2 instanceof Bar2);  // false


// 7. Symbol.isConcatSpreadable
// 根据 ECMAScript 规范，这个符号作为一个属性表示“一个布尔值，如果是 true，则意味着对象应 该用 Array.prototype.concat()打平其数组元素”。ES6 中的 Array.prototype.concat()方法会 根据接收到的对象类型选择如何将一个类数组对象拼接成数组实例。覆盖 Symbol.isConcat- Spreadable 的值可以修改这个行为。
// 数组对象默认情况下会被打平到已有的数组，false 或假值会导致整个对象被追加到数组末尾。类 数组对象默认情况下会被追加到数组末尾，true 或真值会导致这个类数组对象被打平到数组实例。其 他不是类数组对象的对象在 Symbol.isConcatSpreadable 被设置为 true 的情况下将被忽略

let initial = ['foo'];
let arr = ["bar"];

console.log(initial.concat(arr))

// 设置不打平
arr[Symbol.isConcatSpreadable] = false;

console.log(initial.concat(arr));

// 只适用于数组，其他对象会默认忽略掉
const set = new Set().add("baz").add("qux")
console.log(initial.concat(set))
set[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(set));


// 8. Symbol.iterator
// 根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，该方法返回对象默认的迭代器。 由 for-of 语句使用”。换句话说，这个符号表示实现迭代器 API 的函数。
// for-of 循环这样的语言结构会利用这个函数执行迭代操作。循环时，它们会调用以 Symbol.iterator 为键的函数，并默认这个函数会返回一个实现迭代器 API 的对象。很多时候，返回的对象是实现该 API 的 Generator:

class Foo3 {
    constructor(max){
        this.max = max;
        this.arr = new Array(max).fill("1");
    }


    * [Symbol.iterator](){
        // 委托给数组的迭代器
        yield * this.arr;
    }
}


const foo3 = new Foo3(7);

for (const iterator of foo3) {
    console.log(iterator,"@");
}


class Foo4 {
    constructor(key,key2,key3){
        this.key = key;
        this.key2 = key2;
        this.key3 = key3;
    }

    * [Symbol.iterator](){
        // 委托给别的迭代器
        yield * Object.keys(this);
        yield * Object.values(this);
        yield * Object.entries(this)
    }

}


var foo4 = new Foo4("1","2","3")

for (const item of foo4) {
    console.log(item,"%xs");
}

class Foo5{
    constructor(max){
        this.max = max;
        this.index = 0;
    }

    * [Symbol.iterator](){
        while(this.index < this.max){
            yield this.index;
            this.index++;
        }
    }
}


const foo5 = new Foo5(10);
for (const item of foo5) {
    console.log(item,"***");
}




// 9. Symbol.match
// 根据 ECMAScript 规范，这个符号作为一个属性表示“一个正则表达式方法，该方法用正则表达式 去匹配字符串。由 String.prototype.match()方法使用”。
// String.prototype.match()方法会使 用以 Symbol.match 为键的函数来对正则表达式求值。正则表达式的原型上默认有这个函数的定义， 因此所有正则表达式实例默认是这个 String 方法的有效参数:

const s = "h";
const regex = /^[h].*$/;
console.log(regex.test(s),"####")



// 后面好多，等灯复习吧，现在看也是忘
