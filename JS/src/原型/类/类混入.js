// 把不同类的行为集中到一个类是一种常见的 JavaScript 模式。虽然 ES6 没有显式支持多类继承，但 通过现有特性可以轻松地模拟这种行为

class Vehicle { }

let Foo = (SuperClass) => class extends SuperClass {
    foo() {
        console.log("foo class");
    }
}

let Bar = (SuperClass) => class extends SuperClass {
    bar() {
        console.log("bar class");
    }
}

let Baz = (SuperClass) => class extends SuperClass {
    baz() {
        console.log("baz class");
    }
}


class Bus extends Foo(Bar(Baz(Vehicle))) {}

const bus = new Bus()
bus.bar();
bus.baz();
bus.foo();


function mix(BaseClass,...Mixins){
    return Mixins.reduce((accumulator,current) => current(accumulator), BaseClass)
}

class Bus2 extends mix(Vehicle,Foo,Bar,Baz){

}

new Bus2().foo()