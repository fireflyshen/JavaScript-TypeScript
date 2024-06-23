function Father(name,age){
    this.name = name;
    this.age = age;
}

function Son(name,age){
    Father.call(this,name,age)
}

Father.prototype.sayHi = function(){
    console.log("super hi");
}

// Son.prototype = new Father;

// console.log(new Son("son","son age").age);


function object(origin){
    function F(){};
    F.prototype = origin;
    return new F();
}

// var sub = object(new Father);

function inheritPrototype(Super,Sub){
    var obj = object(Super.prototype);
    obj.consturctor = Sub;
    Sub.prototype = obj;
}

inheritPrototype(Father,Son);

new Son().sayHi()





