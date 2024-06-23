function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function SuperType(name){
    this.name = name;
}

function SuperType2(name2){
    this.name2 = name2;
}

SuperType.prototype.getPropertyForSuper = function () {
    return this.name;
}

SuperType2.prototype.getPropertyForSuper2 = function() {
    return this.name2;
}

const sub = object(new SuperType("hi"));
// sub.name = "hello3";
console.log(sub.getPropertyForSuper());

const sub2 = object(new SuperType2("hello"));


console.log(sub2.getPropertyForSuper2())

console.log(sub.getPropertyForSuper());

/**
 * 上面就是原型式继承，基本就是object函数内不提供了一个临时的构造函数，每一次调用这个函数需要传递一个对象
 * 这个对象其实就是父类的对象
 * 将临时构造器的原型赋值成父类的对象，这就让子类对象和父类和父类的原型产生了联系，实现了继承
 * 这里需要注意的是：每一次调用函数的时候都是一个新的临时构造器
 */


/**
 * 通过这个模式，ES5提供了一个API，Object.create
 */

let p1 = {
    name:"jack",
    friends:["tom","vector","ben"]
}
const anotherP = Object.create(p1);

console.log(anotherP);
anotherP.friends.push("hello");
console.log(anotherP.friends);

var anotherP2 = Object.create(p1)
console.log(anotherP2.friends);

// 这个Api的第二个参数可以给新对象放入添加新的属性
const anotherP3 = Object.create(p1,{
    age:{
        value:11,
        writable:true,
        enumerable:true
    },
    year:{
        value:111,
        writable:false
    },
    name: {
        value:"wo",
        enumerable:true
    }
})

console.log(anotherP3);

// 通过第二个参数对原型属性进行遮蔽
console.log(anotherP3.name);
