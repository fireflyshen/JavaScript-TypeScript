let target = {
    thisValEqualsProxy(){
        return this === proxy;
    }
}


let proxy = new Proxy(target,{});

console.log(proxy.thisValEqualsProxy())
console.log(target.thisValEqualsProxy());


const map = new WeakMap();
class User{
    constructor(userID) {
        map.set(this,userID)
    }

    set id(userID){
        map.set(this,userID)
    }

    get id(){
        return map.get(this);
    }
}


var user = new User("123")
console.log(user.id)

var proxyUser = new Proxy(user,{});
console.log(proxyUser.id); // undefined
// 这是因为 User 实例一开始使用目标对象作为 WeakMap 的键，代理对象却尝试从自身取得这个实 例。
// 要解决这个问题，就需要重新配置代理，把代理 User 实例改为代理 User 类本身。
// 之后再创建代 理的实例就会以代理实例作为 WeakMap 的键了:

var ProxyUserClass = new Proxy(User,{});

var proxyUserForClass = new ProxyUserClass("456");

console.log(map.get(proxyUserForClass))