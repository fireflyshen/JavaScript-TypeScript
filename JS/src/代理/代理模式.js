// 是用代理可以是一些模式，如下

// 跟踪属性访问


// 通过捕获 get、set 和 has 等操作，可以知道对象属性什么时候被访问、被查询。把实现相应捕获 器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问过:
const user = {
    name: 'Jake'
};
let proxy = new Proxy(user, {
    get(target, property, receiver) {
        console.log(`Getting ${property}`);
        return Reflect.get(...arguments);
    },
    set(target, property, value, receiver) {
        console.log(`Setting ${property}=${value}`);
        return Reflect.set(...arguments);
    }
});
proxy.name;     // Getting name
proxy.age = 27; // Setting age=27

// 代理的内部实现对外部代码是不可见的，因此要隐藏目标对象上的属性也轻而易举。比如:

const healProperty = ["foo", "bar"];

let target = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
}

const proxy2 = new Proxy(target, {
    get(proxy, property, target) {
        if (healProperty.includes(property)) {
            return undefined;
        } else {
            return Reflect.get(...arguments);
        }
    },
    has(proxy, property, target) {
        if (healProperty.includes(property)) {
            return false;
        } else {
            return Reflect.has(...arguments);
        }
    }
})

console.log(proxy.foo)
console.log("baz" in proxy2);


// 因为所有赋值操作都会触发 set()捕获器，所以可以根据所赋的值决定是允许还是拒绝赋值:

target = {
    onlyNumbersGoHere: 0
};


proxy = new Proxy(target, {
    set(proxy, property, target) {
        if (typeof property !== "number") {
            // throw new Error("类型不匹配");
            console.log("类型不匹配");
            return false;
        } else {
            return Reflect.set(...arguments)
        }
    }
})

proxy.onlyNumbersGoHere = "1";

// 跟保护和验证对象属性类似，也可对函数和构造函数参数进行审查。比如，可以让函数只接收某种 类型的值:

function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
}

proxy = new Proxy(median, {
    apply(target, thisArg, argumentsList) {
        for (const argument of argumentsList) {
            if (typeof argument !== 'number') {
                throw 'Non-number argument provided';
            }
        }
        return Reflect.apply(...arguments)
    }
})

// console.log(proxy(4, 7, "1"))


// 类似地，可以要求实例化时必须给构造函数传参:

class User2 {
    constructor(name) {
        this.name = name;
    }
}

proxy = new Proxy(User2, {
    construct(target, argumentsList, newTarget) {
        if (argumentsList[0] === undefined) {
            throw 'User cannot be instantiated without id';
        } else {
            return Reflect.construct(...arguments);
        }
    }
})

new proxy(1);
// new proxy(); 


// 通过代理可以把运行时中原本不相关的部分联系到一起。这样就可以实现各种模式，从而让不同的 代码互操作。
// 比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都被添加到这个集合中:
class User3 {
    constructor(name){
        this.name = name;
    }
}


let userList = [];
proxy = new Proxy(User3,{
    construct(target,argumentsList,newTarget){
        const newUser = Reflect.construct(...arguments)
        userList.push(newUser);
        return newUser;
    }
})


new proxy('John');
new proxy('Jacob');
new proxy('Jingleheimerschmidt');
console.log(userList); // [User {}, User {}, User{}]


// 还可以把集合绑定到一个事件分派程序，每次插入新实例时都会发送消息:

function emit(newValue) {
    console.log(newValue);
}
let proxyList = new Proxy(userList,{
    set(proxy,property,target){
        const result = Reflect.set(...arguments);

        if (result) {
            emit(Reflect.get(...arguments))
        }

        return result;
    }
})

console.log(proxyList.push("hello"));

console.log(userList);