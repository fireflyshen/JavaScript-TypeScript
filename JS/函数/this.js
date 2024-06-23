const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

globalThis.color = "red";
let obj = {
    color: "blue"
}

let sayColor = () => {
    console.log(this.color);
}
obj.sayColor = sayColor;

obj.sayColor()


function King() {
    this.royaltyName = 'Henry';
    // this 引用 King 的实例
    setTimeout(() => console.log(this.royaltyName), 1000);
}


function Queen() {
    this.royaltyName = 'Elizabeth';
    // this 引用 window 对象
    setTimeout(function () { console.log(this.royaltyName); }, 1000);
} 
new King();  // Henry
new Queen(); // undefined

// King 构造函数
// 当你创建 King 的新实例时（new King()），this 指向这个新的实例。
// this.royaltyName = 'Henry'; 将 royaltyName 属性设置为 'Henry'。
// setTimeout 中使用的是箭头函数。箭头函数不会创建自己的 this，它会继承 King 构造函数中的 this。因此，这里的 this 仍然指向 King 的实例。
// 当 setTimeout 触发时，箭头函数中的 this.royaltyName 仍然是 'Henry'，所以输出 Henry。
// Queen 构造函数
// 当你创建 Queen 的新实例时（new Queen()），this 指向这个新的实例。
// this.royaltyName = 'Elizabeth'; 将 royaltyName 属性设置为 'Elizabeth'。
// setTimeout 中使用的是普通函数。普通函数在调用时的 this 是由调用方式决定的。
// setTimeout 的回调函数在执行时，实际上是由 setTimeout 调用的。在这种情况下，普通函数中的 this 默认指向全局对象（在浏览器中是 window 对象）。
// 因此，this.royaltyName 实际上是 window.royaltyName，但是全局对象中没有 royaltyName 属性，所以输出 undefined。

// 函数名只是保存指针的变量。因此全局定义的sayColor()函数和o.sayColor() 是同一个函数，只不过执行的上下文不同


/**
 * caller 获取调用当前函数的函数
 */

function outer(){
    inner()
}

function inner(){
    console.log(inner.caller);
}

outer()

// new.target

// 检测函数是否使用 new 关键字调用的 new.target 属性。如果函数是正常调用则new.target的值是undefined;如果是使用new关键字调用的，则new.target将引用被调用的 构造函数

function King2(){
    if (new.target === undefined) {
        throw 'King must be instantiated using "new"';
    }

    console.log('King instantiated using "new"');
}

// King2()

new King2();




rl.question('按下回车键退出程序...\n', () => {
    console.log("程序退出");
    rl.close();
});

