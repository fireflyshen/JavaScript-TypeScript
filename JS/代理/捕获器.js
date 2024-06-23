let target = {
    id:"target"
}

//捕获器接受三个参数，
// 1. 代理对象
// 2. 被捕获的属性
// 3. 目标对象
let proxy = new Proxy(target,{
    get(p,property,t) {
        console.log(p);
        console.log(property);
        console.log(t);
    }
})

target.id;
proxy.id;



/**
 * 使用代理的主要目的是可以定义捕获器(trap)。
 * 捕获器就是在处理程序对象中定义的“基本操作的 拦截器”。
 * 每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接 或间接在代理对象上调用。
 */

// 例如，可以定义一个 get()捕获器，在 ECMAScript 操作以某种形式调用 get()时触发。下面的例 子定义了一个 get()捕获器:
let target2 = {
    id:"hi"
}


const proxy2 = new Proxy(target2,{
    get(){
        return "hello"
    }
})


console.log(target2.id); // hi
console.log(proxy2.id); // hello


/**
 * 所有捕获器都可以基于自己的参数重建原始操作，但并非所有捕获器行为都像 get()那么简单。
 * 因 此，通过手动写码如法炮制的想法是不现实的。
 * 实际上，开发者并不需要手动重建原始行为，而是可以通过调用全局 Reflect 对象上(封装了原始行为)的同名方法来轻松重建。
 */

// 是用反射API处理get捕获器
let target3 = {
    id:"target"
}

let proxy3 = new Proxy(target,{
    get(){
        // 这里可以直接使用反射API的
        return Reflect.get(...arguments)
    }
})


console.log(proxy3.id)

// 也可以写的更加简单
let target4 = {
    id:"target4"
}


let proxy4 = new Proxy(target4,{
    get:Reflect.get
})


console.log(proxy4.id);

// 如果要给代理对象所有捕获器都配置反射的样板代码，那么可以写的更加简洁
let target5 = {
    id:"target5"
}
const proxy5 = new Proxy(target5,Reflect);
// 但是上面这种写法实际上和传递一个空对象没有区别
const proxy6 = new Proxy(target5,{});