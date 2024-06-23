let object = function(o){
    function F(){};
    F.prototype = o;
    return new F();
}


let inheritPrototype = function(superType,subType){
    // 子类原型
    const prototype = object(superType.prototype);
    // constructor
    prototype.constructor = subType;
    // 赋值子类原型
    subType.prototype = prototype;
}


function SuperType(name){
    this.name = name;
    this.color = ["red","blue","green"]
}

SuperType.prototype.sayHi = function(){
    console.log("hi");
}

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}


inheritPrototype(SuperType,SubType);

const subType = new SubType("hello",11);
subType.sayHi()



