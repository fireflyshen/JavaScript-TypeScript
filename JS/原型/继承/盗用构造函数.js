function SuperType(name){
    this.name = name;
}

function SubType(age,name){
    SuperType.call(this,name)
    this.age = age;
}


SuperType.prototype.getPropertyForSuper = function () {
    console.log(this.name);
} 


SubType.prototype.getPropertyForSub  = function() {
    console.log(this.name,this.age);
}


var sub = new SubType(11,"hello");
sub.getPropertyForSub();
sub.getPropertyForSuper(); // Uncaught TypeError TypeError: sub.getPropertyForSuper is not a function