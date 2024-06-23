// ES6 类支持单继承。使用 extends 关键字，就可以继承任何拥有[[Construct]]和原型的对象。 很大程度上，这意味着不仅可以继承一个类，也可以继承普通的构造函数(保持向后兼容):

class Vehicle {}

class Bus extends Vehicle {}

console.log(new Bus instanceof Vehicle); // true
console.log(new Bus instanceof Bus); // true

function Person() {}

// 继承普通构造器
class Engineer extends Person { }
console.log(new Engineer instanceof Person); // true


// 派生类都会通过原型链访问到类和原型上定义的方法。this 的值会反映调用相应方法的实例或者类:

class Vehicle1 {
    identify(id){
        console.log(id,this);
    }

    static identify(id){
        console.log(id,this);
    }
}
class Bus1 extends Vehicle1 {}

const v1 = new Vehicle1;
const b1 = new Bus1;

v1.identify("vehicle1");
b1.identify("bus");

Vehicle1.identify("v class");
Bus1.identify("b class");


// 继承内置类型
class SuperArray extends Array {
    shuffle(){
        for (let index = this.length-1; index > 0; index--) {
            const i = Math.floor(Math.random() * (index + 1));
            // 换位置
            [this[index],this[i]] = [this[i],this[index]]
        }
    }
}


var superArray = new SuperArray(1,2,3,4,5);
console.log(superArray);
superArray.shuffle();
console.log(superArray);