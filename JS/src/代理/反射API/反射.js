
// 很多反射方法返回称作“状态标记”的布尔值，表示意图执行的操作是否成功。有时候，状态标记 比那些返回修改后的对象或者抛出错误(取决于方法)的反射 API 方法更有用。例如，可以使用反射 API 对下面的代码进行重构:

let obj = {};


// try {
//     Object.defineProperty(obj,"foo","bar");
// }catch(e){
//     // console.log(e);

// }


// 如果使用反射API的话就不会抛出异常，而是返回一个布尔值，成功是true，失败则是false
var isSucess = Reflect.defineProperty(obj,"bar",{value:"foo"})

if (isSucess) {
    console.log("success");
}else console.log("failure");



// 反射返回的这个布尔值称之为状态标记
// Reflect.defineProperty()
// Reflect.preventExtensions() 
// Reflect.setPrototypeOf()
// Reflect.set()
// Reflect.deleteProperty()


//  Reflect.preventExtensions() // 防治对象被拓展
let obj2 = {
    id:"11"
}

console.log(Reflect.preventExtensions(obj2));

obj2.name = "hello"
console.log(obj2); // name并没有被挂载上去


let obj3 = {
    sayHello(){
        console.log("hellooooooooooo");
    }
}




Reflect.setPrototypeOf(obj,obj3);
obj.sayHello();


let obj4 ={
    id:"222"
}


console.log(Reflect.set(obj4,"id","333"));

console.log(obj4.id)

console.log(Reflect.deleteProperty(obj4,"id"))

//  Reflect.get():可以替代对象属性访问操作符。
//  Reflect.set():可以替代=赋值操作符。
//  Reflect.has():可以替代 in 操作符或 with()。
//  Reflect.deleteProperty():可以替代 delete 操作符。  Reflect.construct():可以替代 new 操作符。
let obj5 = {
    id:"555"
}

console.log(Reflect.get(obj5,"id"))

console.log(Reflect.set(obj5,"id","777"));
console.log(Reflect.has(obj5,"id"))
