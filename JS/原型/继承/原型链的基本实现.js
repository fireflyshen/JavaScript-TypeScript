function SuperType(){
    this.superproperty = "super hello";
};

function SubType(){
    this.subproperty = "sub hello"
};

SubType.prototype = new SuperType();

Object.defineProperty(SubType.prototype,"constructor",{
    enumerable:false,
    value:SubType
})

SubType.prototype.getPropertyForSub = function () {
    return this.subproperty;    
}

SuperType.prototype.getPropertyForSuper = function () {
    return this.superproperty;    
}


console.log(new SubType().getPropertyForSuper()) // super hello