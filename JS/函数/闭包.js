// 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。




function a(){
    var t = 1; 
    return function (){
        let _o = 10;
        return {
            get o(){
                return _o;
            },

            set o(newO){
                _o = newO;
            }
        };
    }
}


var test = a();
var instance = test();
console.log(instance.o)

instance.o = 11;
console.log(instance.o)



// var h = "hello";
globalThis.h = "hello"
let obj = {
    getHello(){
        let h = "hi";
        return function(){
            return this.h;
        }
    }
}

console.log(obj.getHello()()); // hello

obj = {
    h:"hiiiii",
    getHello(){
        _this = this;
        return function(){
            return _this.h;
        }
    }
}


console.log(obj.getHello()())

obj = {
    h:"hiiiiiiiiii",
    getHello(){
        return () => {
            return this.h;
        }
    }
}

console.log(obj.getHello()())

