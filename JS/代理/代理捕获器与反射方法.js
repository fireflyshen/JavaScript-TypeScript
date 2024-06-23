// get()捕获器会在获取属性值的操作中被调用。对应的反射 API 方法为 Reflect.get()

let obj = {

}

const proxy = new Proxy(obj, {
    get() {
        console.log("get");
        return Reflect.get(...arguments)
    }
})

proxy.foo;

/**
 * 1. 返回值 返回值无限制。
 * 2. 拦截的操作
 * proxy.property
 * proxy[property]
 * Object.create(proxy)[property]
 * Reflect.get(proxy, property, receiver)
 * 3. 捕获器处理程序参数
 * target:目标对象。
 * property:引用的目标对象上的字符串键属性。
 * receiver:代理对象或继承代理对象的对象。
 * 如果 target.property 不可写且不可配置，则处理程序返回的值必须与 target.property 匹配。
 * 如果 target.property 不可配置且[[Get]]特性为 undefined，处理程序的返回值也必须是 undefined。
 */

const myTarget = {
    id: "hello"
}


const myProxy = new Proxy(myTarget, {
    set(proxy, property, target) {
        console.log("set");
        return Reflect.set(...arguments)
    }
})


myProxy.id = "hi"

/**
 * set()捕获器会在设置属性值的操作中被调用。对应的反射 API 方法为 Reflect.set()。
 * 1. 返回值
 * 返回 true 表示成功;返回 false 表示失败，严格模式下会抛出 TypeError。
 * 2. 拦截的操作
 * proxy.property = value
 * proxy[property] = value
 * Object.create(proxy)[property] = value
 * Reflect.set(proxy, property, value, receiver)
 * 3. 捕获器处理程序参数
 * target:目标对象。
 * property:引用的目标对象上的字符串键属性。  value:要赋给属性的值。
 * receiver:接收最初赋值的对象。
 * 4. 捕获器不变式
 * 如果 target.property 不可写且不可配置，则不能修改目标属性的值。
 * 如果 target.property 不可配置且[[Set]]特性为 undefined，则不能修改目标属性的值。 在严格模式下，处理程序中返回 false 会抛出 TypeError。
 */

const myTarget2 = {};
const myProxy2 = new Proxy(myTarget, {
    has(target, property) {
        console.log('has()');
        return Reflect.has(...arguments)
    }
});


"foo" in myProxy2

/**
 * 1. 返回值 has()必须返回布尔值，表示属性是否存在。返回非布尔值会被转型为布尔值。
 * 2. 拦截的操作
 * property in proxy
 * property in Object.create(proxy)  with(proxy) {(property);}
 * Reflect.has(proxy, property)
 * 3. 捕获器处理程序参数
 *  target:目标对象。
 * property:引用的目标对象上的字符串键属性。
 * 4. 捕获器不变式
 *  如果 target.property 存在且不可配置，则处理程序必须返回 true。
 *  如果 target.property 存在且目标对象不可扩展，则处理程序必须返回 true。
 */

