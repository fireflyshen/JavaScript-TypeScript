// arguments 对象其实还有一个 callee 属性，是一个指向 arguments 对象所在函数的 指针。来看下面这个经典的阶乘函数:

function factorial(num) {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num-1);
}


console.log(factorial(3));


// 这个重写之后的 factorial()函数已经用 arguments.callee 代替了之前硬编码的 factorial。 12 这意味着无论函数叫什么名称，都可以引用正确的函数。考虑下面的情况:
function factorial1(num){
    if(num <= 1){
        return 1;
    }else {
        return num * arguments.callee(num - 1);
    }
}


console.log(factorial1(3))


