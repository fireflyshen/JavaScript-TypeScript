function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(num1 + num2)
}


doAdd(1, 2);



// 修改arguments，如果命名参数没有传递那么无法影响命名参数
function doAdd2(a, b) {
    arguments[1] = 100;
    console.log(a, b);
}


doAdd2(1);

// 箭头函数没有自己的arguments
// 可以包装的方式让泛型函数使用arguments
function doAdd3() {
    let bar = () => {
        console.log(arguments[0] + arguments[1])
    }

    bar();
}

doAdd3(2, 3)

// 参数默认值
function doAdd5(num,num2 = 2){
    console.log(num + num2);
}

doAdd5(1);

// 参数默认值同样有暂时性死区，前面的参数无法引用后面定义的
function doAdd4(num1 = num2, num2 = 2) {
    console.log(num + num2);
}

// doAdd4() // 异常


// 收集参数,通过扩展操作符
function doAdd6(...values){
    return values.reduce((prev,cur) => prev + cur);
}

console.log(doAdd6(1,2,3,4,5,6,7))

// 箭头函数同样也可以使用这个收集参数
let baz = (...values) => values.reduce((prev,cur) => prev + cur); 

console.log(baz(1,2,3,4,5,6,7))
