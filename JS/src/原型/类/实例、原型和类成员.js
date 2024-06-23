// 为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法。

class Person {
    constructor(name){
        this.name = name;
    }

    locate() {
        console.log("zhengzhou");
    }
}

var jack = new Person("jack")
var tom = new Person("tom")
console.log(jack.locate(),tom.locate());

// 可以把方法定义在类构造函数中或者类块中，但不能在类块中给原型添加原始值或对象作为成员数据:
class Person2 {
    // name:"hello" // 报错 Uncaught SyntaxError: Unexpected token
}

// 类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键
const Symbolkey = Symbol("key");
class Person3 {
    "locate"(){
        console.log("string locate");
    }

    [Symbolkey](){
        console.log("symbol locate");
    }

    ["tom"+"locate"](){
        console.log("tom locate");
    }

}

var p3 = new Person3();

p3.locate()
p3[Symbolkey]();
p3.tomlocate();

// 类定义也支持获取和设置访问器。语法与行为跟普通对象一样
class Person4 {
    set name(newName){
        this.name_ = newName;
    }

    get name(){
        return this.name_;
    }

    set age(newAge){
        this.age_ = newAge;
    }

    get age(){
        return this.age_;
    }
}

var p4 = new Person4();
p4.name = "hello";
p4.age = 11;
console.log(p4.name,p4.age);


// 可以在类上定义静态方法。这些方法通常用于执行不特定于实例的操作，也不要求存在类的实例
// 与原型成员类似，静态成员每个类上只能有一个。
// 静态类成员在类定义中使用 static 关键字作为前缀。在静态成员中，this 引用类自身。其他所
// 有约定跟原型成员一样:

class Person5 {
    constructor(){
        this.locate = () => console.log(this,"this.locate");
    }


    // 定义在类的原型对象上
    locate(){
        console.log(this,"prototype.locate");
    }

    // 定义在类本身上
    static locate(){
        console.dir(this,"class.locate");
    }
}

new Person5().locate();

Person5.prototype.locate();

Person5.locate()



// 静态类方法非常适合作为实例工厂:
class Person6 {
    constructor(age){
        this.age = age;
    }

    static getInstance(){
        return new Person6((Math.random() * 20) + 1)
    }
}


// 虽然类定义并不显式支持在原型或类上添加成员数据，但在类定义外部，可以手动添加:

class Person7 {
    sayName() {
      console.log(`${Person7.greeting} ${this.name}`);
    }
}

Person7.greeting = 'My name is';
// 在原型上定义数据成员 Person.prototype.name = 'Jake';
let p = new Person7();
p.name = "Jake"
p.sayName();  // My name is Jake


// 类定义语法支持在原型和类本身上定义生成器方法:

class Person8 {
    * createGenerate(){
        yield "jack";
        yield "tom";
        yield "J-Dog";
    }

    static * createGenerate(){
        yield "jack";
        yield "tom";
        yield "J-Dog";
    } 
}


const generate = Person8.prototype.createGenerate()
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

const generate2 = Person8.createGenerate()
console.log(generate2.next());
console.log(generate2.next());
console.log(generate2.next());


// 因为支持生成器方法，所以可以通过添加一个默认的迭代器，把类实例变成可迭代对象

class Person9 {
    constructor(hobby){
        this.hobby = hobby;
    }

    * [Symbol.iterator]() {
        yield * this.hobby;
    }
}

const person9 = new Person9(["sing","dance","rap","blackball"]);

for (const item of person9) {
    console.log(item);
}


// 多个属性
class Person10 {
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    * [Symbol.iterator](){
        yield this.name;
        yield this.age;
        yield this.hobby;
    }
}

const person10 = new Person10("cxk","20",["sing","dance","balcedball","rap"]);

for (const item of person10) {
    console.log(item);
}


// 键值对
class Person11 {
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }


    * [Symbol.iterator](){
        for (const item of Object.entries(this)) {
            yield item;
        }
    }
}


const person11 = new Person11("cxk","20",["sing","dance","balcedball","rap"]);

for (const item of person11) {
    console.log(item);
}
 