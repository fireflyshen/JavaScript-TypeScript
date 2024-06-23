// 有时候可能需要定义这样一个类，它可供其他类继承，但本身不会被实例化。
// 虽然 ECMAScript没有专门支持这种类的语法 ，但通过 new.target 也很容易实现。
// new.target 保存通过 new 关键字调用的类或函数。通过在实例化时检测 new.target 是不是抽象基类，可以阻止对抽象基类的实例化:


class Vehicle {
    constructor() {
        console.log(new.target);
        if (new.target === Vehicle) {
            throw new Error("this is abstruct class")
        }
    }
}

class Bus extends Vehicle {}

// new Vehicle(); // Uncaught Error Error: this is abstruct class

class Vehicle1{
    constructor() {
        console.log(new.target);
        if (new.target === Vehicle) {
            throw new Error("this is abstruct class")
        }


        if(!this.foo){
            if (!(this.foo instanceof Function)) {
                throw new Error('foo must be a function');
            }

            throw new Error('Inheriting class must define foo()');
        }
    }
}


class Bus1 extends Vehicle1 {
    constructor(foo){
        super();
        this.foo = foo;
    }

    foo(){};
}

// new Bus1("hello"); // foo must be a function

var b1 = new Bus1(function(){console.log("hello");});
b1.foo();

