const date = new Date();

console.log(date.getDate());

const proxy = new Proxy(date,{});

// console.log(proxy.getDate()) // Uncaught TypeError TypeError: this is not a Date object.

/**
 * 代理与内置引用类型(比如 Array)的实例通常可以很好地协同，但有些 ECMAScript 内置类型可 能会依赖代理无法控制的机制，结果导致在代理上调用某些方法会出错。
 * 一个典型的例子就是 Date 类型。
 * 根据 ECMAScript 规范，Date 类型方法的执行依赖 this 值上的内部槽位[[NumberDate]]。
 * 代理对象上不存在这个内部槽位，而且这个内部槽位的值也不能通过普通的get()和 set()操作访问到，于是代理拦截后本应转发给目标对象的方法会抛出 TypeError:
 */

let obj = {
    date:new Date()
}

const proxy2 = new Proxy(obj,{});

console.log(proxy2.date.getDate())