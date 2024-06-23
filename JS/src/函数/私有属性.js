// 定义在函数内部的属性都是私有属性
function f() {
    let property = 10;
    let myFunc = function () {
        return 7;
    }
}

// 可以通过闭包的方式获取函数的私有属性
function f2() {
    let property = 10;
    let myFunc = function () {
        return 7;
    };

    return function previlige() {
        console.log(property);
        return myFunc();
    }
}

console.log(f2()());

// 定义特权函数访问内部属性
function F3() {
    let property = 10;
    let myFunc = function () {
        return 7;
    };

    this.previlige = function () {
        console.log(property);
        return myFunc();
    }
}


console.log(new F3().previlige())



