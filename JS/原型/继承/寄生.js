function object(origin){
    function F(){};
    F.prototype = origin;
    return new F();
}

// 寄生继承
function createAnother(o){
    let clone = object(o);
    let sayHi = function(){
        console.log("hi");
    };
    clone.sayHi = sayHi;
    return clone;
}

/**
 * 上面就是一个寄生继承的一个简单实现
 * 首先提供一个原始对象,origin，通过原型继承拿到了一个拓展的对象，这个对象继承了原是对象的所有属性和函数
 * 之后在这个拓展对象拓展自己的函数，过程非常类似于寄生虫寄生宿主，拓展自己的功能，所以叫做寄生继承
 */

const p = {
    name:"tom"
}

var another = createAnother(p)

another.sayHi();
